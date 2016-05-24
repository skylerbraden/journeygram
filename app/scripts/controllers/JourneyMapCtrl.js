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

		vm.instaApi = function(data){
			console.log("this is just a test")
			console.log(data.data);
		};

		$.ajax({
			url: "https://api.instagram.com/v1/tags/journeygram/media/recent?access_token=3264274466.d8576bc.77adee700b254e958a8bbb6967a61142",
			type: 'get',
			dataType: 'jsonp',
			crossOrigin: true,
			jsonpCallback: "vm.instaApi",
			cache: true
		});
		
		var locationOneLat = vm.instaApi(data.data[0].location.latitude);
		$("#test-list").append(locationOneLat);
		$("#test-list").append("<li></li>")
		$("#test-list").append("<li></li>")

		
		
	}
    angular
        .module('journeygram')
        .controller('JourneyMapCtrl', [JourneyMapCtrl]);
})();