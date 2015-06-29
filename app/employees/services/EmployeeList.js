angular.module('myapp.employees')
	.factory('EmployeeList',['$http',
		function($http){

		var name="";

		function _getEmployees(){
			return $http.get('/data/employees.json');
		}

		return {
			getEmployees: _getEmployees
		};

	}]);