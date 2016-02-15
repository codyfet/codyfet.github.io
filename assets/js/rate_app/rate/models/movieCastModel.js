var rateApp = rateApp || {}

rateApp.MovieCastModel = Backbone.Model.extend({

    defaults: {
        // adult: false
        // character: "Melissa Norman"
        // credit_id: "52fe43169251416c75002e7b"
        // id: 10055
        // original_title: "Room 6"
        // poster_path: "/xh6LEDeAFs6gbkCkvqn4Nsq3jZ7.jpg"
        // release_date: "2006-01-01"
        // title: "Room 6"
    },
    initialize: function() {
        // poster_path fix
        var posterPath = this.get("poster_path");
        var image_path = "";
        var noImageValue = "";
        if (posterPath == null) {
            image_path = "../codyfet.github.io/assets/img/new/no-image-small.jpg";
        } else {
            image_path = "http://image.tmdb.org/t/p/w154" + posterPath;
        }
        this.set("poster_path", image_path);

        // year fix
        var release_date = this.get("release_date");
        var year = "";
        if(release_date != null){
            year = release_date.split("-")[0];
        }
        this.set("release_date", year);

    }

});
