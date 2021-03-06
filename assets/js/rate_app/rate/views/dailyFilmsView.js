var rateApp = rateApp || {}

rateApp.DailyFilmsView = Backbone.View.extend({

    tagName: 'div',
    template: $("#dailyFilmsTemplate").html(),
    choosedPersons: [],
    choosedPersonsMovies: [],
    events: {
        'click .findMoviesButton': "clickFindMovies",
        'click .removeBlock': "removeActor",
        'click .findIntersections': "findIntersections",
        'click .refresh': "refresh",
        'mouseover .actorBlock': 'actorBlockMouseOver',
        'mouseout .actorBlock': 'actorBlockMouseOut',
    },
    timerStatusesPanelID: null,

    initialize: function() {

        // code that activates beforeRender and afterRender functions
        _.bindAll(this, 'beforeRender', 'render', 'afterRender');
        var _this = this;
        this.render = _.wrap(this.render, function(render) {
            _this.beforeRender();
            render();
            _this.afterRender();
            return _this;
        });

        this.choosedPersonCollection = new rateApp.PersonsCollection();
        this.choosedPersonMovieCreditsCollection = new rateApp.PersonMovieCreditsCollection();


    },

    render: function() {

        var tmpl = _.template(this.template);
        this.$el.append(tmpl(this.model.toJSON()));

        typicalViewDressing();

        return this;
    },

    beforeRender: function() {
        console.log('beforeRender');
    },

    afterRender: function() {
        console.log('afterRender');

        // var tableView = new rateApp.TableView({
        //     collection: peopleCollection
        // });

        // $(".tableResultsHolder").append(tableView.render().$el);

        var that = this;
        $('#search-actors-autocomplete').autocomplete({
            serviceUrl: "http://api.themoviedb.org/3/search/person?api_key=37662c76ffc19e5cd1b95f37d77155fc",
            //paramName: 'searchString',

            transformResult: function(response) {
                var parsedResponse = $.parseJSON(response);
                var resultArray = [];
                $.each(parsedResponse.results, function(index, person) {
                    var record = {
                        "value": person.name,
                        "data": person
                    }
                    resultArray.push(record);
                });
                return {
                    suggestions: resultArray
                };
            },
            minChars: 3,
            onSelect: function(suggestion) {

                var person = new rateApp.PersonModel(suggestion.data);
                that.choosedPersonCollection.add(person);

                that.choosedPersons.push(suggestion);
                $.when(getCreditsByPersonId(suggestion.data.id)).then(function(responseCredits) {
                    var castCollection = new rateApp.MovieCastCollection(responseCredits.cast);
                    responseCredits.cast = castCollection;
                    var personMovieCredits = new rateApp.PersonMovieCreditsModel(responseCredits);
                    that.choosedPersonMovieCreditsCollection.add(personMovieCredits);
                    //that.choosedPersonsMovies.push(responseCredits.cast);
                    that.createActorElement(suggestion.data.profile_path, suggestion.data.name, suggestion.data.id);
                    //that.createActorDashboard(personMovieCredits);
                    $("#search-actors-autocomplete").val('');
                });

            }

        });

        $("#searchclear").click(function() {
            $("#search-actors-autocomplete").val('');
        });

    },
    createActorDashboard: function(personMovieCredits){
        var castModels = personMovieCredits.get("cast").models; // all movies with person
        var that = this;
        $.each(castModels, function(index, model){
            var imgSrc = model.get("poster_path");
            var title = model.get("title");
            var idMovie = model.get("id");
            that.createMovieElement(imgSrc, title, idMovie);
        });

    },
    createActorElement: function(imgSrc, name, idActor) {
        var block = $("<div id='actorid_" + idActor + "' class='actorBlock'><img src='http://image.tmdb.org/t/p/w92" + imgSrc + "'/><span class='glyphicon glyphicon-remove-circle removeBlock'></span><div>" + name + "</div></div>")
        $(".actorsPanel").append(block);
        $(".resultsPanel").html("");
        //this.updateResults();

    },
    createMovieElement: function(imgSrc, title, idMovie) {
        var image_path = "";
        var noImageValue = "";
        if (imgSrc.indexOf("no-image") != -1) {
            image_path = "";
            noImageValue = "no-image";
        } else {
            image_path = "http://image.tmdb.org/t/p/w154" + imgSrc;
        }
        var block = $("<div class='actorBlock " + noImageValue + "'><img src='" + image_path + "'/><div>" + title + "</div></div>")
        $(".resultsPanel").append(block);
    },
    actorBlockMouseOver: function(ev) {
        //if(this.timerStatusesPanelID != null){
        //    clearTimeout(this.timerStatusesPanelID);
        //}
        $(ev.target).closest(".actorBlock").find(".removeBlock").show();
    },
    actorBlockMouseOut: function(ev) {
        //if(this.timerStatusesPanelID != null){
        //    clearTimeout(this.timerStatusesPanelID);
        //}
        //this.timerStatusesPanelID = setTimeout(function(){
        $(ev.target).closest(".actorBlock").find(".removeBlock").hide();
        //}, 500);
    },
    findIntersections: function(){

        // $( ".resultsPanel" ).slideUp( 200, function() {
        // // Animation complete.
        // });

        var resultMovieCastCollection = new rateApp.MovieCastCollection();
        $.each(this.choosedPersonMovieCreditsCollection.models, function(index, movieCasts){
            // console.log("movieCasts---->");
            // console.log(movieCasts);
            var actorID = movieCasts.id;
            // console.log("actorID");
            // console.log(actorID);
            $.each(movieCasts.attributes.cast.models, function(index_, castModel){
                //console.log("castModel");
                //console.log(castModel);

                var tempModel = resultMovieCastCollection.findWhere({ id: castModel.get("id") });
                if(tempModel != undefined) {
                    tempModel.get("actorsArray").push(actorID);
                }
                else {
                    castModel.set("actorsArray", new Array());
                    castModel.get("actorsArray").push(actorID);
                    resultMovieCastCollection.push(castModel);
                }
            });
        });

        var filteredResultArray = new rateApp.MovieCastCollection();
        $.each(resultMovieCastCollection.models, function(index, model){
            if(model.get("actorsArray").length!=1){
                filteredResultArray.push(model);
            }
        });

        console.log("filteredResultArray");
        console.log(filteredResultArray);

        var tableView = new rateApp.TableView({
            collection: filteredResultArray
        });

        $(".tableResultsHolder").html("").append(tableView.render().$el);
    },
    refresh: function(){
        //var MyApp = new Backbone.Router();
        router.navigate('/dailyfilms', {trigger: true}); 
    },
    clickFindMovies: function() {
        this.updateResults();
    },
    updateResults: function() {
        console.log("click find");
        //console.log(this.choosedPersons);
        //console.log(this.choosedPersonsMovies);

        var that = this;

        //if (this.choosedPersonMovieCreditsCollection.length > 1) {
            /*
            var sampleObject = this.choosedPersonMovieCreditsCollection.at(0);
            var resultCollection = new rateApp.PersonMovieCreditsCollection();
            $(".resultsPanel").html("");
            this.choosedPersonMovieCreditsCollection.each(function(personMovieCredits, index){
                if(index!=0){
                    sampleObject.each(function(sampleObjectItem, index_){
                        var tempPersonMovieCreditsCollection = new rateApp.PersonMovieCreditsCollection();
                        personMovieCredits.each(function(personMovieCreditsItem, index__){
                            if(personMovieCreditsItem.get("id")==sampleObjectItem.get("id")){
                                tempPersonMovieCreditsCollection.add(sampleObjectItem);
                            }
                            tempPersonMovieCreditsCollection.each(function(tempItem, ind){
                                resultCollection.add(tempItem);
                            })
                        });
                    });
                }
            });
            console.log("resultCollection");
            console.log(resultCollection);
            */
            var sampleObject = this.choosedPersonMovieCreditsCollection.at(0);
            var sampleObjectCast = sampleObject.get("cast");
            var res = [];
            var resultsCollection = new rateApp.MovieCastCollection();
            var tempResultsCollection = new rateApp.MovieCastCollection();
            $(".resultsPanel").html("");
            this.choosedPersonMovieCreditsCollection.each(function(personMovieCredits, index) {
                //if (index != 0) {
                    res = [];
                    resultsCollection.reset();
                    //$.each(sampleObjectCast, function(index_, model) {
                    sampleObjectCast.each(function(model, index_){
                        var tmp = [];
                        // var tempResultsCollection = new rateApp.MovieCastCollection();
                        personMovieCredits.get("cast").each(function(movieOther, ind) {
                            if (movieOther.id == model.id) {
                                var castItem = new rateApp.MovieCastModel(model);
                                tmp.push(model);
                                tempResultsCollection.add(castItem);
                            }
                        });
                        $.each(tmp, function(i, m) {
                            res.push(m); // if ....
                        });
                        // tempResultsCollection.each(function(m, i) {
                        //     resultsCollection.add(m);
                        // });
                    });
                    sampleObjectCast = JSON.parse(JSON.stringify(res));
                //}
            });
            console.log("res");
            console.log(res);
            $.each(res, function(ind, model) {
                //$.when(findMovieById(model.id)).then(function(responseMovie) {
                    that.createMovieElement(model.poster_path, model.title, model.id); //$(".resultsPanel").append($("<div>" + responseMovie.id + " " + responseMovie.title + " " + responseMovie.poster_path + "</div>"));
                //});
            });
            //resultsColelction = resultsCollection.sort_by_release_date();
            var tableView = new rateApp.TableView({
                collection: tempResultsCollection
            });

            $(".tableResultsHolder").html("").append(tableView.render().$el);


        //}
    },
    removeActor: function(ev) {
        console.log("removeActor");
        console.log(ev.target);
        var $actorBlock = $(ev.target).closest(".actorBlock");
        var id_ = $actorBlock.attr("id");
        var id = id_.substr(id_.indexOf("_") + 1, id_.length - 1);
        $(ev.target).closest(".actorBlock").remove();
        var choosedPersons = this.choosedPersons;
        var resPersons = $.grep(choosedPersons, function(person, index) {
            return (person.data.id != id);
        });
        this.choosedPersons = resPersons;
        this.updateMovies();
    },
    updateMovies: function() {
        //that.choosedPersons.push(suggestion);
        var that = this;
        this.choosedPersonsMovies = [];
        var choosedPersons = this.choosedPersons;
        $(".resultsPanel").html("");
        $.each(choosedPersons, function(index, person) {
            $.when(getCreditsByPersonId(person.data.id)).then(function(responseCredits) {
                that.choosedPersonsMovies.push(responseCredits.cast);

                if (that.choosedPersonsMovies.length > 1) {
                    var sampleObject = that.choosedPersonsMovies[0];
                    var res = [];
                    $.each(that.choosedPersonsMovies, function(index, moviesOther) {
                        if (index != 0) {
                            $.each(sampleObject, function(index, movieSample) {
                                $.each(moviesOther, function(index_, movieOther) {
                                    if (movieSample.id == movieOther.id) {
                                        if ($.inArray(res, movieSample.id) == -1) {
                                            res.push(movieSample.id);
                                        }
                                    }
                                })
                            });
                        }
                        console.log("res");
                        console.log(res);
                    });
                    $.each(res, function(ind, model) {
                        $.when(findMovieById(res[ind])).then(function(responseMovie) {
                            that.createMovieElement(responseMovie.poster_path, responseMovie.title); //$(".resultsPanel").append($("<div>" + responseMovie.id + " " + responseMovie.title + " " + responseMovie.poster_path + "</div>"));
                        });
                    });
                }
            });
        });

    }


});
