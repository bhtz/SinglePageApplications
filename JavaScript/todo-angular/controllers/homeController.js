/**
* HomeController class
*/
(function () {

    /**
    * Constructor.
    * @param {app} - express app.
    */
    function HomeController(app) {
        this.routes(app);
    }

    /**
     * Controller routes
     * @param  {express} app
     */
    HomeController.prototype.routes = function(app) {
        app.get('/', this.index);
         app.get('/partials/:name', this.partials);
    };

    /**
     * [HttpGet].
     * index action
     * @param  {request} req
     * @param  {response} res
     */
    HomeController.prototype.index = function(req, res) {
        res.render('index');
    };

    /**
     * partials
     * @param  {[type]} req
     * @param  {[type]} res
     */
    HomeController.prototype.partials = function(req, res) {
        var name = req.params.name;
        res.render('partials/' + name);
    };

    module.exports = HomeController;
})();