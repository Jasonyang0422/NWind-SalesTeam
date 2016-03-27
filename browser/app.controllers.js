var app = angular.module('salesTeam', []);

app.controller('mainCtrl', function($scope, $log, mainFactory){

	getMembers();
	$scope.allRegions = ['North', 'South', 'West', 'East'];
	$scope.selectedReg = mainFactory.regions;
 	function getMembers(){
	 	mainFactory.getMembers()
	 		.then(function(members){
	 			return $scope.members = members;
	 		})
	 		.catch($log.error);
 	}

 	$scope.selectRegion = function(region){
 		if($scope.selectedReg.indexOf(region) !== -1)
 			mainFactory.removeRegion(region);
 		else
 			mainFactory.addRegion(region);
 	} 

 	$scope.addMember = function(){
 		mainFactory.postMember($scope.member)
 			.then(function(){
 				return getMembers();
 			})
 			.then(function(){
 				$scope.member.name = null;
 				$scope.selectedReg.splice(0, $scope.selectedReg.length);
 			})
 			.catch($log.error);
 	}

 	$scope.deleteMember = function(id){
 		mainFactory.deleteMember(id)
 			.then(function(){
 				getMembers();
 			})
 			.catch($log.error);
 	}

 	$scope.updateMember = function(person, region){
 		mainFactory.updateMember(person, region)
 			.then(function(){
 				getMembers();
 			})
 			.catch($log.error);
 	}


});