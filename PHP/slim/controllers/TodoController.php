<?php 
/**
* TodoController class.
*/
class TodoController
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
	    $this->app->get('/todo', array($this, 'index'));
	}

	/**
	 * docs function
	 */
	public function index() {
		$todos = Todo::find('all');
		$this->app->render('todo/index.php');
	}
}