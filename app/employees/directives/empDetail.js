angular.module('myapp.employees')
	.controller('EmpDetailCtrl', ['$scope', function ($scope) {
		this.sayHello = function(msg){
			alert(msg + " " + $scope.selectedEmp.name);
		};
	}])
	.directive('empDetail',[function(){

		return {
			restrict: 'EA',
			replace: true,
			templateUrl: 'app/employees/partials/emp-detail.tpl.html',
			controller: 'EmpDetailCtrl',
			scope:{
				selectedEmp: '=',
				onAgeClick: '&'
			},
			link: function(scope, element, attrs, ctrl){
				scope.tellAge = function(){
					console.log(scope.selectedEmp.age);
					scope.onAgeClick({age: scope.selectedEmp.age});
				};

				scope.$on('colorChange', function(event, color){
					scope.originalStyle = {backgroundColor: color};
				});
			}
		};

	}]);