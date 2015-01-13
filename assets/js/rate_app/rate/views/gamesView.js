
var rateApp = rateApp || {}

rateApp.GamesView = Backbone.View.extend({
	
	tagName: 'div',
	template: $("#gamesTemplate").html(),
	events: {

		// 'click a[class^="col-"]' : 'openColl',
		// 'click a[class^="text-"]' : 'openText',
		// 'click .addColl' : 'addColl',
		// 'click .addText' : 'addText'
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