var express = require('express');

var app = express();

module.exports = app;

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/browser', express.static(__dirname + '/browser'));

app.use('/members', require('./routes/router'));

app.get('/', function(req, res, next){
	res.sendFile(__dirname + '/browser/index.html');
})