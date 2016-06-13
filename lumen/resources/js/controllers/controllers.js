angular.module('app',
[])
.controller("MainController", ["$scope",function($scope) {
    var questions = [1,2,3,4,5,6,7];
    $scope.hello = "Hello World";
    $scope.count = 0;
    $scope.question = "Click Submit To Begin";
    $scope.randomNumber = function() {
        
        var randomNumber = questions[Math.floor((Math.random() * questions.length))];
        var x = questions.indexOf(randomNumber);
        if(x != -1) {
	    questions.splice(x, 1);
        }
        switch(randomNumber) {
            case(1):
                $scope.question = "Write a PHP script that checks if a string contains another string";
                break;
            case(2):
                $scope.question = "Write a PHP script that removes the last word from a string.";
                break;
            case(3):
                $scope.question = "Write a PHP script that removes the whitespaces from a string";
                break;
            case(4):
                $scope.question = "Write a PHP script to remove non numeric characters except comma and dot";
                break;
            case(5):
                $scope.question = "Write a PHP script to remove new lines (characters) from a string.";
                break;
            case(6):
                $scope.question = "Write a PHP script to extract text (within parenthesis) from a string.";
                break;
            case(7):
                $scope.question = "Write a PHP script to remove all characters from a string except a-z A-Z 0-9 or \" \".";
                break;
            default:
                $scope.question = "You have completed this drill!";
                break;
        }
    $scope.count = 7 - questions.length; 
    if($scope.count > 0) {
    var editor = ace.edit("editor");
    $scope.answer = editor.getValue();
    }
    };
        
}]);