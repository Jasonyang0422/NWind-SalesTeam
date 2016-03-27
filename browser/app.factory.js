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
		return response.data;
	}

	function getMembers(){
		return $http.get('/members').then(extractData);
	}

	function postMember(member){
		member.regions = regions;
		return $http.post('/members', member).then(extractData);
	}

	function addRegion(region){
		regions.push(region);
	}

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