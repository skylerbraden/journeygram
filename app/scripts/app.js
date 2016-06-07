(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });

        $stateProvider
            .state('instagram', {
                url: '/instagram',
                controller: 'InstagramCtrl as instagram',
                templateUrl: '/templates/instagram.html'
            })
			.state('journeyview', {
				url: '/',
				controller: 'JourneyViewCtrl as journeyview',
				templateUrl: '/templates/journeyview.html'
			});
    }

    angular
        .module('journeygram', ['ui.router'])
        .config(config);
 })();
