<!DOCTYPE html>
<html ng-app="todoApp">
  <head>
    <title>AngularJS TODO APP</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' href='${pageContext.request.contextPath}/styles/app.css' />
    <link rel='stylesheet' href='${pageContext.request.contextPath}/styles/bootstrap.css' />
    
  </head>
  <body>

  		<div class="container">

	  	    <div class="navbar navbar-inverse">
				<div class="navbar-inner">
					<a class="brand" href="#">AngularJS Todo app</a>
					<ul class="nav">
						<li><a href="#docs/">Docs</a></li>
						<li><a href="#aboutModal" data-toggle="modal">About</a></li>
					</ul>
				</div>
	    	</div>

	    	<div class="hero-unit">
				<h1>AngularJS rocks !!!</h1>
				<p class="text-info">Another todo app with angularjs & JAVAEE API</p>
				<a href="http://angularjs.org/" class="btn btn-large btn-danger">See website</a>
			</div>

			<div ng-view></div>

    	</div>

    	<div id="aboutModal" class="modal hide fade" tabindex="-1" role="dialog">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				<h3 id="myModalLabel">About</h3>
			</div>
			<div class="modal-body">
				<p>AngularJS todo application</p>
			</div>
			<div class="modal-footer">
				<button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
			</div>
		</div>

		<!-- vendors -->
                <script src="${pageContext.request.contextPath}/scripts/vendors/angular.min.js"></script>

                <!-- only for bootstrap modal :( -->
                <script src="${pageContext.request.contextPath}/scripts/vendors/jquery.js"></script>
                <script src="${pageContext.request.contextPath}/scripts/vendors/bootstrap.min.js"></script>

		<!-- librairies -->
		<script type="text/javascript" src="${pageContext.request.contextPath}/scripts/app.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/scripts/router.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/scripts/controllers/todoController.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/scripts/controllers/docsController.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/scripts/services/todoService.js"></script>
  </body>
</html>