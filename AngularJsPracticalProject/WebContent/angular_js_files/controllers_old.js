
/*Controllers*/

angular.module('myapp.myController', []).

controller('myController',function($scope, $timeout) {

			$scope.data = {
				time : new Date()
			};

			$scope.updateTime = function() {
				$scope.data.time = new Date();
			};
			$scope.timeoutfun = function() {
				console.log("i am timeout executed");
			};

			

			document.getElementById("updateTimeButton").addEventListener(
					'click', function() {
						/*console.log("update time clicked");*/

						/*$scope.$digest();*/
						$scope.$apply(function() {
							/*$scope.data.time = new Date();*/
							$timeout(function() {
								$scope.timeoutfun();
							}, 3000);
						});
					});

		});
