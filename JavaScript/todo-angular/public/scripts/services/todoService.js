/**
 * TodoService
 * @param {[type]} $http
 */
todoApp.service('TodoService', function ($http) {

	/**
	 * get all todo
	 * @return {[type]}
	 */
	this.getAll = function(callback){
		$http.get('/api/todo').success(function(data, status, headers, config){
			callback(data);
		});
	};

	/**
	 * add todo
	 * @param {todo}   todo
	 * @param {Function} callback
	 */
	this.add = function(todo, callback){
		$http.post('/api/todo', todo, null).success(function(data, status, headers, config){
			callback(data);
		});	
	};

	/**
	 * delete todo
	 * @param  {[type]}   todo
	 * @param  {Function} callback
	 */
	this.delete = function(todo, callback){
		$http.delete('/api/todo', todo, null).success(function(data, status, headers, config){
			callback(data);
		});
	}

	/**
	 * update todo
	 */
	this.update = function(todo, callback){
		$http.put('/api/todo', todo, null).success(function(data, status, headers, config){
			callback(data);
		});
	};

});