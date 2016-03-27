var express = require('express');
var bodyParser= require('body-parser');

var app = express();

module.exports = app;

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/browser', express.static(__dirname + '/browser'));
app.use('/public', express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use('/members', require('./routes/router'));


app.get('/', function(req, res, next){
	res.sendFile(__dirname + '/browser/index.html');
})