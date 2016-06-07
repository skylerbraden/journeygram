(function() {
	function googleMap() {
		return {
			templateUrl: '/templates/directives/googlemap.html',
		 	replace: true,
		 	restrict: 'E',
		 	link: function(scope, element, attributes) {

			// 	function initMap() {
			   //
		    //     	scope.littleton = {lat: 39.6133, lng: -105.0166};
		    //     	scope.coloSprings = {lat: 38.8339, lng: -104.8214};
			   //
		    //     	element.map = new google.maps.Map(document.getElementById('map'), {
		    //     		center: littleton,
		    //     		// scrollwheel: false,
		    //     		zoom: 8
		    //     	});
			   //
		    //     	element.marker = new google.maps.Marker({
		    //     		position: littleton,
		    //     		map: map,
		    //     		title: 'Littleton'
		    //         });
			   //
			//    }
			}
		}







	}

	angular
		.module('journeygram')
		.directive('googleMap', [googleMap]);
	})();
