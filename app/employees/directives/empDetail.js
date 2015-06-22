angular.module('myapp.employees')
	.directive('empDetail',[function(){

		return {
			restrict: 'EA',
			replace: true,
			templateUrl: 'app/employees/partials/emp-detail.tpl.html',
			scope:{
				selectedEmp: '=',
				onAgeClick: '&'
			},
			link: function(scope, element, attrs){
				scope.tellAge = function(){
					console.log(scope.selectedEmp.age);
					scope.onAgeClick({age: scope.selectedEmp.age});
				};
			}
		};

	}]);