//Require dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var app = express();

//Configure Settings
app.set('port', process.env.PORT || 3000);

//Define routes
app.all('*', function(req, res) {
	res.send('Welcome to Pengqi Liu\'s Website!');
})

//Start the server
http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});