todoApp.config(['$routeProvider', function($routeProvider) {
  	$routeProvider.
		when('/', 
		{ 
			templateUrl: 'index.php/todo',
			controller: 'TodoController' 
		}).
		when('/docs', 
		{ 
			templateUrl: 'index.php/docs', 
			controller: 'DocsController'
		}).
		otherwise({ redirectTo: '/' });
}]);