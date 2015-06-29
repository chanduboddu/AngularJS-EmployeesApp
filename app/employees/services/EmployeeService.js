angular.module('myapp.employees')
	.service('EmployeeService',[function(){
		
		var name="";
		this.setName = function(empName){
			name = empName;
		};

		this.getName = function(){
			return name;
		};

	}]);