angular.module('pocApp.directives', []).directive('pageType', function() {
	  return {
		    restrict: "E",
		    scope: {},
		    templateUrl:'paginationcontent.html',
		    controller: function($scope) {
		    	$scope.filteredTodos = []
		    	  ,$scope.currentPage = 1
		    	  ,$scope.numPerPage = 7
		    	  ,$scope.maxSize = 5;
		    	$scope.OnSave=function(){
		    		alert("iam working");
		    	};
		    	  
		    	  $scope.makeTodos = function() {
		    	    $scope.todos = [];
		    	    for (var i=1;i<=1000;i++) {
		    	      $scope.todos.push({ text:'todo '+i, done:false});
		    	    }
		    	  };
		    	  $scope.makeTodos(); 
		    	  
		    	  $scope.$watch('currentPage + numPerPage', function() {
		    	    var begin = (($scope.currentPage - 1) * $scope.numPerPage)
		    	    , end = begin + $scope.numPerPage;
		    	    
		    	    $scope.filteredTodos = $scope.todos.slice(begin, end);
		    	  });
		    }
		  }
		}).

directive('ngConfirmClick', [
     function($dialog){
         return {
             priority: 1,
             terminal: true,
             link: function (scope, element, attr) {
                 var msg = attr.ngConfirmClick || "Are you sure?";
                 var clickAction = attr.ngClick;
                 
                 element.bind('click',function (event) {
                     if ( window.confirm(msg) ) {
                         scope.$eval(clickAction);
                     }
                 });
             },
             controller: function ($scope)
             {            
                 $scope.opts = {
                     backdrop: true,
                     keyboard: true,
                     backdropClick: true,
                     templateUrl: 'popups/addgroupmember.html'
                 };

                 $scope.openDialog = function () {
                     var d = $dialog.dialog($scope.opts);
                     d.open().then(function (result) {
                         if (result) {
                             alert('dialog closed with result: ' + result);
                         }
                     });
                 }
             }
         };
 }]);
