var AppView = Backbone.View.extend({

	/**
	 * DOM context.
	 * @type {String}
	 */
	el: '.viewContainer',

	template: Handlebars.compile($("#todo-listing-template").html()),

	/**
	 * initialize view
	 */
	initialize: function(){
		var self = this;
		$(this.el).html(this.template());

		_.bindAll(this, 'render', 'addTodo');
		this.collection = new TodoCollection();
		this.collection.bind('reset', this.render);
		this.collection.bind('change', this.render);
		
		this.fetchTodo();
	},

	/**
	 * events handler
	 */
    events: {
      'submit #todoForm' : 'addTodo',
      'click #doneTodoButton' : 'getDoneTodo',
      'click #allTodoButton' : 'getAllTodo',
      'click #completeAllButton' : 'completeAllTodo'
    },

	/**
	 * Rendering todo list
	 */
	render: function(){

		var listing = $(this.el).find('#todo-listing');
		listing.html('');
		
		$(this.collection.models).each(function(index, item) {
		  	var todoItem = new TodoItemView({model : item});
		  	listing.append(todoItem.render().el);
		});
	},

	/**
	 * retrieve data from api
	 */
	fetchTodo: function(){
		var self = this;
		this.collection.fetch({
			success: function () {
				self.render();
			}
		});
	},

	/**
	 * Adding Todo.
	 */
    addTodo: function(event){
    	event.preventDefault();
    	var self = this;

    	var value = $('#newTodoInput').val();
    	var todo = new Todo({title : value, done : false});
    	todo.save({},{
    		success: function(item){
				self.collection.add(item);
				self.render();
    		},
    		error: function(){
    			console.log('cannot save todo item');
    		}
    	});
		return false;
    },

    /**
     * display all todo
     */
    getAllTodo : function(){
    	this.fetchTodo();
    	this.render();
    },

    /**
     * render only done todo
     */
    getDoneTodo : function(){
    	this.collection.reset(this.collection.getDone());
    },

    /**
     * set all todo to done.
     */
    completeAllTodo: function(){
    	this.collection.forEach(function(model, index) {
    		model.set("done", true);
    		model.save();
		});
    }
});