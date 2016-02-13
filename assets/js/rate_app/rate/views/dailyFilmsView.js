var rateApp = rateApp || {}

rateApp.DailyFilmsView = Backbone.View.extend({

    tagName: 'div',
    template: $("#dailyFilmsTemplate").html(),
    choosedPersons: [],
    choosedPersonsMovies: [],
    events: {
        'click .findMoviesButton' : "clickFindMovies",
        'click .removeBlock' : "removeActor",
        'mouseover .actorBlock': 'actorBlockMouseOver',
        'mouseout .actorBlock': 'actorBlockMouseOut',
    },
    timerStatusesPanelID : null,

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

        // var countries = [
        //    { value: 'Andorra', data: 'AD' },
        //    { value: 'Zimbabwe', data: 'ZZ' }
        // ];

        // $('#autocomplete').autocomplete({
        //     //lookup: countries,
        //     // source: function(request, response){
        //     //     $.ajax({
        //     //         data:{
        //     //             maxRows: 12, // показать первые 12 результатов
        //     //             nameStartsWith: request.term // поисковая фраза
        //     //         },
        //     //         success: function(data){
        //     //             response($.map(data, function(item){
        //     //                 return {
        //     //                     plink: item.plink, // ссылка на страницу товара
        //     //                     label: item.title_ru // наименование товара
        //     //                 }
        //     //             }));
        //     //         }
        //     //     });
        //     // },
        //     serviceUrl: '/autocomplete/countries',
        //     onSelect: function (suggestion) {
        //         //alert('You selected: ' + suggestion.value + ', ' + suggestion.data);
        //     },
        //     minLength: 3
        // });
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
            minChars:3,
            onSelect: function(suggestion) {
				console.log("ONSELECT");
				var person = new rateApp.PersonModel(suggestion.data);
				console.log(person);
				that.choosedPersonCollection.add(person);
				console.log(that.choosedPersonCollection);
                //alert('You selected: ' + suggestion.value + ', ' + suggestion.data);
				
                that.choosedPersons.push(suggestion);
                $.when(getCreditsByPersonId(suggestion.data.id)).then(function(responseCredits){                    
					var personMovieCredits = new rateApp.PersonMovieCreditsModel(responseCredits);
					that.choosedPersonMovieCreditsCollection.add(personMovieCredits);					
					//that.choosedPersonsMovies.push(responseCredits.cast);
                    that.createActorElement(suggestion.data.profile_path, suggestion.data.name, suggestion.data.id);
                    $("#search-actors-autocomplete").val('');
                    $(".findMoviesButton").show();
                });
				

            }

        });

        $("#searchclear").click(function(){
            $("#search-actors-autocomplete").val('');
        });

    },
    createActorElement : function(imgSrc, name, idActor){
        var block = $("<div id='actorid_" + idActor + "' class='actorBlock'><img src='http://image.tmdb.org/t/p/w92" + imgSrc + "'/><span class='glyphicon glyphicon-remove-circle removeBlock'></span><div>" + name + "</div></div>")
        $(".actorsPanel").append(block);
        $(".resultsPanel").html("");
        this.updateResults();

    },
    createMovieElement : function(imgSrc, title){
		var image_path = "";
		var noImageValue = "";
		if(imgSrc==null){
			image_path = "";	
			noImageValue = "no-image";		
		}
		else{
			image_path = "http://image.tmdb.org/t/p/w92" + imgSrc;
		}
        var block = $("<div class='actorBlock " + noImageValue + "'><img src='" + image_path + "'/><div>" + title + "</div></div>")
        $(".resultsPanel").append(block);
    },
    actorBlockMouseOver:function(ev){
        //if(this.timerStatusesPanelID != null){
        //    clearTimeout(this.timerStatusesPanelID);
        //}
        $(ev.target).closest(".actorBlock").find(".removeBlock").show();
    },
    actorBlockMouseOut:function(ev){
        //if(this.timerStatusesPanelID != null){
        //    clearTimeout(this.timerStatusesPanelID);
        //}
        //this.timerStatusesPanelID = setTimeout(function(){
            $(ev.target).closest(".actorBlock").find(".removeBlock").hide();
        //}, 500);
    },
    clickFindMovies : function(){
		this.updateResults();
    },
	updateResults: function(){
        console.log("click find");
        //console.log(this.choosedPersons);
        //console.log(this.choosedPersonsMovies);

        var that = this;

        if(this.choosedPersonMovieCreditsCollection.length>1){
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
			$(".resultsPanel").html("");
			this.choosedPersonMovieCreditsCollection.each(function(personMovieCredits, index){
				if(index!=0){
					res = [];
					$.each(sampleObjectCast, function(index_, model){						
						var tmp = [];						
						$.each(personMovieCredits.get("cast"), function(ind, movieOther){
							if(movieOther.id==model.id){
								tmp.push(model);
							}
						});
						$.each(tmp, function(i, m){
							res.push(m); // if ....							
						});									
					});
					sampleObjectCast = JSON.parse(JSON.stringify(res));
				}
			});
			console.log("res");
			console.log(res);	
		    $.each(res, function(ind, model){
                $.when(findMovieById(model.id)).then(function(responseMovie){
					that.createMovieElement(responseMovie.poster_path, responseMovie.title);//$(".resultsPanel").append($("<div>" + responseMovie.id + " " + responseMovie.title + " " + responseMovie.poster_path + "</div>"));
                });
            });

        }
	},
    removeActor: function(ev){
        console.log("removeActor");
        console.log(ev.target);
        var $actorBlock = $(ev.target).closest(".actorBlock");
        var id_ = $actorBlock.attr("id");
        var id = id_.substr(id_.indexOf("_")+1, id_.length-1);
        $(ev.target).closest(".actorBlock").remove();
        var choosedPersons = this.choosedPersons;
        var resPersons = $.grep(choosedPersons, function(person,index){
            return (person.data.id!=id);
        });
        this.choosedPersons = resPersons;
        this.updateMovies();
    },
    updateMovies:function(){
        //that.choosedPersons.push(suggestion);
        var that = this;
        this.choosedPersonsMovies = [];
        var choosedPersons = this.choosedPersons;
        $(".resultsPanel").html("");
        $.each(choosedPersons, function(index, person){
            $.when(getCreditsByPersonId(person.data.id)).then(function(responseCredits){
                that.choosedPersonsMovies.push(responseCredits.cast);

                if(that.choosedPersonsMovies.length>1){
                    var sampleObject = that.choosedPersonsMovies[0];
                    var res = [];
                    $.each(that.choosedPersonsMovies, function(index, moviesOther){
                        if(index!=0){
                            $.each(sampleObject, function(index, movieSample){
                                $.each(moviesOther, function(index_, movieOther){
                                    if(movieSample.id==movieOther.id){
                                        if($.inArray(res,movieSample.id)==-1){
                                            res.push(movieSample.id);
                                        }
                                    }
                                })
                            });
                        }
                        console.log("res");
                        console.log(res);
                    });
                    $.each(res, function(ind, model){
                        $.when(findMovieById(res[ind])).then(function(responseMovie){
                            that.createMovieElement(responseMovie.poster_path, responseMovie.title);//$(".resultsPanel").append($("<div>" + responseMovie.id + " " + responseMovie.title + " " + responseMovie.poster_path + "</div>"));
                        });
                    });
                }
            });
        });

    }


});
