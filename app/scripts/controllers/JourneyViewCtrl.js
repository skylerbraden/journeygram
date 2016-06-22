(function() {
    function JourneyViewCtrl($scope) {
        var vm = this;
        var littleton = {lat: 39.6133, lng: -105.0166};
        var coloSprings = {lat: 38.8339, lng: -104.8214};
        var london = {lat: 51.5074, lng: 0.1278};
        var nyc = {lat: 40.7128, lng: -74.0059};

        vm.map = new google.maps.Map(document.getElementById('journey-map'), {
            center: nyc,
            scrollwheel: false,
            zoom: 3
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
            });

            // Directions between Instagrams
            var directionsDisplay = new google.maps.DirectionsRenderer({
              map: vm.map
            });

            // Set destination, origin and travel mode.
            var request = {
              destination: indianapolis,
              origin: chicago,
              travelMode: google.maps.TravelMode.DRIVING
            };

            // Pass the directions request to the directions service.
            var directionsService = new google.maps.DirectionsService();
            directionsService.route(request, function(response, status) {
              if (status == google.maps.DirectionsStatus.OK) {
                // Display the route on the map.
                directionsDisplay.setDirections(response);
              }
            });

        };

        $.ajax({
            url: "https://api.instagram.com/v1/tags/journeygram/media/recent?access_token=3264274466.d8576bc.77adee700b254e958a8bbb6967a61142",
            type: 'get',
            dataType: 'jsonp',
            crossOrigin: true,
            jsonpCallback: "instaApi",
            cache: true
        });



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
        .controller('JourneyViewCtrl', ['$scope', JourneyViewCtrl]);
})();
