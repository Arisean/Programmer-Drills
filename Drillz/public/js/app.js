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
        
        otherwise({redirectTo : '/'}); 
}).
controller("MainCtrl", function() {
    
    
}).
controller("TitleCtrl", ["$scope", function($scope) {
    
    $scope.title = "Here is the title of the drill";
}]).
controller("QuestionCtrl", ["$scope", function($scope) {
    
    $scope.questions = "Here is where the random question will go???";
}]).
controller("EditorCtrl",function() {
    
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/twilight");
    editor.session.setMode("ace/mode/php");
});