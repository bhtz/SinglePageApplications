var Todo = Backbone.Model.extend({
	url: '/api/todo',

	toggle: function() {
		this.set({done: !this.get("done")});
	}
});