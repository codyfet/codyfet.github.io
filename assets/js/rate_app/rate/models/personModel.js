var rateApp = rateApp || {}


// item from list getted by http://api.themoviedb.org/3/search/person?api_key=37662c76ffc19e5cd1b95f37d77155fc&query=Chl where "Clo" is inserted value by user
rateApp.PersonModel = Backbone.Model.extend({

	defaults: {
		//adult: false
		//id: 37917
		//known_for: Array[3]
		name: "Default name"
		//popularity: 6.562606
		//profile_path: "/aJIEREiQJReD
	},
    initialize: function(){
        
    }	

});