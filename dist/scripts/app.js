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
                  "hasInstagram" : function($location, $cookies, $rootScope){
                      if($cookies.get("accessToken")) {
                          $.ajax({
                              url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=" + $cookies.get("accessToken"),
                              type: 'get',
                              dataType: 'jsonp',
                              crossOrigin: true,
                              jsonpCallback: "instaApi",
                              cache: true
                          });
                          $rootScope.loggedIn = true;
                      }

                      console.log($cookies.get("accessToken"))
                    return true;
                  }
                }
			})

          .state('instaAuth', {
            url: '/access_token={accessToken}',
            controller: 'JourneyViewCtrl as journeyView',
            templateUrl: '/templates/journeyview.html',
            resolve: {
              "hasInstagram" : function($location, $stateParams, $rootScope, $cookies){
                //   $rootScope.loggedIn = false; // Seems like this should set it to false initially, then change it to true only if the next statement is true.
                  if($stateParams.accessToken != undefined){
                      $rootScope.loggedIn = true;
                      console.log($rootScope)
                      console.log("trying to json P");
                      $.ajax({
                          url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=" + $stateParams.accessToken,
                          type: 'get',
                          dataType: 'jsonp',
                          crossOrigin: true,
                          jsonpCallback: "instaApi",
                          cache: true
                  });

                    $cookies.put("accessToken", $stateParams.accessToken);
                  return "Logged in."
                }else{
                    // $rootScope.loggedIn = false;
                    return "no access_token";
                }
              }
            }
          })
    }

    angular
        .module('journeygram', ['ui.router','ngCookies'])
        .config(config);
 })();


 //   url: "https://api.instagram.com/v1/tags/journeygram/media/recent?access_token=" + $stateParams.accessToken,
