<?php

/**
* 
*/
class TodoApiController
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
	 * TodoApiController routes
	 */
	public function routes() {
	    $this->app->get('/api/todo', array($this, 'getAll'));
	    $this->app->get('/api/todo/:id', array($this, 'get'));
	    $this->app->post('/api/todo/', array($this, 'post'));
	    $this->app->delete('/api/todo/:id', array($this, 'delete'));
	    $this->app->put('/api/todo/', array($this, 'put'));
	}

	/**
	 * get all todo
	 */
	public function getAll() {
		$todos = Todo::find('all');
		echo $this->ToJson($todos);
	}

	/**
	 * get todo by id.
	 * @param  [type] $id
	 */
	public function get($id){
		$todo = Todo::find($id);
		echo $todo->to_json();
	}

	/**
	 * add new todo
	 */
	public function post(){
		$todo = new Todo();
		$data = json_decode($this->app->request()->getBody());
		$todo->title = (string)$data->title;
		$todo->done = (boolean)$data->done;
		$todo->save();

		echo $todo->to_json();
	}

	/**
	 * delete todo
	 * @param  [int] $id
	 */
	public function delete($id){
		$todo = Todo::find($id);		
		$todo->delete();

		echo 'todo destroyed';
	}

	/**
	 * update todo
	 */
	public function put(){
		$data = json_decode($this->app->request()->getBody());
		$todo = Todo::find((int)$data->id);
		$todo->title = (string)$data->title;
		$todo->done = (boolean)$data->done;
		$todo->save();

		echo $todo->to_json();
	}

	/**
	 * return json data
	 * @param [type] $data
	 * @param [type] $options
	 */
	private function ToJson($data, $options = null) {
		$out = "[";
		foreach($data as $row) { 
			if ($options != null)
				$out .= $row->to_json($options);
			else 
				$out .= $row->to_json();
				$out .= ",";
		}
		$out = rtrim($out, ',');
		$out .= "]";
		return $out;
	}
}