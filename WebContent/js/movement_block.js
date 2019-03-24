/* Generate blocks with https://blockly-demo.appspot.com/static/demos/blockfactory/index.html */


Blockly.Blocks['newRow'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Next Line");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['null'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Space");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['move_right'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("move right");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['move_left'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("move left");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['move_up'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("move up");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['move_down'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("move down");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['input'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Summon")
           .appendField(new Blockly.FieldDropdown(options), 'Element');
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


var options = [
    [{'src': 'assets/image/fire.png', 'width': 25, 'height': 25, 'alt': 'fire'}, 'fire'],
    [{'src': 'assets/image/terra.png', 'width': 25, 'height': 25, 'alt': 'terra'}, 'terra'],
    [{'src': 'assets/image/wood.png', 'width': 25, 'height': 25, 'alt': 'wood'}, 'wood'],
    [{'src': 'assets/image/Thunder.png', 'width': 25, 'height': 25, 'alt': 'Thunder'}, 'Thunder'],
    [{'src': 'assets/image/water.png', 'width': 25, 'height': 25, 'alt': 'water'}, 'water']
]