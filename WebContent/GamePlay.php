<?php
session_start();

if (!isset($_SESSION['username'])) {
    //$_SESSION['msg'] = "You must log in first";
    //header('location: RegisterPage.php');
}


?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Blockly</title>
    <link rel="stylesheet" type="text/css" href="css/grid.css">
    <link rel="stylesheet" type="text/css" href="css/gamePage.css">
    <link rel="stylesheet" type="text/css" href="css/popup.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/font/octicons.min.css" rel="stylesheet">
    <link href="src/jquery-bootstrap-modal-steps.js"/>
    <script src="google-blockly/blockly_compressed.js"></script>
    <script src="google-blockly/blocks_compressed.js"></script>
    <script src="google-blockly/javascript_compressed.js"></script>
    <script src="google-blockly/msg/js/en.js"></script>
    <script src="JS-Interpreter/acorn_interpreter.js"></script>
    <script src="lib/phaser.js"></script>
    <script src="lib/phaser-input.js"></script>
    <script src="lib/phaser-nineslice.js"></script>
    <script src="lib/phaser-kinetic-scrolling-plugin.js"></script>

    <script src="assets/canvas/function.js"></script>

    <script src="assets/canvas/Level1.js"></script>
    <script src="assets/canvas/Level2.js"></script>
    <script src="assets/canvas/Level3.js"></script>
    <script src="assets/canvas/Level4.js"></script>
    <script src="assets/canvas/Level5.js"></script>
    <script src="assets/canvas/Level6.js"></script>
    <script src="assets/canvas/Level7.js"></script>
    <script src="assets/canvas/Level8.js"></script>
    <script src="assets/canvas/Level9.js"></script>
    <script src="assets/canvas/Level10.js"></script>
    <script src="assets/canvas/Level11.js"></script>
    <script src="assets/canvas/Level12.js"></script>
    <script src="assets/canvas/Level13.js"></script>
    <script src="assets/canvas/Level14.js"></script>
    <script src="assets/canvas/Level15.js"></script>

    <script src="assets/canvas/index.js"></script>
    <script src="assets/canvas/game1.js"></script>
    <script src="assets/canvas/breakWallGame.js"></script>

    <script src="js/wait_block.js"></script>
    <script src="js/movement_block.js"></script>
    <script src="js/movement_stub.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>

</head>

<body onresize="resizeCanvas()">

<?php include 'Heading.php'; ?>
<?php include 'popupmenu.html'; ?>
<?php include 'blocklyXml.html'; ?>
<?php include 'howtoplay.html'; ?>
<div id="gameDiv">
    <div id="phaser">
        <div id="debug-grid" class="grid"></div>
    </div>
    <div id="gameButtonDIV" style="">
        <button onclick="selectLevel()" id="selectLevel"><img src="webImage/back.png" height="42" width="42">Select
            Level
        </button>
        <button onclick="runCode()" id="runButton"><img src="webImage/move.jpg" height="42" width="25"> Run JavaScript
        </button>
        <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#modal">How to play</button>
    </div>
    <div id='displayText'>
        <p id='runTime'></p>
        <h2>
            <lable id="blocklyNum"></lable>
        </h2>
    </div>
    <div id="blocklyDiv" style="position: absolute; top: 9%; right: 0px; ; height: 85%; width: 700px"></div>

</div>


<script>
    //*******************
    <?php

    if (isset($_GET['logout'])) {
        session_destroy();
        unset($_SESSION['username']);
        header("location: LoginPage.php");
    }
    ?>
    window.onload = initPopups;
    goSelectLevel();
    $('#modalToggle').click(function () {
        $('#modal').modal({
            backdrop: 'static'
        });
    });

    var runCount = 0;
    document.getElementById('phaser').style.height = '100%';
    document.getElementById('phaser').style.width = '100%';

    function hideGame(Hide) {
        if (Hide) {
            document.getElementById('blocklyDiv').style.visibility = 'hidden';
            document.getElementById('debug-grid').style.visibility = 'hidden';
            document.getElementById('selectLevel').style.visibility = 'hidden';
            document.getElementById('gameButtonDIV').style.visibility = 'hidden';
            document.getElementById('displayText').style.visibility = 'hidden';
        } else {
            document.getElementById('blocklyDiv').style.visibility = 'visible';
            document.getElementById('debug-grid').style.visibility = 'visible';
            document.getElementById('selectLevel').style.visibility = 'visible';
            document.getElementById('gameButtonDIV').style.visibility = 'visible';
            document.getElementById('displayText').style.visibility = 'visible';
        }
    }

    function hideGrid(Hide) {
        if (Hide) {
            document.getElementById('debug-grid').style.visibility = 'hidden';
        } else {
            document.getElementById('debug-grid').style.visibility = 'visible';
        }
    }


    hideGame(true);

    var workspace = Blockly.inject('blocklyDiv', {
        maxBlocks: 99,
        media: 'google-blockly/media/',
        toolbox: document.getElementById('toolbox')
    });

    function onWorkspaceChange(event) {
        document.getElementById('blocklyNum').textContent =
            "You have  " + workspace.remainingCapacity() + " block(s) can use.";
    }

    workspace.addChangeListener(onWorkspaceChange);
    onWorkspaceChange();

    function resizeCanvas() {
        var blocklyDiv = document.getElementById('blocklyDiv');
        if (currentScreen == 'level') {
            if (window.innerWidth > 640 && window.innerWidth < 2000) {
                blocklyDiv.style.width = window.innerWidth * 0.3 + 'px';
                blocklyDiv.style.height = window.innerHeight * 0.8 + 'px';
                game.width = window.innerWidth * 0.625;
                game.height = game.width * (2 / 3);

                $('#debug-grid').height(game.height);
                $('#debug-grid').width(game.width);
                document.documentElement.style.setProperty('--gird-size', game.width / 37.5 + 'px');
                document.documentElement.style.setProperty('--start-line', game.width / 37.5 - 1 + 'px');


            } else if (window.innerWidth > 2000) {
                game.width = 1200;
                game.height = 800;
                $('#debug-grid').height(game.height);
                $('#debug-grid').width(game.width);
                blocklyDiv.style.width = window.innerWidth * 0.35 + 'px';
                document.documentElement.style.setProperty('--gird-size', '32px');
                document.documentElement.style.setProperty('--start-line', '31px');
            }

        } else {
            selectLevel();
        }
    }

    window.addEventListener('resize', resizeCanvas, false);
</script>
<div id='additem' hidden></div>
<div id='msgContainer'></div>
<script src="js/run.js"></script>
</body>

</html>
