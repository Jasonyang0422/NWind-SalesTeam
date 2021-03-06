var mongoose = require('mongoose');
var Promise = require('bluebird');

var memberSchema = new mongoose.Schema({
	name: String,
	regions: [String]
});

var Member = mongoose.model('Member', memberSchema);

var conn_;
function connect(){
	if(conn_)
		return conn_
	conn_ = new Promise(function(resolve, reject){
		mongoose.connect('mongodb://localhost/nwind-salesteam', function(err){
			if(err)
				reject(err);
			resolve(mongoose.connection);
		});
	});
	return conn_;
}

module.exports = {
	connect: connect,
	model  : Member
}