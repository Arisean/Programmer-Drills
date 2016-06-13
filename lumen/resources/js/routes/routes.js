angular.module('app',
['ngRoute'])
.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'home.html'
      })
      .when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });