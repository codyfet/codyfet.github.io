
var rateApp = rateApp || {}

rateApp.FilmsView = Backbone.View.extend({
	
	tagName: 'div',
	template: $("#filmsTemplate").html(),
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