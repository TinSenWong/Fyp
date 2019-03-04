//main
var game;
var maxBlock;
var toolbox;
// colors is actually the array of level pages
var colors = ["0xffffff", "0xff0000", "0x00ff00", "0x0000ff", "0xffff00"];
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
function selectLevel(){
	if (game != null) {
        game.destroy();
    }
	game = new Phaser.Game(screenWidth,screenHeight, Phaser.Auto, 'phaser');

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
			this.state.add("game1", Level01);
			this.state.start("game1");
		}else{
			this.state.add("playGame", playGame);
			this.state.start("playGame");
		}
		
	}
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


function resize(){
    $("head").append('<script src="assets/canvas/index.js"></script>');

}





