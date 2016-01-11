var rateApp = rateApp || {}

rateApp.GamesView = Backbone.View.extend({

    tagName: 'div',
    template: $("#gamesTemplate").html(),
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
        var years = this.model.attributes.games;
        $.each(years, function(index, item) {

            $.each(item, function(index_, item_) {
                if (item_.giantBombId != undefined && item_.giantBombId != "") {
                    $.when(getGameInfo(item_.giantBombId)).then(function(res) {
                        item_.giantBombData = new Object();
                        $.extend(item_.giantBombData, res.results);
                        //that.renderPoster(item_);
                    });
                }
            });

        });
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
        this.renderPosters();
    },

    renderPoster: function(item) {

        var giantBombIdId = item.giantBombId;
        var posterUrl = item.giantBombData.image.small_url;
        var $row = $("#" + giantBombIdId);
        var $posterHolder = $row.find(".game_poster_holder");

        if (posterUrl != "N/A") {
            $posterHolder.css("background", "url(" + posterUrl + ")");
            $posterHolder.css("background-size", "100%");
            $posterHolder.css("background-repeat", "no-repeat");
        }

        console.log("Render poster game");

    },

    renderPosters: function(item) {

        console.log("Render poster game");
        var gamesyears = this.model.attributes.games;
        $.each(gamesyears, function(index, model) {
            $.each(model, function(index_, item_) {
                var giantBombId = item_.giantBombId;
                var posterUrl = "N/A";
                if (giantBombId != undefined) {
                    posterUrl = item_.giantBombData.image.thumb_url;
                    var $row = $("#" + giantBombId);
                    var $posterHolder = $row.find(".game_poster_holder");
                }
                if (posterUrl != "N/A") {
                    $posterHolder.css("background", "url(" + posterUrl + ")");
                    $posterHolder.css("background-size", "100%");
                    $posterHolder.css("background-repeat", "no-repeat");
                }
            });
        });

    }

});
