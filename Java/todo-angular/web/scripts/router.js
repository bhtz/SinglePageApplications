todoApp.config(['$routeProvider', function($routeProvider) {
  	$routeProvider.
		when('/', 
		{ 
			templateUrl: '/todo-angular/partials?name=todo', 
			controller: 'TodoController' 
		}).
		when('/docs', 
		{ 
			templateUrl: '/todo-angular/partials?name=docs', 
			controller: 'DocsController'
		}).
		otherwise({ redirectTo: '/' });
}]);