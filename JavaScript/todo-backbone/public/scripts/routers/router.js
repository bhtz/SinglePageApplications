var AppRouter = Backbone.Router.extend({

    routes: {
      "":      "home",
      "docs/": "docs"
    },

    /**
     * home view.
     */
    home: function() {
        var appView = new AppView();
    },

    /**
     * docs views
     */
    docs: function(){
        var docsView = new DocsView();
    }

});