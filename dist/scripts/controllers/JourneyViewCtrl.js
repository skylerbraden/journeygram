(function() {
    function JourneyViewCtrl() {
        var vm = this;
        var littleton = {lat: 39.6133, lng: -105.0166};
        var coloSprings = {lat: 38.8339, lng: -104.8214};

        vm.map = new google.maps.Map(document.getElementById('journey-map'), {
            center: littleton,
            scrollwheel: false,
            zoom: 8
        });

        google.maps.event.addListenerOnce(vm.map, 'idle', function(){
            // vm.addMarker(coloSprings.lat, coloSprings.lng, "Co. Springs");
            // vm.addMarker(littleton.lat, littleton.lng, "Littleton");
        });




    }

    angular
        .module('journeygram')
        .controller('JourneyViewCtrl', [JourneyViewCtrl]);
})();
