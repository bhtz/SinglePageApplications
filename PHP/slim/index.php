<?php
    
    /**
     * Modules dependencies.
     */
    require './vendors/Slim/Slim.php';
    require './vendors/php-activerecord/ActiveRecord.php';
    require './controllers/TodoController.php';
    require './controllers/HomeController.php';
    require './api/TodoApiController.php';

    /**
     * Initialize Active record.
     */
    ActiveRecord\Config::initialize(function($cfg)
    {
        $cfg->set_model_directory('./models');
        $cfg->set_connections(array('development' => 'mysql://root:password@localhost/phptodo'));
    });

    /**
     * Configuring slim application.
     */
    \Slim\Slim::registerAutoloader();
    $app = new \Slim\Slim();
    $app->config(array('debug' => true, 'templates.path' => './views'));

    /**
     * run controller
     */
    $todoController = new TodoController($app);
    $homeController = new HomeController($app);

    /**
     * run api
     */
    $todoApiController = new TodoApiController($app);

    /**
     * Run application.
     */
    $app->run();
?>