var rateApp = rateApp || {}

rateApp.MovieCastCollection = Backbone.Collection.extend({

	model: rateApp.MovieCastModel,
    initialize: function() {
        this.sort_key = 'release_date';
    },
    comparator: function(a, b) {
        a = a.get(this.sort_key);
        b = b.get(this.sort_key);
        return a < b ?  1
             : a > b ? -1
             :          0;
    },
    sort_by_release_date: function() {
        this.sort_key = 'release_date';
        this.sort();
    }

});