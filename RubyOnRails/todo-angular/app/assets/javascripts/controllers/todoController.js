todoApp.controller('TodoController', function TodoController($scope, TodoService) {

	$scope.todos = [];
	$scope.doneFilter = null;

    TodoService.getAll(function(data){
    	$scope.todos = data;	
    });

	/**
	 * add a new todo.
	 */
	$scope.addTodo = function(){
		var todo = {id: 0, title: $scope.newTodo.title, done: false};
		TodoService.add(todo, function(data){
			$scope.todos.push(data);
		});
	};

	/**
	 * toggle todo done status
	 * @param  {[type]} todo
	 */
	$scope.toggleTodo = function(todo){
		TodoService.update(todo, function(data){});	
	};

	/**
	 * delete todo
	 */
	$scope.deleteTodo = function(todo){
		TodoService.delete(todo, function(data){
			$scope.todos.splice($scope.todos.indexOf(todo), 1 );
		});
	};

	/**
	 * checkAll todo.
	 * @return {[type]}
	 */
	$scope.checkAll = function(){
		for (var i = 0; i < $scope.todos.length; i++) {
			if(!$scope.todos[i].done){
				$scope.todos[i].done = true;
				TodoService.update($scope.todos[i], function(data){});	
			}
		};
	};

	/**
	 * filtering todos by true done status
	 */
	$scope.filterByDone = function(){
		$scope.doneFilter = true;
	};

	/**
	 * reset done filter
	 */
	$scope.resetDoneFilter = function(){
		$scope.doneFilter = null;	
	};
});