(function() {
    function config($stateProvider, $locationProvider, $urlRouterProvider) {
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
				controller: 'JourneyViewCtrl as journeyView',
				templateUrl: '/templates/journeyview.html',
                resolve: {
                  "hasInstagram" : function($location){
                    return true;
                  }
                }
			})

          .state('instaAuth', {
            url: '/access_token={accessToken}',
            controller: 'JourneyViewCtrl as journeyView',
            templateUrl: '/templates/journeyview.html',
            resolve: {
              "hasInstagram" : function($location, $stateParams, $rootScope){
                if($stateParams.accessToken != undefined){
                  $rootScope.loggedIn = true;
                  console.log("trying to json P")
                  $.ajax({
                    //   url: "https://api.instagram.com/v1/tags/journeygram/media/recent?access_token=" + $stateParams.accessToken,
                      url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=" + $stateParams.accessToken,
                      type: 'get',
                      dataType: 'jsonp',
                      crossOrigin: true,
                      jsonpCallback: "instaApi",
                      cache: true
                  });
                  return "Logged in."
                }else{
                    $rootScope.loggedIn = false;
                    return "no access_token";
                }
              }
            }
          })
    }

    angular
        .module('journeygram', ['ui.router'])
        .config(config);
 })();
