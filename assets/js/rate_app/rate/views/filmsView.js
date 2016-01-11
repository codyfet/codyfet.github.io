
var rateApp = rateApp || {}

rateApp.FilmsView = Backbone.View.extend({

	tagName: 'div',
	template: $("#filmsTemplate").html(),
	events: {
		"click .item" : "openDetails"
	},

	initialize: function(){
        var that = this;
        console.log("INIT filmView");
        console.log(this);
        console.log(this.model.attributes.films);
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
            // load fiction films
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

	"openDetails" : function(ev){
    	console.log("openDetails");
    	console.log(ev);
    	console.log(el);
    },

    renderPoster : function(item){
        var imdbId = item.imdbId;
        var posterUrl = item.imdbData.Poster;
        var $row = $("#"+imdbId);
        var $posterHolder = $row.find(".poster_holder");

        if(posterUrl != "N/A"){
            $posterHolder.css("background", "url(" + posterUrl + ")");
            $posterHolder.css("background-size", "100%");
            $posterHolder.css("background-repeat", "no-repeat");
        }

    }

});