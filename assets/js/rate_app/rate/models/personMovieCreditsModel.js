var rateApp = rateApp || {}

rateApp.PersonMovieCreditsModel = Backbone.Model.extend({

    defaults: {
        cast: rateApp.MovieCastCollection,
        crew: "",
        id: ""
    },
    initialize: function() {

    }
});
