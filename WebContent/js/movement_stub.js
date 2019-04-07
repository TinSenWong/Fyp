/*
Define the move_right function without js interpreter. 
*/
var x;

Blockly.JavaScript['newRow'] = function(block) {
    var code = 'newLine();\n'; // make sure to keep the \n or it will not work correctly
    return code;
};


function initInterpreterNewLine(interpreter, scope) {
    // uses to time outs, terminates the upward motion before termination moving right
    Blockly.JavaScript.addReservedWords('newLine');

    var wrapper = interpreter.createAsyncFunction(
        function(callback) {
            setTimeout(function(){nextline(); callback();},  300);
        });
    interpreter.setProperty(scope, 'newLine', wrapper);

}
Blockly.JavaScript['null'] = function(block) {
    var code = 'space();\n'; // make sure to keep the \n or it will not work correctly
    return code;
};


function initInterpreterSpace(interpreter, scope) {
    // uses to time outs, terminates the upward motion before termination moving right
    Blockly.JavaScript.addReservedWords('space');

    var wrapper = interpreter.createAsyncFunction(
        function(callback) {
            setTimeout(function(){addPlayerInputList('pause');; callback();},  300);
        });
    interpreter.setProperty(scope, 'space', wrapper);

}

Blockly.JavaScript['move_right'] = function(block) {
    var code = 'goRightBlock();\n'; // make sure to keep the \n or it will not work correctly
    return code;
};


function initInterpreterGoRight(interpreter, scope) {
    // uses to time outs, terminates the upward motion before termination moving right
    Blockly.JavaScript.addReservedWords('goRightBlock');
    var wrapper = interpreter.createAsyncFunction(
        function(callback) {
            goToTheRight = true;
            setTimeout(function(){ goToTheRight = false; callback(); },  300);
        });
    interpreter.setProperty(scope, 'goRightBlock', wrapper);
}

Blockly.JavaScript['move_left'] = function(block) {
    // call the function defined for the interpreter initInterpreterGoRight()
    var code = 'goLeftBlock();\n'; // make sure to keep the \n or it will not work correctly
    return code;
};


function initInterpreterGoLeft(interpreter, scope) {
    // Ensure function name does not conflict with variable names.
    // uses to time outs, terminates the upward motion before termination moving right
    Blockly.JavaScript.addReservedWords('goLeftBlock');
    var wrapper = interpreter.createAsyncFunction(
        function(callback) {
            goToTheLeft = true;
            setTimeout(function(){ goToTheLeft = false; callback(); },  300);
        });
    interpreter.setProperty(scope, 'goLeftBlock', wrapper);
}

Blockly.JavaScript['move_up'] = function(block) {
    var code = 'goUpBlock();\n'; // make sure to keep the \n or it will not work correctly
    return code;
};
function initInterpreterGoUp(interpreter, scope) {
    // Ensure function name does not conflict with variable names.
    // uses to time outs, terminates the upward motion before termination moving right
    Blockly.JavaScript.addReservedWords('goUpBlock');
    var wrapper = interpreter.createAsyncFunction(
        function(callback) {
            goToTheUp = true;
            setTimeout(function(){ goToTheUp = false; callback(); },  300);
        });
    interpreter.setProperty(scope, 'goUpBlock', wrapper);
}

Blockly.JavaScript['move_down'] = function(block) {
    var code = 'goDownBlock();\n'; // make sure to keep the \n or it will not work correctly
    return code;
};
function initInterpreterGoDown(interpreter, scope) {
    // Ensure function name does not conflict with variable names.
    // uses to time outs, terminates the upward motion before termination moving right
    Blockly.JavaScript.addReservedWords('goDownBlock');
    var wrapper = interpreter.createAsyncFunction(
        function(callback) {
            goToTheDown = true;
            setTimeout(function(){ goToTheDown = false; callback(); },  300);
        });
    interpreter.setProperty(scope, 'goDownBlock', wrapper);
}

Blockly.JavaScript['input'] = function(block) {
    var element = block.getFieldValue('Element');
    element = element.toString();
    x = String(element);
    var code = "getInput('"+x+"');\n"; // make sure to keep the \n or it will not work correctly
    return code;
};
function initInterpreterGetInput(interpreter, scope) {
    // Ensure function name does not conflict with variable names.
    Blockly.JavaScript.addReservedWords('getInput');
    var wrapper = interpreter.createAsyncFunction(
        function(x, callback) {
            setTimeout(function () {
                addPlayerInputList(x);
                callback();
            },  300);
        });
    interpreter.setProperty(scope, 'getInput', wrapper);
}





