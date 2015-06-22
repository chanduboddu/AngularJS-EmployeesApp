angular.module('myapp.employees')
	.directive('empDetail',[function(){

		return {
			restrict: 'EA',
			replace: true,
			templateUrl: 'app/employees/partials/emp-detail.tpl.html',
			scope:{
				selectedEmp: '='
			}
		};

	}]);