/**
 * Module dependencies.
 */
var express        = require('express');
var http           = require('http');
var path           = require('path');
var HomeController = require('./controllers/homeController');
var TodoApiController = require('./api/todoApiController');

var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 3001);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
    app.use(express.errorHandler());
});

/**
 * Loading api and controllers.
 * @type {Controller}
 */
var homeController = new HomeController(app);
var todoApiController = new TodoApiController(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
