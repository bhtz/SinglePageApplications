var TodoItemView = Backbone.View.extend({

	tagName: 'tr',
	className: 'todo-item',

	template: Handlebars.compile($("#todo-item-template").html()),

	/**
	 * events handler
	 */
	events: {
		'change .todo-item-toggler' : 'toggleTodo',
		'click [role=deleteButton]' : 'deleteTodo'
	},

	/**
	 * initialize todo item view
	 */
	initialize: function(){
		_.bindAll(this, 'render', 'toggleTodo', 'deleteTodo');
		this.model.on('destroy', this.remove, this);
	},

	/**
	 * render todo item
	 */
	render: function(){
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
	},

	unrender: function () {
		$(this.el).remove();
		return this;
	},

	/**
	 * toggle done status
	 */
	toggleTodo: function(){
		this.model.toggle();
		this.model.save();
	},

	/**
	 * delete todo item
	 */
	deleteTodo: function(){
		var self = this;
		this.model.destroy({
			success: function(){
				self.unrender();
			},
			error: function(){
				console.log('Oups error during deleting todo !');
			}
		});
	}
});