var rateApp = rateApp || {}

rateApp.DailyFilmsView = Backbone.View.extend({

    tagName: 'div',
    template: $("#dailyFilmsTemplate").html(),
    events: {

    },

    initialize: function() {

        // code that activates beforeRender and afterRender functions
        _.bindAll(this, 'beforeRender', 'render', 'afterRender');
        var _this = this;
        this.render = _.wrap(this.render, function(render) {
            _this.beforeRender();
            render();
            _this.afterRender();
            return _this;
        });

        // games proccessing
        var that = this;
        // var years = this.model.attributes.games;
        // $.each(years, function(index, item) {

        //     $.each(item, function(index_, item_) {
        //         if (item_.giantBombId != undefined && item_.giantBombId != "") {
        //             $.when(getGameInfo(item_.giantBombId)).then(function(res) {
        //                 item_.giantBombData = new Object();
        //                 $.extend(item_.giantBombData, res);
        //                 //that.renderPoster(item_);
        //             });
        //         }
        //     });

        // });

    },

    render: function() {

        var tmpl = _.template(this.template);
        this.$el.append(tmpl(this.model.toJSON()));

        typicalViewDressing();

        return this;
    },

    beforeRender: function() {
        console.log('beforeRender');
    },

    afterRender: function() {
        console.log('afterRender');

        var countries = [
           { value: 'Andorra', data: 'AD' },
           // ...
           { value: 'Zimbabwe', data: 'ZZ' }
        ];

        $('#autocomplete').autocomplete({
            lookup: countries,
            onSelect: function (suggestion) {
                //alert('You selected: ' + suggestion.value + ', ' + suggestion.data);
            }
        });

    },

});
