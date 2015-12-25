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

controller('userController', function($scope, $window, $http) {
	
	
}).

controller('groupController', function($scope, $window, $modal, $http, shopService) {
	
	var vm = this;
	$scope.items = [
	                { id: 1, name: 'Foo' },
	                { id: 2, name: 'Bar' }
	            ];
	$scope.open = function(project) {
		
		alert("Add project data:"+JSON.stringify(project));
		/*project.proNumber
		project.proTitle
		project.proDonorName
		project.proDonorAddress
		project.proPurpose
		project.proDate
		project.currQty
		project.currType
		project.currValue
		project.resultAmount*/
		
		vm.peopleInstance=project;
		
		
	   var modalInstance =  $modal.open({
		   
	      templateUrl: 'addviews/addgroupmember.html',
	      controller: [
                       '$scope','$modalInstance','project', function($scope, $modalInstance,project){
                    	   
                    	   alert("Modal data:"+JSON.stringify(project));
                    	   
                    	   
                    	   
                    	  $scope.modalProject=project;
                    	  alert("added to scope:"+JSON.stringify($scope.modalProject));
                    	   $scope.ok = function () {
                    		   $modalInstance.close();
                           };
                           
                           $scope.cancel = function(){
                        	   $modalInstance.dismiss('cancel');
                           };
                       }
                   ],
                  
                   resolve: {
                	   project: function () { alert(JSON.stringify(vm.peopleInstance)); return vm.peopleInstance; }
                       
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
