var rateApp = rateApp || {}

var rowTemplate = "<tr><td class='name'><img class='results-poster' src='<%= poster_path %>'></td><td class='age'><%= title %></td><td class='year'><%= release_date %></td><td class='age'>пересечение</td></tr>";

rateApp.TableView = Backbone.View.extend({
    tagName: $("#tableResultsTemplate").html(),
    initialize: function () {
        _.bindAll(this, 'render', 'renderOne');
        //if (this.model) {
        this.collection.on('change reset add remove', this.render, this);
        this.collection.sort_by_release_date()
        console.log("COLLECTION INIT");
        //}
    },
    render: function () {
        this.collection.each(this.renderOne);
        return this;
    },
    renderOne: function (model) {
        var row = new RowView({
                model: model
            });
        this.$el.append(row.render().$el);
        return this;
    }
});

var RowView = Backbone.View.extend({
    events: {
        "click .age": function () {
            console.log(this.model.get("name"));
        }
    },
    initialize: function () {
        this.model.on('change', this.render, this);
    },
    //model: peopleCollection.models,
    render: function () {
         var html=_.template(rowTemplate,this.model.attributes.toJSON());
         this.setElement( $(html) );
         return this;
    },
});