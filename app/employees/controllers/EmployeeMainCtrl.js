angular.module('myapp.employees')
	.controller('EmployeeMainCtrl', ['$scope', 
		function ($scope) {
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

			$scope.selectedItem;

			$scope.setSelectedItem = function(user){
				$scope.selectedItem = user;
			};

	}]);
