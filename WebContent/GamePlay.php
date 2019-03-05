<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Blockly</title>
    <link rel="stylesheet" type="text/css" href="css/grid.css">
    <link rel="stylesheet" type="text/css" href="css/gamePage.css">
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
    <script src="assets/canvas/index.js"></script>
    <script src="assets/canvas/game1.js"></script>
    <script src="assets/canvas/BlocklyGame1.js"></script>
    <script src="assets/canvas/breakWallGame.js"></script>

    <script src="js/wait_block.js"></script>
    <script src="js/movement_block.js"></script>
    <script src="js/movement_stub.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>

<body>
    <?php include 'Heading.php'; ?>
    <?php include 'HowToPlay.php'; ?>

    <div id="gameDiv" class="container-fluid">
        <div id="phaser">
            <div id="debug-grid" class="grid"></div>
        </div>
        <div id="gameButton" style="position: absolute; top: 5%; left: 1250px; ; height: 75%; width: 700px">
            <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#modal">How to play</button>
            <div style="position: absolute; top: 750px">
                <button onclick="selectLevel()" id="selectLevel"><img src="webImage/back.png" height="42" width="42">Select Level</button>
                <button onclick="runCode()" id="runButton"><img src="webImage/move.jpg" height="42" width="25"> Run JavaScript</button>
            </div>
        </div>
        <div id='displayText' style="position: absolute;top: 4%; right: 0px;width:700px">
            <p id='runTime'></p>
            <h2>
                <lable id="blocklyNum">1</lable>
            </h2>
        </div>
        <div id="blocklyDiv" style="position: absolute; top: 9%; right: 0px; ; height: 85%; width: 700px"></div>


    </div>

    <xml id="toolbox" style="display: none">
        <category name="movement" colour="#a55b6d">
            <block type="move_right"></block>
            <block type="move_left"></block>
            <block type="move_up"></block>
            <block type="move_down"></block>
        </category>
        <category name="Element" colour="#a55b6d">
            <block type="input"></block>
        </category>
        <category name="Logic" colour="#5C81A6">
            <block type="controls_if"></block>
            <block type="logic_compare">
                <field name="OP">EQ</field>
            </block>
            <block type="logic_operation">
                <field name="OP">AND</field>
            </block>
            <block type="logic_negate"></block>
            <block type="logic_boolean">
                <field name="BOOL">TRUE</field>
            </block>
            <block type="logic_null"></block>
            <block type="logic_ternary"></block>
        </category>
        <category name="Loops" colour="#5CA65C">
            <block type="controls_repeat_ext">
                <value name="TIMES">
                    <shadow type="math_number">
                        <field name="NUM">10</field>
                    </shadow>
                </value>
            </block>
            <block type="controls_whileUntil">
                <field name="MODE">WHILE</field>
            </block>
            <block type="controls_for">
                <field name="VAR" id="/F,^)I;.t]:{vNvb9c*U" variabletype="">i</field>
                <value name="FROM">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="TO">
                    <shadow type="math_number">
                        <field name="NUM">10</field>
                    </shadow>
                </value>
                <value name="BY">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
            </block>
            <block type="controls_forEach">
                <field name="VAR" id="eo9sI88J)_gt[]3.{$ke" variabletype="">j</field>
            </block>
            <block type="controls_flow_statements">
                <field name="FLOW">BREAK</field>
            </block>
        </category>
        <category name="Math" colour="#5C68A6">
            <block type="math_round">
                <field name="OP">ROUND</field>
                <value name="NUM">
                    <shadow type="math_number">
                        <field name="NUM">3.1</field>
                    </shadow>
                </value>
            </block>
            <block type="math_number">
                <field name="NUM">0</field>
            </block>
            <block type="math_single">
                <field name="OP">ROOT</field>
                <value name="NUM">
                    <shadow type="math_number">
                        <field name="NUM">9</field>
                    </shadow>
                </value>
            </block>
            <block type="math_trig">
                <field name="OP">SIN</field>
                <value name="NUM">
                    <shadow type="math_number">
                        <field name="NUM">45</field>
                    </shadow>
                </value>
            </block>
            <block type="math_constant">
                <field name="CONSTANT">PI</field>
            </block>
            <block type="math_number_property">
                <mutation divisor_input="false"></mutation>
                <field name="PROPERTY">EVEN</field>
                <value name="NUMBER_TO_CHECK">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>
            <block type="math_arithmetic">
                <field name="OP">ADD</field>
                <value name="A">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="B">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
            </block>
            <block type="math_on_list">
                <mutation op="SUM"></mutation>
                <field name="OP">SUM</field>
            </block>
            <block type="math_modulo">
                <value name="DIVIDEND">
                    <shadow type="math_number">
                        <field name="NUM">64</field>
                    </shadow>
                </value>
                <value name="DIVISOR">
                    <shadow type="math_number">
                        <field name="NUM">10</field>
                    </shadow>
                </value>
            </block>
            <block type="math_constrain">
                <value name="VALUE">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
                <value name="LOW">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="HIGH">
                    <shadow type="math_number">
                        <field name="NUM">100</field>
                    </shadow>
                </value>
            </block>
            <block type="math_random_int">
                <value name="FROM">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="TO">
                    <shadow type="math_number">
                        <field name="NUM">100</field>
                    </shadow>
                </value>
            </block>
            <block type="math_random_float"></block>
        </category>
        <category name="Text" colour="#5CA68D">
            <block type="text_charAt">
                <mutation at="true"></mutation>
                <field name="WHERE">FROM_START</field>
                <value name="VALUE">
                    <block type="variables_get">
                        <field name="VAR" id="RQSLzx/(1)Hts?pS(m)W" variabletype="">text</field>
                    </block>
                </value>
            </block>
            <block type="text">
                <field name="TEXT"></field>
            </block>
            <block type="text_append">
                <field name="VAR" id="9xRN2huoHD$=aKibJZAZ" variabletype="">item</field>
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="text_length">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="text_isEmpty">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="text_indexOf">
                <field name="END">FIRST</field>
                <value name="VALUE">
                    <block type="variables_get">
                        <field name="VAR" id="RQSLzx/(1)Hts?pS(m)W" variabletype="">text</field>
                    </block>
                </value>
                <value name="FIND">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="text_join">
                <mutation items="2"></mutation>
            </block>
            <block type="text_getSubstring">
                <mutation at1="true" at2="true"></mutation>
                <field name="WHERE1">FROM_START</field>
                <field name="WHERE2">FROM_START</field>
                <value name="STRING">
                    <block type="variables_get">
                        <field name="VAR" id="RQSLzx/(1)Hts?pS(m)W" variabletype="">text</field>
                    </block>
                </value>
            </block>
            <block type="text_changeCase">
                <field name="CASE">UPPERCASE</field>
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="text_trim">
                <field name="MODE">BOTH</field>
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="text_print">
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="text_prompt_ext">
                <mutation type="TEXT"></mutation>
                <field name="TYPE">TEXT</field>
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
        </category>
        <category name="Lists" colour="#745CA6">
            <block type="lists_indexOf">
                <field name="END">FIRST</field>
                <value name="VALUE">
                    <block type="variables_get">
                        <field name="VAR" id=")Xde81fb:O[*jf2H*Hu=" variabletype="">list</field>
                    </block>
                </value>
            </block>
            <block type="lists_create_with">
                <mutation items="0"></mutation>
            </block>
            <block type="lists_repeat">
                <value name="NUM">
                    <shadow type="math_number">
                        <field name="NUM">5</field>
                    </shadow>
                </value>
            </block>
            <block type="lists_length"></block>
            <block type="lists_isEmpty"></block>
            <block type="lists_create_with">
                <mutation items="3"></mutation>
            </block>
            <block type="lists_getIndex">
                <mutation statement="false" at="true"></mutation>
                <field name="MODE">GET</field>
                <field name="WHERE">FROM_START</field>
                <value name="VALUE">
                    <block type="variables_get">
                        <field name="VAR" id=")Xde81fb:O[*jf2H*Hu=" variabletype="">list</field>
                    </block>
                </value>
            </block>
            <block type="lists_setIndex">
                <mutation at="true"></mutation>
                <field name="MODE">SET</field>
                <field name="WHERE">FROM_START</field>
                <value name="LIST">
                    <block type="variables_get">
                        <field name="VAR" id=")Xde81fb:O[*jf2H*Hu=" variabletype="">list</field>
                    </block>
                </value>
            </block>
            <block type="lists_getSublist">
                <mutation at1="true" at2="true"></mutation>
                <field name="WHERE1">FROM_START</field>
                <field name="WHERE2">FROM_START</field>
                <value name="LIST">
                    <block type="variables_get">
                        <field name="VAR" id=")Xde81fb:O[*jf2H*Hu=" variabletype="">list</field>
                    </block>
                </value>
            </block>
            <block type="lists_split">
                <mutation mode="SPLIT"></mutation>
                <field name="MODE">SPLIT</field>
                <value name="DELIM">
                    <shadow type="text">
                        <field name="TEXT">,</field>
                    </shadow>
                </value>
            </block>
            <block type="lists_sort">
                <field name="TYPE">NUMERIC</field>
                <field name="DIRECTION">1</field>
            </block>
        </category>

        <sep></sep>
        <category name="Variables" colour="#A65C81" custom="VARIABLE"></category>
        <category name="Functions" colour="#9A5CA6" custom="PROCEDURE"></category>
    </xml>
    <script>
        goSelectLevel();
        var runCount = 0;
           document.getElementById('phaser').style.height = '100%';
           document.getElementById('phaser').style.width = '100%';

        function hideGame(Hide) {
            if (Hide) {
                document.getElementById('blocklyDiv').style.visibility = 'hidden';
                document.getElementById('debug-grid').style.visibility = 'hidden';
                document.getElementById('selectLevel').style.visibility = 'hidden';
                document.getElementById('gameButton').style.visibility = 'hidden';
                document.getElementById('displayText').style.visibility = 'hidden';
            } else {
                document.getElementById('blocklyDiv').style.visibility = 'visible';
                document.getElementById('debug-grid').style.visibility = 'visible';
                document.getElementById('selectLevel').style.visibility = 'visible';
                document.getElementById('gameButton').style.visibility = 'visible';
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

        function goSelectLevel() {
            runCount = 0;
            selectLevel()
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

    </script>

    <script src="js/run.js"></script>
</body>

</html>
