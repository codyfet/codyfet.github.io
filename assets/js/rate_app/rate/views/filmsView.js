
var rateApp = rateApp || {}

rateApp.FilmsView = Backbone.View.extend({

	tagName: 'div',
	template: $("#filmsTemplate").html(),
	events: {
		"click .item" : "openDetails"
	},
    request_token: "",
    list_id: "5697c23f7536a13bcc00004e",

	initialize: function(){

        // code that activates beforeRender and afterRender functions
        // _.bindAll(this, 'beforeRender', 'render', 'afterRender');
        // var _this = this;
        // this.render = _.wrap(this.render, function(render) {
        //     _this.beforeRender();
        //     render();
        //     _this.afterRender();
        //     return _this;
        // });

        // films proccessing
        var that = this;
        var years = this.model.attributes.films;

        // my list
        console.log("My List " + this.list_id);

        // #1 Get REQUEST_TOKEN (TMDB)
        $.when(getRequestTokenTmdb()).then(function(resp_token){
            that.request_token = resp_token.request_token;
            console.log(that.request_token);
            // #2 Ask permission for user on TMDB (in this case user codyfet)
            $.when(askPermissionTmdb(that.request_token)).then(function(resp_permission){
                console.log("resp permission");
                console.log(resp_permission);
                // #3 If permission allows get SESSION_ID (session_id needs for post request to the TMDB service)
                if(resp_permission.success){
                    $.when(getSessionId(that.request_token)).then(function(resp_session){
                        console.log("resp_session");
                        console.log(resp_session);
                        $.when(getInfoAboutListTmdb(that.list_id)).then(function(response_list){
                            var films = response_list.items;
                            that.renderPosters(films);
                            //that.renderBackdrops(films);
                            that.renderPostersForTV();
                        });
                    });
                }
            });
        });

        // $.each(years,function(index, item){

        //     // load fiction films
        //     // $.each(item.fiction, function(index_, item_){
        //     //     if(item_.imdbId != undefined && item_.imdbId != ""){
        //     //         $.when(getMovieInfoTmdb(item_.imdbId)).then(function(res){
        //     //             item_.imdbData = new Object();
        //     //             $.extend(item_.imdbData, res);
        //     //             //that.renderPoster(item_);
        //     //         });
        //     //     }
        //     // });
        //     // load series films
        //     // $.each(item.series, function(index_, item_){

        //     //     if(item_.imdbId != undefined && item_.imdbId != ""){
        //     //         $.when(getMovieInfo(item_.imdbId)).then(function(res){
        //     //             item_.imdbData = new Object();
        //     //             $.extend(item_.imdbData, res);
        //     //             //that.renderPoster(item_);
        //     //         });
        //     //     }
        //     // });

        // });
	},

	render: function(){

		var tmpl = _.template(this.template);
		this.$el.append(tmpl(this.model.toJSON()));

		typicalViewDressing();

		return this;
	},

    // beforeRender: function() {
    //     //console.log('beforeRender');
    // },

    // afterRender: function() {
    //     console.log('afterRender');
    //     // control loading
    //     //this.renderPosters();
    // },

	"openDetails" : function(ev){
    	console.log("openDetails");
    	console.log(ev);
    },

    renderPosters: function(films) {

        console.log("Render poster film");

        $.each(films, function(index, model) {

            var id = model.id;
            var poster_url = model.poster_path;
            var poster_path = "http://image.tmdb.org/t/p/w92" + poster_url;

            var $row = $("#" + id);
            var $posterHolder = $row.find(".poster_holder");

            $posterHolder.css("background", "url(" + poster_path + ")");
            $posterHolder.css("background-size", "100%");
            $posterHolder.css("background-repeat", "no-repeat");

        });

    },
    renderBackdrops: function(films) {

        console.log("Render backdrop film");

        $.each(films, function(index, model) {

            var id = model.id;
            var backdrop_url = model.backdrop_path;
            var backdrop_path = "http://image.tmdb.org/t/p/w92" + backdrop_url;

            var $row = $("#" + id);
            var $backdropHolder = $row.find(".backdrop_holder");

            $backdropHolder.css("background", "url(" + backdrop_path + ")");
            $backdropHolder.css("background-size", "100%");
            $backdropHolder.css("background-repeat", "no-repeat");

        });

    },
    renderPostersForTV: function() {

        console.log("Render poster TV");

        var series13 = multi.films.year2013.series;
        var series15 = multi.films.year2015.series;
        var series16 = multi.films.year2016.series;
        var series = $.extend([], series13, series15, series16);

        $.each(series, function(index, item){
            var imdbId = item.imdbId;
            $.when(findMovieByImdbId(imdbId)).then(function(response){
                var id = response.tv_results[0].id;
                var tmdbData = response.tv_results[0];

                var poster_url = tmdbData.poster_path;
                var poster_path = "http://image.tmdb.org/t/p/w92" + poster_url;

                var $row = $("." + id);
                var $posterHolder = $row.find(".poster_holder");

                $posterHolder.css("background", "url(" + poster_path + ")");
                $posterHolder.css("background-size", "100%");
                $posterHolder.css("background-repeat", "no-repeat");
            });
        });

        // $.each(series, function(index, model) {

        //     var id = model.id;
        //     var poster_url = model.poster_path;
        //     var poster_path = "http://image.tmdb.org/t/p/w92" + poster_url;

        //     var $row = $("#" + id);
        //     var $posterHolder = $row.find(".poster_holder");

        //     $posterHolder.css("background", "url(" + poster_path + ")");
        //     $posterHolder.css("background-size", "100%");
        //     $posterHolder.css("background-repeat", "no-repeat");

        // });

    }

});