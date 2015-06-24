angular.module('myapp.employees')
	.directive('empAction',[function(){

		return {
			restrict: 'E',
			templateUrl: 'app/employees/partials/emp-action.tpl.html',
			require: '^empDetail',
			link: function(scope, element, attrs, empDetailCtrl){
				scope.sayHello = function(){
					empDetailCtrl.sayHello('hello');
				};
			}
		};

	}]);