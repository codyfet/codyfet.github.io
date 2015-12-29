
var rateApp = rateApp || {}

rateApp.BooksView = Backbone.View.extend({

	tagName: 'div',
	template: $("#booksTemplate").html(),
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