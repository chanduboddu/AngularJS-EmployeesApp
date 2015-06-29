angular.module('myapp.employees')
	.filter('empFilter', [function(){

		function empFilter(value, greeting){
			if(greeting){
				return greeting + " " + value.toUpperCase();
			}
			return value.toUpperCase();
		}

		return empFilter;

	}]);