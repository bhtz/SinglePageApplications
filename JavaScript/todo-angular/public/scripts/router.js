todoApp.config(['$routeProvider', function($routeProvider) {
  	$routeProvider.
		when('/', 
		{ 
			templateUrl: '/partials/todo', 
			controller: 'TodoController' 
		}).
		when('/docs', 
		{ 
			templateUrl: '/partials/docs', 
			controller: 'DocsController'
		}).
		otherwise({ redirectTo: '/' });
}]);