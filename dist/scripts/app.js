(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });
        
        $stateProvider
            .state('journeymap', {
                url: '/',
                controller: 'JourneyMapCtrl as journeymap',
                templateUrl: '/templates/journeymap.html'
            });
//			.state('history', {
//				url: '/history',
//				controller: 'TaskListCtrl as tasklist',
//				templateUrl: '/templates/history.html'
//			});
    }
    
    angular
        .module('journeygram', ['ui.router'])
        .config(config);
 })();