(function() {
	function newMarkerForm() {
		return {
			templateUrl: '/templates/directives/newMarkerForm.html',
		 	replace: true,
		 	restrict: 'E',
		 	link: function(scope, element, attributes) {

			},
			controller: function($scope){
				$scope.addMarker = function() {
						var newMarker = new google.maps.Marker({
								position: {lat: parseInt($scope.newMarker.lat), lng: parseInt($scope.newMarker.lng)},
								map: $scope.journeyView.map,
								title: $scope.newMarker.title
						});
				}
			}
		}







	}

	angular
		.module('journeygram')
		.directive('newMarkerForm', [newMarkerForm]);
	})();
