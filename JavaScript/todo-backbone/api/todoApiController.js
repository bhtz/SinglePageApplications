/**
* TodoApiController class
*/
(function () {

	/**
	 * properties
	 */
	var todos = [
		{id: 1, title: "BackboneJS", done: true},
		{id: 2, title: "AngularJS", done: true},
		{id: 3, title: "EmberJS", done: false},
        {id: 4, title: "KnockoutJS", done: false},
        {id: 5, title: "CanJS", done: false},
        {id: 6, title: "JavaScriptMVC", done: false}
	];

    var incrementor = 6;

    /**
    * Constructor.
    * @param {app} - express app.
    */
    function TodoApiController(app) {
        this.routes(app);
    }

    /**
     * Controller routes
     * @param  {express} app
     */
    TodoApiController.prototype.routes = function(app) {
        app.get('/api/todo', this.index);
        app.post('/api/todo', this.create);
        app.put('/api/todo', this.edit);
        app.delete('/api/todo', this.delete);
    };

    /**
     * [HttpGet].
     * index action
     * @param  {request} req
     * @param  {response} res
     */
    TodoApiController.prototype.index = function(req, res) {
        res.send(todos);
    };

    /**
     * [HttpPost].
     * create action
     * @param  {request} req
     * @param  {response} res
     */
    TodoApiController.prototype.create = function(req, res) {
        var todo = req.body;
        incrementor++;
        todo.id = incrementor;
        todos.push(todo);
        res.send(todo);
    };

    /**
     * [HttpPut]
     * edit action
     * @param  {[type]} req
     * @param  {[type]} res
     */
    TodoApiController.prototype.edit = function(req, res) {
        var todo = req.body;
        for (var i = 0; i < todos.length; i++) {
            if(todos[i].id === todo.id){
                todos[i] = todo;
            }
        };
        res.send({message : todo.title + ' todo updated !'});
    };

    /**
     * delete action.
     * @param  {[type]} req
     * @param  {[type]} res
     */
    TodoApiController.prototype.delete = function(req, res) {
        var todo = req.body;
        var index = todos.indexOf(todo);
        todos.splice(index, 1);
        res.send("item deleted");
    };

    module.exports = TodoApiController;
})();