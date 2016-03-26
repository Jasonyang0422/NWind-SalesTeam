var http = require('http');
var db = require('./models/db');

var Member = db.model;
var server = http.createServer();

server.on('request', require('./app'));

db.connect()
.then(function(){
	return Member.remove();
})
.then(function(){
	return Member.create({name: 'foo', regions: 'north'});
})
.then(function(){
	server.listen(3000, function(){
		console.log('server is running on 3000');
	});
})
.catch(function(err){
	console.log(err);
});
