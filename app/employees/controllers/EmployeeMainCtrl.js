angular.module('myapp.employees')
	.controller('EmployeeMainCtrl', ['$scope', '$rootScope' ,
		function ($scope, $rootScope) {
			$scope.test = "hello";
			$scope.employees = [
			{
				name: 'user1',
				age: 10
			},
			{
				name: 'user2',
				age: 20
			}];

			$scope.setColor = function(color){
				if(color){
					$rootScope.$broadcast('colorChange', color);
				}
			};

			$scope.selectedItem;

			$scope.onTellAge = function(age){
				for(var i=0;i<$scope.employees.length;i++){
					var employee = $scope.employees[i];
					employee.ageHighlighted = false;
					if(employee.age == age){
						employee.ageHighlighted = true;
					}
				}	
			};		

			$scope.setSelectedItem = function(user){
				$scope.selectedItem = user;
			};

	}]);
