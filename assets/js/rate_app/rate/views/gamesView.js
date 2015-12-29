
var rateApp = rateApp || {}

rateApp.GamesView = Backbone.View.extend({

	tagName: 'div',
	template: $("#gamesTemplate").html(),
	events: {

	},

	initialize: function(){

	},

	render: function(){

		var tmpl = _.template(this.template);
		this.$el.append(tmpl(this.model.toJSON()));

		typicalViewDressing();

		return this;
	},

});