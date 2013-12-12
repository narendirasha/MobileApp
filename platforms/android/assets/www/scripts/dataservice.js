function getJsonP(data){
	alert('getJsonP');
}
angular.module('testApp.dataservice', []).
service('$xhr', function ($q, $rootScope, $http) {

    return {
        request: function (o) {

			//var host = "";
			var host = "http://localhost";
			//var host = "http://www.cgrt343.com";
			o.url = host + o.url;
			
			var httpobj = null;
			
			if(o.method.toUpperCase() == "GET"){
				httpobj = {
					"method": o.method,
					"url": o.url
				};
			}
			else if(o.method.toUpperCase() == "JSONP"){
				httpobj = {
					"method": o.method,
					"url": o.url,
					"params":{
						callback: "JSON_CALLBACK" 
					}
				};
			}			
			else{
				var header = {
					'Content-Type': 'application/json; charset=utf-8'
				};			
				httpobj = {
					"method": o.method,
					"url": o.url,
					"data": o.data,
					"header": o.header
				};
			}

            /*$http.defaults.useXDomain = true;*/
            //delete $http.defaults.headers.common["X-Requested-With"];
			alert("url: "+httpobj.url);
			
            var httpPromise = $http(httpobj);
            return httpPromise;            
       }
    };
});