(function() {
    function JourneyMapCtrl() {
		
		vm = this;

		vm.instaApi = function(data){
			console.log(1)
			console.log(data);
		};

		$.ajax({
			url: "https://api.instagram.com/v1/locations/399440619/media/recent?access_token=5405469.0f878fa.ccfcfe7552a7470abb6aebf116bfc7b6",
			type: 'get',
			dataType: 'jsonp',
			crossOrigin: true,
			jsonpCallback: "vm.instaApi",
			cache: true
		});
		
		$("#test-list").append("<li>Testing controller</li>");

		
		
	}
    angular
        .module('journeygram')
        .controller('JourneyMapCtrl', [JourneyMapCtrl]);
})();