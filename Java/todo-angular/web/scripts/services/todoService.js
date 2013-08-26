/**
 * TodoService
 * @param {[type]} $http
 */
todoApp.service('TodoService', function ($http) {
    
        var API_URI = 'webresources/todo/';

	/**
	 * get all todo
	 * @return {[type]}
	 */
	this.getAll = function(callback){
            $http.get(API_URI).success(function(data, status, headers, config){
                    callback(data);
            });
	};

	/**
	 * add todo
	 * @param {todo}   todo
	 * @param {Function} callback
	 */
	this.add = function(todo, callback){
            $http.post(API_URI, todo, null).success(function(data, status, headers, config){
                    callback(data);
            });	
	};

	/**
	 * delete todo
	 * @param  {[type]}   todo
	 * @param  {Function} callback
	 */
	this.delete = function(todo, callback){
            $http.delete(API_URI + todo.id, null, null).success(function(data, status, headers, config){
                    callback(data);
            });
	}

	/**
	 * update todo
	 */
	this.update = function(todo, callback){
            $http.put(API_URI, todo, null).success(function(data, status, headers, config){
                    callback(data);
            });
	};

});