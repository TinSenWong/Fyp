
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.2 (Phaser v2.6.2)


/**
 * breakWallGame.
 */
function breakWallGame() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var breakWallGame_proto = Object.create(Phaser.State.prototype);
breakWallGame.prototype = breakWallGame_proto;
breakWallGame.prototype.constructor = breakWallGame;

breakWallGame.prototype.init = function () {
	
};

breakWallGame.prototype.preload = function () {
	
	this.load.pack('game', 'assets/pack.json');
	this.load.pack('maze', 'assets/pack.json');
	playerInput = this.add.group();
	weaknessGroup = game.add.group();
	hideGrid(true);
	toolbox = '<xml id="toolbox" style="display: none">';
	toolbox += '  <block type="input"></block>';
	toolbox += '</xml>';
	changeToolbox(toolbox,20);
	limitTime=3;
	
};

breakWallGame.prototype.create = function () {
	
	this.playerInputMask = game.add.graphics();
	this.playerInputMask.inputEnabled=true;
	this.playerInputMask.beginFill(0x7FFF00);
	this.playerInputMask.drawRect( 0,400,1000, 400 );
	this.playerInputMask.endFill();
	this.WeaknessOutputMask = game.add.graphics();
	this.WeaknessOutputMask.inputEnabled=true;
	this.WeaknessOutputMask.beginFill(0x98F5FF);
	this.WeaknessOutputMask.drawRect(0,0,1000, 400);
	this.WeaknessOutputMask.endFill();
	addweaknessGroup(randonWeakness(3));
	
	var _worngTime = this.add.text(1000.0, 50.0, 'Worng    :0', {"font":"bold 28px Arial"});
	
	var _limitTime = this.add.text(1002.0, 113.0, "Attempts :" + limitTime , {"font":"bold 28px Arial"});
	
	
	
	// fields
	
	this.fWorngTime = _worngTime;
	this.fLimitTime = _limitTime;
	
};

/* --- end generated code --- */
breakWallGame.prototype.update = function () {
	if (correct){
		messageBox("You Win!",300,200),this;
		correct=false;
	}
	if (checkInput){
		checkInput = false;
		var count=0;
		if (playerInput != null){
			if (playerInput.length==weaknessGroup.length){
				for (i = 0;i<playerInput.children.length;i++){
					//alert(playerInput.length+":"+weaknessGroup.length);
					if (playerInput.children[i].frameName==weaknessGroup.children[i].frameName){
						count+=1;
					}else{
						continue;
					}
				}
			}
			if (count==weaknessGroup.children.length){
				correct = true;
			}else{
				this.fWorngTime.setText("Worng    :" + ++worngTime );
				
				this.fLimitTime.setText("Attempts :" + --limitTime );
			}
		}
		
	}

};
breakWallGame.prototype.render = function () {
	this.game.debug.inputInfo(32, 32);
};

function generateElement(element){
	elements[elements.length] = element;
}
function resetElement(){
	if (playerInput!=null){
	playerInput.destroy();
	playerInput = game.add.group();
	playerInput.x = 24;
	playerInput.y = 450;
	}
	elements = new Array();
}

function addPlayerInputList(element){
	if (playerInput.children.length==0){
		firstElement = playerInput.createMultiple(1,'Attributes',element,true);
	}else{
		playerInput.createMultiple(1,'Attributes',element,true);
	}
    if ((playerInput.children.length) % 10 == 0 && (playerInput.children.length) != 0){
    	playerInput.y-=405;
    }
    //playerInput.align(1, 0, 0, 90);
    playerInput.align(90, 50, 90, 0);
    playerInput.scale.set(0.5);
    return playerInput;
}
function addweaknessGroup(weakness){
	weaknessGroup.x = 24;
	weaknessGroup.y = 50;
	for(i=0;i<weakness.length;i++){
		weaknessGroup.createMultiple(1,'Attributes',weakness[i],true);
		if ((weakness.length) % 10 == 0 && (weakness.length) != 0){
	    	weaknessGroup.x-=400;
	    }
		weaknessGroup.align(90, 50, 90, 0);
		weaknessGroup.scale.set(0.5);
	}
	game.world.bringToTop(weaknessGroup);
    return weaknessGroup;
}

function scrollByArrow(y) {
	
    if(playerInput.alpha>0.3){
    	playerInput.forEach(function(i) {
            i.y+=y/(playerInput.children.length/10);
        }, this);
    }
}
function scrollWeaknessByArrow(y) {
	weakness.forEach(function(item,idx,array){
        if(item.alpha>0.3){
        	item.forEach(function(i) {
                i.y+=y/(array.length/10);
            }, this);
        }
   });
}
function scroll() { 
        if(playerInput.alpha>0.3){
        	playerInput.forEach(function(i,idx,array) {
            	if (array.length >=10){
            		i.y+=game.input.mouse.wheelDelta*9/(Math.floor(playerInput.children.length)/10);
            	}else{
            		i.y+=game.input.mouse.wheelDelta*9;
            	}
            }, this);
        }

}

function randonWeakness(number){
	var weakness =[];
	for (i=0;i<number;i++){
		weakness[i] = Math.floor(Math.random()*5)+1;
	}
	return weakness;
}
// -- user code here --
