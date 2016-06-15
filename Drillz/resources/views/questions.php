<!DOCTYPE html>
<html ng-app="app">

<head>
    <base href="/">
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
            <h1 id="welcomeTitle">Programmer Drillz</h1>
        </div>
    </div>
    <div class="fluid-container">
        <div class="row" ng-controller="MainCtrl">
            <h2 id="drillTitle">{{drill}}</h2>
        </div>
    </div>
    <div class="fluid-container">
        <div class="row" ng-controller="QuestionCtrl">
            <div ng-view></div>
            
        </div>
    </div>
    <div class="fluid-container">
        <div class="row">
            <div id="editor"></div>
            
        </div>
    </div>
    <div class="fluid-container">
        <div class="row">
            <div>
                <button class="btn questionBtn" id="previousQuestion">Previous Question</button>
                <button class="btn questionBtn" id="submitQuestion">Submit Question</button>
                <button class="btn questionBtn" id="nextQuestion">Next Question</button>
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

    

</body>
<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
<script type="text/javascript" src="https://code.angularjs.org/1.5.6/angular-resource.min.js"></script>
<script type="text/javascript" src="https://code.angularjs.org/1.5.6/angular-route.min.js"></script>
<script type="text/javascript" src="/js/app.js"></script>
<script type="text/javascript" src="/js/ace-builds/src-noconflict/ace.js"></script>
<script type="text/javascript" src="/js/ace-builds/src-noconflict/theme-twilight.js"></script>
<script type="text/javascript" src="/js/ace-builds/src-noconflict/mode-php.js"></script>
<script>
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/twilight");
    editor.session.setMode("ace/mode/php");
</script>



</html>