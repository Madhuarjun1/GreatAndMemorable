angular.module('pocApp.directives', []).directive('pageType', function() {
	  return {
		    restrict: "E",
		    scope: {},
		    templateUrl:'directiveTagViews/paginationcontent.html',
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
		  };
		});