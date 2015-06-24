angular.module('myapp.employees')
	.directive('empGreeting',[function(){

		return {
			restrict: 'E',
			templateUrl: 'app/employees/partials/emp-greeting.tpl.html',
			require: '^empDetail',
			link: function(scope, element, attrs, empDetailCtrl){
				scope.sayGreeting = function(){
					empDetailCtrl.sayHello('welcome');
				};
			}
		};

	}]);