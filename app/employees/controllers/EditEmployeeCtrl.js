angular.module('myapp.employees')
	.controller('EditEmployeeCtrl', ['$scope', '$stateParams', 'EmployeeList',
	 function ($scope, $stateParams, EmployeeList) {
		console.log($stateParams);
		$scope.employee = EmployeeList.getEmployeeById($stateParams.empId);
	}]);