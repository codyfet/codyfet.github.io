
var rateApp = rateApp || {}

rateApp.FilmsView = Backbone.View.extend({

	tagName: 'div',
	template: $("#filmsTemplate").html(),
	events: {
		"click .item" : "openDetails"
	},

	initialize: function(){

        // code that activates beforeRender and afterRender functions
        _.bindAll(this, 'beforeRender', 'render', 'afterRender');
        var _this = this;
        this.render = _.wrap(this.render, function(render) {
            _this.beforeRender();
            render();
            _this.afterRender();
            return _this;
        });

        // films proccessing
        var that = this;
        var years = this.model.attributes.films;

        $.each(years,function(index, item){

            // load fiction films
            $.each(item.fiction, function(index_, item_){
                if(item_.imdbId != undefined && item_.imdbId != ""){
                    $.when(getMovieInfo(item_.imdbId)).then(function(res){
                        item_.imdbData = new Object();
                        $.extend(item_.imdbData, res);
                        that.renderPoster(item_);
                    });
                }
            });
            // load series films
            $.each(item.series, function(index_, item_){

                if(item_.imdbId != undefined && item_.imdbId != ""){
                    $.when(getMovieInfo(item_.imdbId)).then(function(res){
                        item_.imdbData = new Object();
                        $.extend(item_.imdbData, res);
                        that.renderPoster(item_);
                    });
                }
            });

        });
	},

	render: function(){

		var tmpl = _.template(this.template);
		this.$el.append(tmpl(this.model.toJSON()));

		typicalViewDressing();

		return this;
	},

    beforeRender: function() {
        //console.log('beforeRender');
    },

    afterRender: function() {
        console.log('afterRender');
        // control loading
        this.renderPosters();
    },

	"openDetails" : function(ev){
    	console.log("openDetails");
    	console.log(ev);
    	console.log(el);
    },

    renderPoster : function(item){
        var imdbId = item.imdbId;
        var posterUrl = "";
        if(item.imdbData != undefined){
            posterUrl = item.imdbData.Poster;
            var $row = $("#"+imdbId);
            var $posterHolder = $row.find(".poster_holder");
        }
        else {
            console.log("Doesn't exists imdbData for this item");
        }
        if(posterUrl != "" && posterUrl != "N/A"){
            $posterHolder.css("background", "url(" + posterUrl + ")");
            $posterHolder.css("background-size", "100%");
            $posterHolder.css("background-repeat", "no-repeat");
        }
    },

    renderPosters: function(item) {

        console.log("Render poster film");
        var filmsyears = this.model.attributes.films;
        $.each(filmsyears, function(index, model) {
            $.each(model.fiction, function(index_, item_) {
                var imdbId = item_.imdbId;
                if (imdbId != undefined) {

                    var posterUrl = item_.imdbData.Poster;
                    var $row = $("#" + imdbId);
                    var $posterHolder = $row.find(".poster_holder");

                    if(posterUrl != "N/A" && $posterHolder.css("background-image") == "none"){
                        $posterHolder.css("background", "url(" + posterUrl + ")");
                        $posterHolder.css("background-size", "100%");
                        $posterHolder.css("background-repeat", "no-repeat");
                    }

                }
            });
        });

    }

});