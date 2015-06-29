angular.module('myapp.employees')
	.controller('EmployeeMainCtrl', ['$scope', '$rootScope', 'EmployeeService', 'EmployeeList',
		function ($scope, $rootScope, EmployeeService, EmployeeList) {
			$scope.test = "hello";
			//EmployeeService.setName('user1');
			$scope.employees = [];
			var promise = EmployeeList.getEmployees();
			
			promise.then(function(result){
			 	$scope.employees = result.data;
			 }, function(err){
			 	console.log(err);
			 });


			promise.then(function(){
				console.log('called 2nd time');
			});

			promise.then(function(){
				console.log('called 3rd time');
			});


			console.log('within controller');

			$scope.setColor = function(color){
				if(color){
					$rootScope.$broadcast('colorChange', color);
				}
			};

			$scope.selectedItem;

			$scope.onTellAge = function(age){
				for(var i=0;i<$scope.employees.length;i++){
					var employee = $scope.employees[i];
					employee.ageHighlighted = false;
					if(employee.age == age){
						employee.ageHighlighted = true;
					}
				}	
			};		

			$scope.setSelectedItem = function(user){
				$scope.selectedItem = user;
			};

	}]);
