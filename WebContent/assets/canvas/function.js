//main
var game;
var maxBlock;
var toolbox;
// colors is actually the array of level pages
var colors = ["0xffffff"];
//var colors = ["0xffffff", "0xff0000", "0x00ff00", "0x0000ff", "0xffff00"];
// columns of thumbnails in each page
var columns = 9;
// rows of thumbnails in each page
var rows = 6;
// thumbnail width, in pixels
var thumbWidth = 100;
// thumbnail height, in pizels
var thumbHeight = 100;
// empty space between two thumbnails, in pixels
var spacing = 20;
// stars array
var stars = [];
// local storage name
var localStorageName = "levelselect";
// level we are currently playing
var level;
var testmode = false;
var live = 1 ;
var game1Pass = false;
var game2Pass = false;
var lastOrder;
var isSelectLevel = true;
var screenWidth = screen.width;
var screenHeight = screen.height * 0.8;
var playerInput;
var weaknessGroup;
var currentRow=0;
var correct;
var worngTime=0;
var checkInput=false;
var finish=0;
var round=0;
var currentRow=0;
var currentCol=0;
var playerInputList =createArray(10,20);
function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}
function selectLevel(){
	if (game != null) {
        game.destroy();
    }
	game = new Phaser.Game($(document).width(),$(document).height(), Phaser.Auto, 'phaser');

	game.state.add("PlayGame", playGame);
    game.state.start("PlayGame");
	Phaser.Device.whenReady(function () {
		game.plugins.add(PhaserInput.Plugin);
		game.plugins.add(PhaserNineSlice.Plugin);
		game.plugins.add(Phaser.Plugin.KineticScrolling);
	});
	var context = new AudioContext();
};

//level
var goToTheRight = false;
var goToTheLeft = false;
var goToTheUp = false;
var goToTheDown = false;
var play;
var playerY;
var playerX;
var map;
var key = false;
var hp = 3;
function checkOverlap(spriteA, spriteB) {
 
    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();              
 
    return Phaser.Rectangle.intersects(boundsA, boundsB);
 
}
//01
function collisionHandler(){
	hp -= 1;
	this.fHPGroup.children[hp].play('play');
	this.fSpike.children[i].destroy();
	if (hp == 0){
		if(confirm('你死了  重新遊玩')){
			hp = 3;
			this.state.add("game1", Level10);
			this.state.start("game1");
		}else{
			this.state.add("playGame", playGame);
			this.state.start("playGame");
		}
		
	}
}
function collisionHandler2(){
	hp -= 1;
	this.fHPGroup.children[1].play('play');
	if (hp == 0){
		if(confirm('你死了  重新遊玩')){
			hp = 3;
			this.state.add("game1", Level10);
			this.state.start("game1");
		}else{
			this.state.add("playGame", playGame);
			this.state.start("playGame");
		}
		
	}
}
function collisionHeal(){
	hp += 1;
	this.fHPGroup.children[hp-1].play('heal');
	this.fHearts.children[i].destroy();
}
function getKey(){
	key = true;
	this.fKeyYellow.destroy();
}
function IsOpenChest(){
	if (key){
		this.fTreasure_chest.play('open').onComplete.add(function(){
			if (hp==1){
				stars[level] = 1;
		        if (stars[level + 1] != undefined && stars[level + 1] == -1) {
		            stars[level + 1] = 0;
		        }
			}else if (hp==2){
				stars[level] = 2;
		        if (stars[level + 1] != undefined && stars[level + 1] == -1) {
		            stars[level + 1] = 0;
		        }
			}else if (hp==3){
				stars[level] = 3;
		        if (stars[level + 1] != undefined && stars[level + 1] == -1) {
		            stars[level + 1] = 0;
		        }
			}
			
	        localStorage.setItem(localStorageName, stars.toString());
	        this.state.add("playGame", playGame);
	        game.state.start("playGame");
		}, this);
	}
}
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}
function wait(millisecondsToWait) {
    setTimeout( function() {

    },millisecondsToWait)
    sleep(millisecondsToWait);
}

function changeToolbox(toolbox,maxBlockNum){
    workspace.dispose();
    workspace = Blockly.inject('blocklyDiv',
        {
            maxBlocks:maxBlockNum,
            media: 'google-blockly/media/',
            toolbox: toolbox
        });
    generateCodeAndLoadIntoInterpreter();
    workspace.addChangeListener(function (event) {
        if (!(event instanceof Blockly.Events.Ui)) {
            // Something changed. Parser needs to be reloaded.
            resetInterpreter();
            generateCodeAndLoadIntoInterpreter();
        }
    });

    workspace.addChangeListener(onWorkspaceChange);
    onWorkspaceChange();
}

function viewAllBlockly() {
    workspace.dispose();
    workspace = Blockly.inject('blocklyDiv',
        {
            media: 'google-blockly/media/',
            toolbox: document.getElementById("toolbox")
        });
    generateCodeAndLoadIntoInterpreter();
    workspace.addChangeListener(function (event) {
        if (!(event instanceof Blockly.Events.Ui)) {
            // Something changed. Parser needs to be reloaded.
            resetInterpreter();
            generateCodeAndLoadIntoInterpreter();
        }
    });

    workspace.addChangeListener(onWorkspaceChange);
    onWorkspaceChange();
}
function messageBox(text,w,h){

        //if exists
        if (this.msgBox) {
            this.msgBox.destroy();
        }
        //make a group to hold all the elements
        var msgBox = game.add.group();
        //make the back of the message box
        var back = game.add.sprite(0, 0, "boxBack");
        //make the close button
        var closeButton = game.add.sprite(0, 0, "closeButton");
        //make a text field
        var text1 = game.add.text(0, 0, text);
        //set the textfeild to wrap if the text is too long
        text1.wordWrap = true;
        //make the width of the wrap 90% of the width
        //of the message box
        text1.wordWrapWidth = w * .9;
        //
        //
        //
        //add the elements to the group
        msgBox.add(back);
        msgBox.add(closeButton);
        msgBox.add(text1);
        //
        //set the close button
        //in the center horizontally
        //and near the bottom of the box vertically
        closeButton.x = w / 2 - closeButton.width / 2;
        closeButton.y = h - closeButton.height;
        //enable the button for input
        closeButton.inputEnabled = true;
        //add a listener to destroy the box when the button is pressed
        closeButton.events.onInputDown.add(function(){
            this.msgBox.destroy();
        }, this);
        //
        //
        //set the message box in the center of the screen
        msgBox.x = game.width / 2 - msgBox.width / 2;
        msgBox.y = game.height / 2 - msgBox.height / 2;
        //
        //set the text in the middle of the message box
        text1.x = w / 2 - text1.width / 2;
        text1.y = h / 2 - text1.height / 2;
        //make a state reference to the messsage box
        this.msgBox = msgBox;

}
function space(){
    if (currentCol<20){
        currentCol+=1;
    }
}
function nextline(){
    currentRow+=1;
    currentCol=0;
}
/*function messageBox(text,w,h){
    var buttonTest=game.add.sprite(w,h,"testButton");
    buttonTest.anchor.set(0.5,0.5);
    buttonTest.inputEnabled=true;
    buttonTest.events.onInputDown.add(function () {
        //if exists
        if (this.msgBox) {
            this.msgBox.destroy();
        }
        //make a group to hold all the elements
        var msgBox = game.add.group();
        //make the back of the message box
        var back = game.add.sprite(0, 0, "boxBack");
        //make the close button
        var closeButton = game.add.sprite(0, 0, "closeButton");
        //make a text field
        var text1 = game.add.text(0, 0, text);
        //set the textfeild to wrap if the text is too long
        text1.wordWrap = true;
        //make the width of the wrap 90% of the width
        //of the message box
        text1.wordWrapWidth = w * .9;
        //
        //
        //
        //add the elements to the group
        msgBox.add(back);
        msgBox.add(closeButton);
        msgBox.add(text1);
        //
        //set the close button
        //in the center horizontally
        //and near the bottom of the box vertically
        closeButton.x = w / 2 - closeButton.width / 2;
        closeButton.y = h - closeButton.height;
        //enable the button for input
        closeButton.inputEnabled = true;
        //add a listener to destroy the box when the button is pressed
        closeButton.events.onInputDown.add(function(){
            this.msgBox.destroy();
        }, this);
        //
        //
        //set the message box in the center of the screen
        msgBox.x = game.width / 2 - msgBox.width / 2;
        msgBox.y = game.height / 2 - msgBox.height / 2;
        //
        //set the text in the middle of the message box
        text1.x = w / 2 - text1.width / 2;
        text1.y = h / 2 - text1.height / 2;
        //make a state reference to the messsage box
        this.msgBox = msgBox;

    },this);
}*/
