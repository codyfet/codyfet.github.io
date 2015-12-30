
var rateApp = rateApp || {}

rateApp.FilmsView = Backbone.View.extend({

	tagName: 'div',
	template: $("#filmsTemplate").html(),
	events: {
		"click .item" : "openDetails"
	},

	initialize: function(){
        console.log("INIT filmView");
        console.log(this);
        console.log(this.model.attributes.films);
        var years = this.model.attributes.films;
        $.each(years,function(index, item){
            $.each(item.fiction, function(index_, item_){
                if(item_.imdbId != undefined && item_.imdbId != ""){
                    $.when(getMovieInfo(item_.imdbId), function(res){
                        $.extend(item_.imdbData, res);
                        console.log("item_");
                        console.log(item_);
                    })
                }
            })
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
    }

});