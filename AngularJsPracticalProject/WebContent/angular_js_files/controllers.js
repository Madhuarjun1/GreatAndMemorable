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

controller('groupController', function($scope, $window, $modal, $http, restService) {
	$scope.project={};
	
	var vm = this;
	$scope.items = [{ id: 0, name: 'CurrencyType' },
	                { id: 1, name: 'USD' },
	                { id: 2, name: 'INR' }
	            ];
	var amount=2000;
	$scope.project.currType = $scope.items[0];
	$scope.project.resultAmount=amount;
	alert("value of dropdown:"+$scope.items[0].id);
	
	$scope.open = function(project) {
		
		
		
		var responseCatalog = restService.getDetails();
		responseCatalog.success(function (response) {
			$scope.servermessage=response;
			alert("Coming from Server:"+$scope.servermessage);
		});
		responseCatalog.error(function (data,status) {
			if(status == 400 || status == 403) {
				alert('Error while processing!');
			}
		});
		
		
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

controller('shopController', function($scope, $window , $http){
	
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
