angular.module('testApp.controllers').controller('HomeCtrl', function ($rootScope, $scope, $location, $xhr) {

	$scope.initialize = function() {
		var jsonObj={
   "general":{
      "logo":"assets/images/logo.png",
      "name":"ABC&Co"
   },
   "navigation":[
      {
         "title":"Home",
         "link":"index.html"
      },
      {
         "title":"About",
         "link":"about.html"
      },
      {
         "title":"Products",
         "link":"products.html",
         "subnav":[
            {
               "title":"Webapps",
               "link":"webapps.html"
            },
            {
               "title":"Mobile Apps",
               "link":"mobile-apps.html"
            }
         ]
      }
   ],
   "modules":[
      {
         "type":"navigation",
         "container":"#header",
         "title":"Top Navigation",
         "attributes":{
            "class":"topNavigation",
            "id":"topNavigation"
         }
      },
      {
         "type":"content",
         "title":"Hi Welcome to mobile development",
         "subtitle":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
         "container":"#maincontent",
         "attributes":{
            "class":"topContent"
         }
      },
      {
         "type":"form",
         "title":"Registration Form",
         "action":"submit.aspx",
         "name":"registrationform",
         "container":"#maincontent",
         "attributes":{
            "class":"registrationform"
         },
         "fields":[
            {
               "id":"firstname",
               "label":"First Name",
               "name":"fname",
               "type":"text",
               "value":""
            },
            {
               "id":"email",
               "label":"Email",
               "name":"email",
               "type":"email",
               "value":""
            },
            {
               "id":"countries",
               "label":"Country",
               "name":"countries",
               "type":"select",
               "options":[
                  {
                     "value":"",
                     "text":"Select Country"
                  },
                  {
                     "value":"in",
                     "text":"India",
                     "selected":"true"
                  },
                  {
                     "value":"us",
                     "text":"United Stated"
                  },
                  {
                     "value":"uk",
                     "text":"United Kingdom"
                  },
                  {
                     "value":"cn",
                     "text":"Canada"
                  }
               ]
            },
            {
               "id":"submit",
               "name":"submit",
               "type":"submit",
               "value":"Submit"
            }
         ],
         "rules":{
            "fname":"required",
            "email":{
               "required":"true",
               "email":"true"
            }
         },
         "messages":{
            "fname":"Enter your firstname...",
            "email":"Please enter a valid email address..."
         }
      }
   ]
}
		$scope.responseData = jsonObj;
		/*var on_success = function(response){
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
	        url: "/MobileApp/www/jsondata/data.json"
	    };
	    
		$xhr.request(teamsRequestObj).then(on_success, on_failure);
		*/
	};
	
	$scope.initialize();
});