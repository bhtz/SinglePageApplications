var TodoCollection = Backbone.Collection.extend({
	model: Todo,
	url: '/api/todo',

	getDone : function() {
		return this.where({done : true});
	}
});