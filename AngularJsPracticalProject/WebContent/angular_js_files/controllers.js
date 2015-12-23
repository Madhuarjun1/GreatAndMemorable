'use strict';

/*Controllers*/

angular.module('pocApp.controllers', ["ui.bootstrap"]).

controller('homeController', function($scope, $window, $http) {
	
	
}).

controller('SearchController', function($scope, $window, $http,$compile) {
	$scope.getPagination=function(){
		var divElement = angular.element(document.querySelector('#pagecontent'));
	    var appendHtml = $compile('<page-Type></page-Type>')($scope);
	    divElement.append(appendHtml);
	};
	
}).

controller('groupController', function($scope, $window, $modal, $http, shopService) {
	
	var vm = this;
	  
	$scope.open = function(group) {
		vm.peopleInstance=group;
		
		
	   var modalInstance =  $modal.open({
		   
	      templateUrl: 'addviews/addgroupmember.html',
	      controller: [
                       '$scope','$modalInstance','people', function($scope, $modalInstance,people){
                    	   
                    	   alert("Modal data:"+JSON.stringify(people));
                    	   
                    	   
                    	   
                    	  $scope.group=people;
                    	  alert("added to scope:"+group.groupCode);
                    	   $scope.ok = function () {
                    		   group.status=true;
                    		   
                    		   $modalInstance.close(group);
                           };
                           
                           $scope.cancel = function(){
                        	   $modalInstance.dismiss('cancel');
                           };
                       }
                   ],
                  
                   resolve: {
                	   people: function () { alert(JSON.stringify(vm.peopleInstance)); return vm.peopleInstance; }
                       
                     },
	      windowClass: 'modal fade in',
	      backdrop: false,
          keyboard: true
                   
	    });
	   
	  
	   modalInstance.result.then(function (result) {
            $scope.group.status=result.status;
       });
	   
	  };
	
	  
	  
}).

controller('reportController', function($scope, $window , $http, reportService){
	
	$scope.getUsers = function(){
		var responseCatalog = reportService.getUsers();
		responseCatalog.success(function (response) {
			$scope.groupUsers = response;
		});
		responseCatalog.error(function (data,status) {
			if(status == 400 || status == 403) {
				alert('Error while processing!');
			}
		});
	};
	
}).

controller('shopController', function($scope, $window , $http, shopService){
	
	$scope.getUsers = function(){
		var responseCatalog = shopService.getDetails();
		responseCatalog.success(function (response) {
			alert(response);
			$scope.groupUsers = response;
		});
		responseCatalog.error(function (data,status) {
			if(status == 400 || status == 403) {
				alert('Error while processing!');
			}
		});
	};
	
});
