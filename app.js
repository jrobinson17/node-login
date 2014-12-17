
/**
	Login App
**/

var express = require('express');
var http = require('http');
var app = express();

/*
app.get('/', function (req, res) {
  res.send('hello world');
	//res.send('MetLife Tests #3');
	//comment ewr
}); */

app.configure(function() {
	//res.send('hello world');
        app.set('port', 80);
	app.set('views', __dirname + '/app/server/views');
	app.set('view engine', 'jade');
	app.locals.pretty = true;
//	app.use(express.favicon());
//	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	app.use(express.session({ secret: 'super-duper-secret-secret' }));
	app.use(express.methodOverride());
	app.use(require('stylus').middleware({ src: __dirname + '/app/public' }));
	app.use(express.static(__dirname + '/app/public'));
//        app.send(port);
});



app.configure('development', function(){
	app.use(express.errorHandler());
});


require('./app/server/router')(app);

http.createServer(app).listen(app.get('port'), function(){
	console.log("Express server listening on port " + app.get('port'));

app.get('/', function (req, res) {
  res.send('hello world');
        //res.send('MetLife Tests #3');
        //comment ewr
});


//});
})

