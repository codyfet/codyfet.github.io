var rateApp = rateApp || {}

rateApp.WishlistView = Backbone.View.extend({

    tagName: 'div',
    template: $("#wishlistTemplate").html(),
    events: {
        'mouseover .circle-status': 'circleMouseOver',
        'mouseout .circle-status': 'circleMouseOut',
        'mouseover .panel-item': 'panelItemMouseOver',
        'mouseout .panel-item': 'panelItemMouseOut',
        'click .panel-item': 'panelItemClick'

        //'mouseout .circle-cell': 'circleCellMouseOut'

       // 'mouseover .statuses': 'outStatuses'
    },
    timerStatusesPanelID : null,

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

    circleMouseOver: function(ev){
        console.log("MOUSEOVER");

        clearTimeout(this.timerStatusesPanelID);

        var $statusesPanel = $(ev.target).closest(".circle-cell").find(".statuses");
        $.each($(".statuses"), function(index, item){
            if(!$(item).is($statusesPanel)){
                $(item).hide();
            }
        });

        $statusesPanel.fadeTo("slow", 1);

    },
    circleMouseOut: function(ev){
        console.log("MOUSEOUT");
        var $statusesPanel = $(ev.target).closest(".circle-cell").find(".statuses");
        var that = this;
        if(this.timerStatusesPanelID != null){
            clearTimeout(that.timerStatusesPanelID);
        }
        this.timerStatusesPanelID = setTimeout(function(){
            if($('.panel-item:hover').length == 0) {
                $statusesPanel.hide();
            }
        },500);

    },

    panelItemMouseOver: function(ev){
        $(ev.target).css("opacity","1");
    },
    panelItemMouseOut: function(ev){
        $(ev.target).css("opacity","0.5");
    },
    panelItemClick: function(ev){
        $(ev.target).closest(".statuses").hide();
        var $statusEl = $(ev.target).closest(".circle-cell").find(".circle-status");
        var $statusTr = $(ev.target).closest("tr");
        $statusEl.removeClass("circle-status-point circle-status-plus-pos circle-status-plus-neg");
        $statusTr.removeClass("red-tr green-tr");

        if($(ev.target).hasClass("plus-pos")){
            $statusEl.addClass("circle-status-plus-pos");
        }
        else if($(ev.target).hasClass("plus-neg")){
            $statusEl.addClass("circle-status-plus-neg");
            $statusTr.addClass("red-tr");
        }
        else if($(ev.target).hasClass("point")){
            $statusEl.addClass("circle-status-point");
            $statusTr.addClass("green-tr");
        }

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
