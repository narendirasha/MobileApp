angular.module('testApp.controllers').controller('SplashCtrl', function ($rootScope, $scope, $location, $timeout) {

	$scope.initialize = function()	{
		$rootScope.loading.isVisible = true;
		$timeout(showSplashRacingTeams, 3000);
	};
	
	function showSplashRacingTeams(){
		$('.overlay img').hide();
		$('.overlay img:first').attr('src','img/Loading-screen-teamsBG.png').show();
		$timeout(function(){ $location.path('/Teams'); }, 2000);
	}
	$scope.initialize();
});