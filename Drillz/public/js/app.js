angular.module("app", [
'ngRoute','ngResource'
]).
config(function($routeProvider){

    $routeProvider.
        when('/', {
            templateUrl: 'angular-views/login.html'
        }).
        when('/menu', {
            templateUrl: 'angular-views/menu.html'
        }).
        when('/menu/regular_expressions', {
            templateUrl: 'angular-views/questions.html'
        }).
        when('/menu/strings', {
            templateUrl: 'angular-views/questions.html'
        }).
        
        otherwise({redirectTo : '/'}); 
}).
controller("MainCtrl", function() {
    
    
}).
controller("TitleCtrl", ["$scope", function($scope) {

    $scope.location = window.location;
    $scope.string = String($scope.location);
    $scope.title = $scope.string.replace("https://programmer-drills-arisean.c9users.io/#/menu/","");
    
}]).
controller("QuestionCtrl", ["$scope","$resource", function($scope,$resource) {
    
        $scope.location = window.location;
        $scope.string = String($scope.location);
        $scope.name = $scope.string.replace("https://programmer-drills-arisean.c9users.io/#/menu/","");
        
        $scope.file = $resource("/data/" + $scope.name + ".json");
        $scope.results = $scope.file.get();
        $scope.questions = $scope.results;

}]).
controller("EditorCtrl",function() {
    
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/twilight");
    editor.session.setMode("ace/mode/php");
});