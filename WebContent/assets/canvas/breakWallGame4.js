
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.2 (Phaser v2.6.2)


/**
 * breakWallGame4.
 */
function breakWallGame4() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var breakWallGame4_proto = Object.create(Phaser.State.prototype);
breakWallGame4.prototype = breakWallGame4_proto;
breakWallGame4.prototype.constructor = breakWallGame4;

breakWallGame4.prototype.init = function () {
	
};

breakWallGame4.prototype.preload = function () {
	
	this.load.pack('game', 'assets/pack.json');
	this.load.pack('maze', 'assets/pack.json');
	playerInput = this.add.group();
	weaknessGroup = game.add.group();
	hideGrid(true);
	toolbox = '<xml id="toolbox" style="display: none">';
	toolbox += '  <block type="input"></block>';
	toolbox += '</xml>';
	changeToolbox(toolbox,20);
	
};

breakWallGame4.prototype.create = function () {
	
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
	
	
};

/* --- end generated code --- */
breakWallGame.prototype.update = function () {
	if (correct){
		alert('true');
		correct=false;
	}

};
breakWallGame.prototype.render = function () {
	this.game.debug.inputInfo(32, 32);
};


// -- user code here --