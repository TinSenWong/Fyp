Blockly.JavaScript.addReservedWords('exit');
var outputArea = document.getElementById('output');
var runButton = document.getElementById('runButton');
var myInterpreter = null;
var runner;

function initApi(interpreter, scope) {
    // Add an API function for the alert() block, generated for "text_print" blocks.
    var wrapper = function (text) {
        text = text ? text.toString() : '';
        outputArea.value = outputArea.value + '\n' + text;
    };
    interpreter.setProperty(scope, 'alert',
        interpreter.createNativeFunction(wrapper));


    // Add an API function for the prompt() block.
    var wrapper = function (text) {
        text = text ? text.toString() : '';
        return interpreter.createPrimitive(1);
    };
    interpreter.setProperty(scope, 'prompt',
        interpreter.createNativeFunction(wrapper));

    // Add an API function for the jump() block.
    var wrapper = function (text) {
        text = text ? text.toString() : '';
        //return interpreter.createPrimitive(prompt(text));
    };

    interpreter.setProperty(scope, 'jump',
        interpreter.createNativeFunction(wrapper));

    // Add all the custom block api calls here
    initInterpreterWaitForSeconds(interpreter, scope);
    initInterpreterGoRight(interpreter, scope);
    initInterpreterGoLeft(interpreter, scope);
    initInterpreterGoUp(interpreter, scope);
    initInterpreterGoDown(interpreter, scope);
    initInterpreterGetInput(interpreter, scope);
    initInterpreterSpace(interpreter, scope);
    initInterpreterNewLine(interpreter, scope);
    // Add an API function for highlighting blocks.
    var wrapper = function (id) {
        id = id ? id.toString() : '';
        return interpreter.createPrimitive(highlightBlock(id));
    };
    interpreter.setProperty(scope, 'highlightBlock',
        interpreter.createNativeFunction(wrapper));

    var wrapper = function (id) {
        id = id ? id.toString() : '';
        return goRightX(id);
        //return interpreter.createPrimitive(highlightBlock(id));
    };
    interpreter.setProperty(scope, 'bb',
        interpreter.createNativeFunction(wrapper));
}

var highlightPause = false;
var latestCode = '';

function highlightBlock(id) {
    workspace.highlightBlock(id);
    highlightPause = true;
}

function resetStepUi(clearOutput) {
    workspace.highlightBlock(null);
    highlightPause = false;
    runButton.disabled = '';
}

function generateCodeAndLoadIntoInterpreter() {
    // Generate JavaScript code and parse it.
    Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
    Blockly.JavaScript.addReservedWords('highlightBlock');
    latestCode = Blockly.JavaScript.workspaceToCode(workspace);

    resetStepUi(true);
}

function resetInterpreter() {
    myInterpreter = null;
    if (runner) {
        clearTimeout(runner);
        runner = null;
    }
}

function runCode() {
    if (workspace.getAllBlocks().length == 0) {
        alert('You have no command to run!');
    } else {
        resetElement();
        if (!myInterpreter) {
            // First statement of this code.
            // Clear the program output.
            resetStepUi(true);
            runButton.disabled = 'disabled';

            // And then show generated code in an alert.
            // In a timeout to allow the outputArea.value to reset first.
            setTimeout(function () {
                // Begin execution
                highlightPause = false;
                myInterpreter = new Interpreter(latestCode, initApi);
                runner = function () {
                    if (myInterpreter) {
                        if (MonsterGame) {
                            MonsterGame = false;
                        } else {
                            var hasMore = myInterpreter.run();
                            if (hasMore) {
                                // Execution is currently blocked by some async call.
                                // Try again later.
                                setTimeout(runner, 10);
                            } else {
                                // Program is complete.

                                checkInput = true;

                                console.log('\n\n<< complete >>');
                                //resetInterpreter();
                                resetStepUi(false);
                            }
                        }
                    }
                };
                runner();
            }, 1);


            runCount += 1;



            document.getElementById('runTime').innerHTML = '<h2>RunTime :' + runCount + '</h2>';
            return;
        }
    }
}


// Load the interpreter now, and upon future changes.
generateCodeAndLoadIntoInterpreter();
workspace.addChangeListener(function (event) {
    if (!(event instanceof Blockly.Events.Ui)) {
        // Something changed. Parser needs to be reloaded.
        resetInterpreter();
        generateCodeAndLoadIntoInterpreter();
    }
});