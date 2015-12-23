/*Services*/

angular.module('dtiMonitorApp.services',[]).

factory('monitorService', function($http){
	var monitorService = {};
	
	monitorService.getInAndOutBound = function() {
		var theurl = '/';
		return $http({
			method: 'GET', 
		 		url: theurl
		 	});
	}; 
	return monitorService;
});

