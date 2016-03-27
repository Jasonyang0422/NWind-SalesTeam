var express = require('express');
var Member = require('../models/db').model;

var router = express.Router();

module.exports = router;

router.get('/', function(req, res, next){
	Member.find({}).sort('-_id')
		.then(function(members){
			res.send(members);
		})
		.then(null, next);
});

router.post('/', function(req, res, next){
	Member.create(req.body)
		.then(function(member){
			res.send(member);
		})
		.then(null, next);
});

router.delete('/:id', function(req, res, next){
	var id = req.params.id;
	Member.remove({ _id: id })
		.then(function(){
			res.send('delete successfully');
		})
		.then(null, next);
});

router.put('/:id', function(req, res, next){
	var region = req.body.region;
	var id = req.params.id;
	Member.findById(id)
		.then(function(member){
			var index = member.regions.indexOf(region);
			if(index !== -1)
				member.regions.splice(index, 1);
			else
				member.regions.push(region);
			return member.save();
		})
		.then(function(updatedMember){
			res.send(updatedMember);
		})
		.then(null, next);
});









