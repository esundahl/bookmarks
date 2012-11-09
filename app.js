// Module Dependencies
var express = require('express')
  , http = require('http')
  , path = require('path')
  , make = require('./lib/make');

// Setup The Application
var app = express();

// Configure Application & Middleware
app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(make);
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

// Development Only Configurations
app.configure('development', function(){
  app.use(express.errorHandler());
});

// Initialize Routes Module
require('./server/routes')(app)

// Create & Start The Server
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
