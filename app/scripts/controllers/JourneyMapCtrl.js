//(function() {
//    function JourneyMapCtrl() {
//		
//		vm = this;
//
//		vm.instaApi = function(data){
//			console.log(1)
//			console.log(data);
//		};
//
//		$.ajax({
//			url: "https://api.instagram.com/v1/locations/search?access_token=5405469.0f878fa.ccfcfe7552a7470abb6aebf116bfc7b6",
//			type: 'get',
//			dataType: 'jsonp',
//			crossOrigin: true,
//			jsonpCallback: "vm.instaApi",
//			cache: true
//		});
//		
//		$("#test-list").append("<li>Testing controller</li>");
//
//		
//		
//	}
//    angular
//        .module('journeygram')
//        .controller('JourneyMapCtrl', [JourneyMapCtrl]);
//})();

(function() {
    function JourneyMapCtrl() {
		
		vm = this;
		vm.latList = [];
		
		vm.instaApi = function(photo){
//			console.log("this is just a test")
//			console.log(photo.data);
			var latitude = photo.data[0].location.latitude;
			
			for (var i=0; i < photo.data.length; i++) {
				vm.latList.push(photo.data[i].location.latitude);
			}
			
			console.log("Inside instaApi function");
			console.log(vm.latList);

		};


		$.ajax({
			url: "https://api.instagram.com/v1/tags/journeygram/media/recent?access_token=3264274466.d8576bc.77adee700b254e958a8bbb6967a61142",
			type: 'get',
			dataType: 'jsonp',
			crossOrigin: true,
			jsonpCallback: "vm.instaApi",
			cache: true
		});
		
	
		$("#test-list").append("<li>Test</li>")
		
		window.foo = vm.instaApi;
		
		//I want these console.logs to fire AFTER the vm.instaApi function has run so that teh array vm.latList is accessible to me. How do I do this?
		console.log("Outside instaApi function")
		console.log(vm.latList);
		
		



	
		
	}
    angular
        .module('journeygram')
        .controller('JourneyMapCtrl', [JourneyMapCtrl]);
})();