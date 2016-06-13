angular.module('app',
[])
.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/questions/regular_expression/question_one.html',
        controller: 'MainController',
      });
  }]);