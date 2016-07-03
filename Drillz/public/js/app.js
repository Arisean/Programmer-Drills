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
        when('/menu/arrays', {
            templateUrl: 'angular-views/questions.html'
        }).
        when('/menu/functions', {
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
    
        /**
         * Find the name of the current page location and remove the web address
         * @params none
         * 
         * @return title of drill
         */
        $scope.location = window.location;
        $scope.string = String($scope.location);
        $scope.name = $scope.string.replace("https://programmer-drills-arisean.c9users.io/#/menu/","");
        
        /**
         * Create an array from the json file to set the amount of questions
         * @params none
         * 
         * @return Number of questions in the file
         *
         */
        var questions = [];
        var i = 0;
        $scope.questions = "Click To Begin";
            
            $scope.file = $resource("/data/" + $scope.name + ".json");
            $scope.results = $scope.file.get(function(data) {
            $scope.data = data;
            var dataLength = $scope.data['questions'].length;
            
            while (i <= dataLength) {
                questions.push(i);
                i++;
                }
            });
        

        /**
         * Display random questions from the json file
         * @params None
         * 
         * @return Questions in random order
         *
         */
        $scope.randomNumber = function() {
            var randomNumber = questions[Math.floor((Math.random() * questions.length))];
            var x = questions.indexOf(randomNumber);
            if(x != -1) {
    	    questions.splice(x, 1);
    	    
            $scope.count= randomNumber;
            $scope.questions = $scope.data['questions'][$scope.count]['question'];
            }
            if (questions =="") {
                $scope.questions = "Lesson Complete";
            }
        };


}]).
controller("EditorCtrl",["$scope","$http",function($scope,$http) {
    
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/twilight");
    editor.session.setMode("ace/mode/php");
    editor.session.setValue("<?php echo \'Arisean\;'");
    
    
    
    $scope.execute = function() {
        var value = editor.session.getValue();
        var request = $http({
                                method: "post",
                                url: "/questions",
                                data: { 
                                    code : value
 
                                      }
                            });
                            // Store the data-dump of the FORM scope.
                            request.success(
                                function(html) {
                                                $scope.output = html;
                                                }
                                            );

    };
}]);