var DocsView = Backbone.View.extend({

	/**
	 * DOM context.
	 * @type {String}
	 */
	el: '.viewContainer',

	template: Handlebars.compile($("#docs-template").html()),

	/**
	 * initialize view
	 */
	initialize: function(){
		this.render();
	},

	/**
	 * events handler
	 */
    events: {
    },

	render: function(){
		$(this.el).html(this.template());
	},
});