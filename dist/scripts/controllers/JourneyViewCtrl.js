(function() {
    function JourneyViewCtrl($scope) {
        var vm = this;
        var littleton = {lat: 39.6133, lng: -105.0166};
        var coloSprings = {lat: 38.8339, lng: -104.8214};
        var london = {lat: 51.5074, lng: 0.1278};

        vm.map = new google.maps.Map(document.getElementById('journey-map'), {
            center: littleton,
            scrollwheel: false,
            zoom: 8
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
        vm.latList = [];
        vm.photoList = [];
        vm.locationList = [];

        instaApi = function(photo){
            console.log(photo.data);
            // var latitude = photo.data[0].location.latitude;

            // console.log(vm.latList);

            $scope.$apply(function(){
                for (var i=0; i < photo.data.length; i++) {
                    vm.latList.push(photo.data[i].location.latitude);
                    vm.photoList.push(photo.data[i].images);
                    vm.locationList.push(photo.data[i].location);
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
        var instaMarker = new google.maps.Marker({
            map: vm.map,
            position: {vm.locationList[0].latitude, vm.locationList[0].longitude},
            title: 'London!'
        });


    }

    angular
        .module('journeygram')
        .controller('JourneyViewCtrl', ['$scope', JourneyViewCtrl]);
})();
