(function() {
    function JourneyViewCtrl() {

        var littleton = {lat: 39.6133, lng: -105.0166};
        var coloSprings = {lat: 38.8339, lng: -104.8214};

        (function initMap() {
            var map = new google.maps.Map(document.getElementById('journey-map'), {
                center: littleton,
                scrollwheel: false,
                zoom: 8
            });

            var addMarker = function(newLat, newLng, markerTitle) {
                var newMarker = new google.maps.Marker({
                    position: {lat: newLat, lng: newLng},
                    map: map,
                    title: markerTitle
                });
            }

            // addMarker(coloSprings.lat, coloSprings.lng, "Co. Springs");
            // addMarker(littleton.lat, littleton.lng, "Littleton");

        })();




    }

    angular
        .module('journeygram')
        .controller('JourneyViewCtrl', [JourneyViewCtrl]);
})();
