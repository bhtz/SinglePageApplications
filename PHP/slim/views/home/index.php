<!DOCTYPE html>
<html ng-app="todoApp">
  <head>
    <title>AngularJS TODO APP</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' href='public/styles/app.css' />
    <link rel='stylesheet' href='public/styles/bootstrap.css' />
  </head>
  <body>

  		<div class="container">

	  	    <div class="navbar navbar-inverse">
				<div class="navbar-inner">
					<a class="brand" href="#/">AngularJS Todo app</a>
					<ul class="nav">
						<li><a href="#docs/">Docs</a></li>
						<li><a href="#aboutModal" data-toggle="modal">About</a></li>
					</ul>
				</div>
	    	</div>

	    	<div class="hero-unit">
				<h1>AngularJS rocks !!!</h1>
				<p class="text-info">Another todo app with angularjs & PHP API</p>
				<a href="http://angularjs.org/" class="btn btn-large btn-danger">Angularjs</a>
				<a href="http://www.slimframework.com/" class="btn btn-large btn-info">Slim Framework</a>
				<a href="http://www.phpactiverecord.org/" class="btn btn-large btn-success">PHP ActiveRecord</a>
			</div>

			<div ng-view></div>

    	</div>

    	<div id="aboutModal" class="modal hide fade" tabindex="-1" role="dialog">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				<h3 id="myModalLabel">About</h3>
			</div>
			<div class="modal-body">
				<p>AngularJS todo application with PHP SlimFramework & PHPActiveRecord REST API</p>
			</div>
			<div class="modal-footer">
				<button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
			</div>
		</div>

		<!-- vendors -->
    	<script src="public/scripts/vendors/angular.min.js"></script>

    	<!-- only for bootstrap modal :( -->
    	<script src="public/scripts/vendors/jquery.js"></script>
    	<script src="public/scripts/vendors/bootstrap.min.js"></script>

		<!-- librairies -->
		<script src="public/scripts/app.js"></script>
		<script src="public/scripts/router.js"></script>
		<script src="public/scripts/controllers/todoController.js"></script>
		<script src="public/scripts/controllers/docsController.js"></script>
		<script src="public/scripts/services/todoService.js"></script>
  </body>
</html>