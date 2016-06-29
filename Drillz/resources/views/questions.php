<?php
?>
    <!DOCTYPE html>
    <html ng-app="app">

    <head>

        <!-- Main Style Sheet -->
        <link rel="stylesheet" href="/css/master.css" type="text/css" />
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

        <!-- Optional theme -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">
        <!-- Edge Fonts -->
        <script src="//use.edgefonts.net/bilbo-swash-caps;immi-five-o-five;jim-nightshade;julee.js"></script>

    </head>

    <body>
        <div class="fluid-container">
            <div class="row">
                <h1 id="welcomeTitle" name="welcome">Programmer Drillz</h1>
            </div>
        </div>
        <div class="fluid-container">
            <div class="row" ng-controller="TitleCtrl">
                <h1 id="title" name="title">{{title}}</h1>
            </div>
        </div>
        <div class="fluid-container">
            <div class="row" ng-controller="QuestionCtrl">
                <h1 id="question" name="question">{{questions}}</h1>
            </div>
        </div>
        <div class="fluid-container">
            <div class="row" ng-controller="MainCtrl">

            </div>
        </div>

        <div class="fluid-container">
            <div class="row">
                <div id="editor">
                </div>
            </div>
        </div>
        <div class="fluid-container">
            <div class="row">
                <div id="centerButtons">
                    <button class="btn questionBtn" id="previousQuestion">Previous Question</button>
                    <button class="btn questionBtn" id="nextQuestion" ng-click="update()">Next Question</button>
                    <button class="btn questionBtn" id="execute" ng-click="copy()">Execute</button>

                </div>
            </div>
        </div>
        <div class="fluid-container">
            <div class="row">
                <div>
                    <h1 id="output">Here is where the output will go</h1>
                </div>
            </div>
        </div>
        <div class="fluid-container">
            <div class="row">
                <div class="well well-lg col-md-6 col-md-offset-3">
                    <div>
                        Hello World
                    </div>
                </div>
                <div ng-view>
                </div>
            </div>
        </div>


    </body>
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
    <script type="text/javascript" src="https://code.angularjs.org/1.5.6/angular-resource.min.js"></script>
    <script type="text/javascript" src="https://code.angularjs.org/1.5.6/angular-route.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script>
    <script type="text/javascript" src="/js/routes/routes.js"></script>
    <script type="text/javascript" src="/js/controllers/controllers.js"></script>



    </html>
