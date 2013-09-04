<?php 
/**
* TodoController class.
*/
class HomeController
{
	/**
	 * Constructor.
	 * @param [Slim app] $app
	 */
	function __construct($app)
	{
		$this->app = $app;
		$this->routes();
	}

	/**
	 * TodoController routes
	 */
	public function routes(){
	    $this->app->get('/', array($this, 'index'));
	    $this->app->get('/docs', array($this, 'docs'));
	}

	/**
	 * index function
	 */
	public function index() {
		$this->app->render('home/index.php');
	}

	/**
	 * docs function
	 */
	public function docs() {
		$this->app->render('home/docs.php');
	}	
}