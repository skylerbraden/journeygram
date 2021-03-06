(function() {
    function JourneyViewCtrl($scope, hasInstagram, $location, $rootScope, $cookies, $window) {
        $location.path("/");
        console.log(hasInstagram);
        var vm = this;
        var nyc = {lat: 40.7128, lng: -74.0059};
        var kcmo = {lat: 39.0997, lng: -94.5786};



        vm.logout = function(){
            $cookies.remove('accessToken');
            $rootScope.loggedIn = false;
            $window.location.reload()
            console.log("Logout happened");
        }


        vm.map = new google.maps.Map(document.getElementById('journey-map'), {
            center: kcmo,
            scrollwheel: false,
            styles: [
              {
                featureType: "all",
                stylers: [
                 { saturation: -40 }
                ]
              },{
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [
                  { hue: "#00ffee" },
                  { saturation: 50 }
                ]
              },{
                featureType: "poi.business",
                elementType: "labels",
                stylers: [
                  { visibility: "off" }
                ]
              }
            ],
            zoom: 4
        });



        // vm.addMarker = function() {
        //     var newMarker = new google.maps.Marker({
        //         map: vm.map,
        //         position: {lat: parseInt(newMarker.lat), lng: parseInt(newMarker.lng)},
        //         title: newMarker.title
        //     });
        // };

        // google.maps.event.addListenerOnce(vm.map, 'idle', function(){
        //     vm.addMarker(coloSprings.lat, coloSprings.lng, "Co. Springs");
        //     vm.addMarker(littleton.lat, littleton.lng, "Littleton");
        // });


        //Instagram
        vm.photoList = [];
        vm.locationList = [];

        instaApi = function(photo){
            console.log(photo.data);

            $scope.$apply(function(){
                for (var i=0; i < photo.data.length; i++) {
                    vm.photoList.push({time: photo.data[i].created_time, image: photo.data[i].images.thumbnail, name: photo.data[i].location.name});
                    vm.locationList.push({time: photo.data[i].created_time, lat: photo.data[i].location.latitude, lng: photo.data[i].location.longitude});

                    new google.maps.Marker({
                        map: vm.map,
                        position: {lat: photo.data[i].location.latitude, lng: photo.data[i].location.longitude},
                        // title: 'Title'
                    });
                }


              // // Directions between Instagrams
            //   var directionsDisplay = new google.maps.DirectionsRenderer({
            //     map: vm.map
            //   });

              // Set destination, origin and travel mode.
              // var request = {
              //   destination: {lat: vm.locationList[1].lat, lng: vm.locationList[1].lng},
              //   origin: {lat: vm.locationList[0].lat, lng: vm.locationList[0].lng},
              //   travelMode: google.maps.TravelMode.DRIVING
              // };
              //
              // // Pass the directions request to the directions service.
              // var directionsService = new google.maps.DirectionsService();
              // directionsService.route(request, function(response, status) {
              //   if (status == google.maps.DirectionsStatus.OK) {
              //     // Display the route on the map.
              //     directionsDisplay.setDirections(response);
              //   }
              // });

            //   if (i == 0) request.origin = marker.getPosition();
            //   else if (i == locations.length - 1) request.destination = marker.getPosition();
            //   else {
            //     if (!request.waypoints) request.waypoints = [];
            //     request.waypoints.push({
            //       location: marker.getPosition(),
            //       stopover: true
            //     });
            //   }


            });

        };


        // Plot Instagram locations on Google Map
        // var instaMarker = function() {
        //   for (var i=0; 1 < vm.locationList.length; i++) {
        //     new google.maps.Marker({
        //         map: vm.map,
        //         position: {lat: vm.locationList[i].latitude, lng: vm.locationList[i].longitude},
        //         // title: 'Title'
        //     });
        //   }
        //   console.log(vm.locationList);
        // };

    }

    angular
        .module('journeygram')
        .controller('JourneyViewCtrl', ['$scope', 'hasInstagram', '$location', '$rootScope', '$cookies', '$window', JourneyViewCtrl]);
})();
