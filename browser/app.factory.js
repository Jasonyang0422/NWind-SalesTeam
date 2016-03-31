//this sounds like a SalesTeamFactory-- name things better :)
angular.module('salesTeam').factory('mainFactory', function($http){
	var regions = [];

	return {
		getMembers  : getMembers,
		postMember  : postMember,
		regions     : regions,
		addRegion   : addRegion,
		removeRegion: removeRegion,
		deleteMember: deleteMember,
		updateMember: updateMember
	};

	function extractData(response){
    //what if we looped over the data... and we could create a Member object on the client-- take a look at my solution
		return response.data;
	}

	function getMembers(){
		return $http.get('/members').then(extractData);
	}

	function postMember(member){
		member.regions = regions;
		return $http.post('/members', member).then(extractData);
	}

  //i don't know if this needs to be in the factory
	function addRegion(region){
		regions.push(region);
	}

  //i don't know if this needs to be in the factory
	function removeRegion(region){
		regions.splice(regions.indexOf(region), 1);
	}

	function deleteMember(id){
		return $http.delete('/members/' + id).then(extractData);
	}

	function updateMember(person, region){
		return $http.put('/members/' + person._id, {region: region}).then(extractData);
	}
});
