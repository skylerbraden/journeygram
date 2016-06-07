(function() {
    function JourneyViewCtrl(Cities) {

        console.log("The controller is working.");
        console.log(Cities[1]);



    }

    angular
        .module('journeygram')
        .controller('JourneyViewCtrl', ['Cities', JourneyViewCtrl]);
})();
