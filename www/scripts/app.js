'use strict';

/* Application Settings */

var testApp = angular.module('testApp', ['ngRoute', 'ngResource', 'testApp.controllers', 'testApp.dataservice', 'ui.bootstrap']);

testApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/Home', { templateUrl: 'view/Home.html', controller: 'HomeCtrl', access: { isFree: true } });
	
	$routeProvider.otherwise({redirectTo: '/Home'});
}]);

testApp.run(['$rootScope', '$window', '$timeout', '$location', function ($rootScope, $window, $timeout, $location) {
	
	// $rootScope.menu = {
        // isVisible: true,
        // showDrawerClass: ''
    // };
    
	$rootScope.navBack = function(){
		//alert("navigating back");
		window.history.back();
	};
	
	// Watch for route changes and inform rootScope of current controller in use
	$rootScope.currentController = '';
	$rootScope.$on('$routeChangeSuccess', function(ev, data) {
		if (data.$$route && data.$$route.controller) {
			$rootScope.currentController = data.$$route.controller;
			console.log('Current Controller: ', $rootScope.currentController);
		}
	});
}]);
