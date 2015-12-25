/*Services*/

angular.module('pocApp.services',[]).

factory('reportService', function($http){
	var reportService = {};
	
	reportService.getUsers = function() {
		var theurl = 'rest/api/getusers';
		return $http({
			method: 'GET', 
		 		url: theurl
		 	});
	}; 
	return reportService;
}).
factory('restService',function($http){
	
	var restService={};
	restService.getDetails=function(){
		var theurl='/api/owners/';
		return $http({
			method: 'GET', 
		 		url: theurl
		 	});
		
	};
	
	return shopService;
	
});

