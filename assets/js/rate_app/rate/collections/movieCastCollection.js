var rateApp = rateApp || {}

rateApp.MovieCastCollection = Backbone.Collection.extend({

	model: rateApp.MovieCastModel,
    initialize: function() {
        //this.sort_key = 'release_date';
    },
    comparator: function(a, b) {
        if(this.sort_key=="release_date"){
            a = a.attributes.release_date;
            b = b.attributes.release_date;
            return a < b ?  1
                 : a > b ? -1
                 :          0;
        }
        else if(this.sort_key=="actors_count"){
            a = a.attributes.actorsArray;
            b = b.attributes.actorsArray;
            return a.length < b.length ?  1
                 : a.length > b.length ? -1
                 :          0;
        }

    },
    sort_by_release_date: function() {
        this.sort_key = 'release_date';
        this.sort();
    },
    sort_by_actors_count: function() {
        this.sort_key = 'actors_count';
        this.sort(this.comparatorActorsCount);
    }

});