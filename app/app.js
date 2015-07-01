var app = angular.module('myapp',['myapp.employees','ui.router']);
	
	app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
		function($stateProvider, $urlRouterProvider, $locationProvider){

		$stateProvider
			.state('home',{
				url: '/home',
				templateUrl: 'app/employees/partials/emp-list-page.tpl.html',
				controller: 'EmployeeMainCtrl'
			})
			.state('addEmployee',{
				url: '/add',
				templateUrl: 'app/employees/partials/emp-add-page.tpl.html'
			})
			.state('editEmployee',{
				url: '/edit/:empId',
				templateUrl: 'app/employees/partials/emp-edit-page.tpl.html',
				controller: 'EditEmployeeCtrl'
			});

		$urlRouterProvider.otherwise('/home');
	}]);