var express 	= require('express')
  ,	fs 				= require('fs')
  ,	http 			= require('http')
  , path      = require('path')
  , app 			= express()
  , server 		= null
  , server 	  = http.createServer(app)

app.configure(function () {
  app.set('views', __dirname + '/client/');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
  app.set('view engine', 'html');
 // app.use("/js", express.static(__dirname + '/public/js'));
});

app.configure('development', function () {
  app.use(express.errorHandler());
});

app.get("/", function(req, res){ 
	res.sendfile(__dirname + '/client/index.html');
});

//start the server
server.listen(3000, function () {
	console.log("Express server listening on port: " + 3000);
});