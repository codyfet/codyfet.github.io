
var rateApp = rateApp || {}

rateApp.MainView = Backbone.View.extend({
	
	tagName: 'div',
	template: $("#mainWrapper").html(),
	events: {

	},
	
	initialize: function(){
		
	},
	
	render: function(){
		var tmpl = _.template(this.template);
		this.$el.append(tmpl(this.model.toJSON()));	

		$(".image_gallery").hide();
        $(".main_link").hide();
        $("#social").show();

		$(".img_").hover(function(el){

				var textEl = $(el.target).closest(".parent").find(".hovered_text");

				$(textEl).css("visibility","visible");
			
			},function(el){
			
				var textEl = $(el.target).closest(".parent").find(".hovered_text");
				
				$(textEl).css("visibility","hidden");
		});
		
		$("#social").addClass("main_social");
		$("#f").addClass("main_footer");

		return this;
	}	

});