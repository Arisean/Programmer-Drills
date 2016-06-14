angular.module("app",[
    'ngResource',
    'ngRoute'
    ]).
    config(function($routeProvider){
        $routeProvider
        .when("/",
                {
                templateUrl: "angular-views/welcome.html",
                controller: "MainCtrl"
                }
        )
        .when("/fake",
                {
                  templateUrl: "resources/views/ae.html",
                  controller: "MainCtrl"
                }
        );
    }).
    controller("MainCtrl", ["$scope", function($scope) {
        $scope.name = "Arisean";
    }]);