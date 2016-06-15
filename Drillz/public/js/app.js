angular.module("app",[
    'ngResource',
    'ngRoute'
    ]).
    config(function($routeProvider){
        $routeProvider
        .when("/regex",
                {
                    templateUrl: "angular-views/regex.html",
                    controller: "QuestionCtrl"
                }
        )
        .when("/string",
                {
                    templateUrl: "angular-views/string.html",
                    controller: "QuestionCtrl"
                }
        )
        .when("/array",
                {
                    templateUrl: "angular-views/array.html",
                    controller: "QuestionCtrl"
                }
        );
        
    }).
    controller("MainCtrl", ["$scope", function($scope) {
        $scope.drill= "Regex";
    }]).
    controller("QuestionCtrl", ["$scope", function($scope) {
        $scope.question= "Random Question";
    }]);