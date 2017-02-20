var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us!');
});

app.get('/help',function(req,res){
	res.send("Welcome to Help page");
});
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express server started on port ' + PORT + '!');
});