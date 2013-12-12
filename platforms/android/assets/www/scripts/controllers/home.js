angular.module('testApp.controllers').controller('HomeCtrl', function ($rootScope, $scope, $location, $xhr) {

	$scope.initialize = function() {
		
		var on_success = function(response){
			//alert(">> "+response.data.general.logo);
			$scope.responseData = response.data;
		};
	
		var on_failure = function(data){
			alert("Error Occurred");
		};
		
		var teamsRequestObj = { 
	        method: "GET", 
	        params: {           
	            callback: "JSON_CALLBACK" 
	        }, 
	        url: "/jsondata/data.json"
	    };
	    
		$xhr.request(teamsRequestObj).then(on_success, on_failure);
		
	};
	
	$scope.initialize();
});