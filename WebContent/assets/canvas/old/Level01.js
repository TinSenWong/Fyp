
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.2 (Phaser v2.6.2)


/**
 * Level01.
 */
function Level01() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Level01_proto = Object.create(Phaser.State.prototype);
Level01.prototype = Level01_proto;
Level01.prototype.constructor = Level01;

Level01.prototype.init = function () {
	
};

Level01.prototype.preload = function () {
	
	this.load.pack('maze', 'assets/pack.json');
	this.load.pack('game', 'assets/pack.json');
	
};

Level01.prototype.create = function () {
	var _bottomLayer = this.add.tilemap('bottomLayer', 32, 32);
	_bottomLayer.addTilesetImage('base_out_atlas1');
	var _bottomLayer_layer = _bottomLayer.createLayer(0);
	_bottomLayer_layer.resizeWorld();
	
	var _BlockLayer = this.add.tilemap('BlockLayer', 32, 32);
	_BlockLayer.addTilesetImage('base_out_atlas1');
	_BlockLayer.setCollision([38,234]);
	var _BlockLayer_layer = _BlockLayer.createLayer(0);
	_BlockLayer_layer.resizeWorld();
	
	var _MidLayer = this.add.tilemap('MidLayer', 32, 32);
	_MidLayer.addTilesetImage('base_out_atlas1');
	var _MidLayer_layer = _MidLayer.createLayer(0);
	_MidLayer_layer.resizeWorld();
	
	var _spike = this.add.group();
	_spike.position.setTo(1280.0, 0.0);
	
	var _base_out_atlas4 = this.add.sprite(480.0, 128.0, 'base_out_atlas', 258, _spike);
	this.game.physics.arcade.enable(_base_out_atlas4);
	
	var _base_out_atlas4 = this.add.sprite(512.0, 160.0, 'base_out_atlas', 258, _spike);
	this.game.physics.arcade.enable(_base_out_atlas4);
	
	var _base_out_atlas4 = this.add.sprite(544.0, 160.0, 'base_out_atlas', 258, _spike);
	this.game.physics.arcade.enable(_base_out_atlas4);
	
	var _base_out_atlas4 = this.add.sprite(480.0, 192.0, 'base_out_atlas', 258, _spike);
	this.game.physics.arcade.enable(_base_out_atlas4);
	
	var _base_out_atlas4 = this.add.sprite(480.0, 160.0, 'base_out_atlas', 258, _spike);
	this.game.physics.arcade.enable(_base_out_atlas4);
	
	var _keyYellow = this.add.sprite(1856.0, 160.0, 'keyYellow');
	_keyYellow.scale.setTo(0.45714285714285713, 0.45714285714285713);
	this.game.physics.arcade.enable(_keyYellow);
	
	var _player = this.add.sprite(1536.0, 128.0, 'atlas', 'misa-front-walk.000');
	_player.animations.add('Back', ['misa-back-walk.000', 'misa-back-walk.001', 'misa-back-walk.002', 'misa-back-walk.003'], 6, true);
	_player.animations.add('Left', ['misa-left-walk.000', 'misa-left-walk.001', 'misa-left-walk.002', 'misa-left-walk.003'], 6, true);
	_player.animations.add('Front', ['misa-front-walk.000', 'misa-front-walk.001', 'misa-front-walk.002', 'misa-front-walk.003'], 6, true);
	_player.animations.add('Right', ['misa-right-walk.000', 'misa-right-walk.001', 'misa-right-walk.002', 'misa-right-walk.003'], 6, true);
	_player.animations.add('BackStay', ['misa-back'], 6, false);
	_player.animations.add('FrontStay', ['misa-front'], 6, false);
	_player.animations.add('LeftStay', ['misa-left'], 6, false);
	_player.animations.add('RightStay', ['misa-right'], 6, false);
	this.game.physics.arcade.enable(_player);
	_player.body.setSize(32.0, 32.0, 0.0, 32.0);
	
	var _HPGroup = this.add.group();
	_HPGroup.position.setTo(1248.0, -32.0);
	
	var _hp3 = this.add.sprite(224.0, 32.0, 'hp heart', 0, _HPGroup);
	_hp3.scale.setTo(2.1492804711165077, 2.1492807122751274);
	_hp3.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 60, false);
	
	var _hp2 = this.add.sprite(128.0, 32.0, 'hp heart', 0, _HPGroup);
	_hp2.scale.setTo(2.1492804711165077, 2.1492807122751274);
	_hp2.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 60, false);
	
	var _hp1 = this.add.sprite(37.0, 37.0, 'hp heart', 0, _HPGroup);
	_hp1.scale.setTo(2.1492804711165077, 2.1492807122751274);
	_hp1.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 60, false);
	
	var _treasure_chest = this.add.sprite(1728.0, 160.0, 'treasure chest1', 0);
	_treasure_chest.scale.setTo(0.9142857142857143, 0.9142857142857143);
	_treasure_chest.animations.add('open', [1, 2, 3, 4, 5, 6], 8, false);
	this.game.physics.arcade.enable(_treasure_chest);
	
	
	
	// fields
	
	this.fBottomLayer = _bottomLayer;
	this.fBottomLayer_layer = _bottomLayer_layer;
	this.fBlockLayer = _BlockLayer;
	this.fBlockLayer_layer = _BlockLayer_layer;
	this.fMidLayer = _MidLayer;
	this.fMidLayer_layer = _MidLayer_layer;
	this.fSpike = _spike;
	this.fKeyYellow = _keyYellow;
	this.fPlayer = _player;
	this.fHPGroup = _HPGroup;
	this.fTreasure_chest = _treasure_chest;
	this.cursors = this.input.keyboard.createCursorKeys();
	this.fPlayer.body.collideWorldBounds=true;
	this.camera.setPosition(1280,0);
	
};

/* --- end generated code --- */
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
Level01.prototype.render = function () {
	//this.game.debug.bodyInfo(this.fPlayer, 32, 32);
    //this.game.debug.body(this.fPlayer);

}
function getKey(){
	key = true;
	this.fKeyYellow.destroy();
}
function IsOpenChest(){
	this.fTreasure_chest.x = 1728;
	this.fTreasure_chest.y = 160;
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

Level01.prototype.update = function () {
	this.physics.arcade.collide(this.fPlayer, this.fBlockLayer_layer);
	this.fPlayer.body.velocity.set(0);
	for (i = 0;i < this.fSpike.children.length;i++){
		this.physics.arcade.collide(this.fPlayer,this.fSpike.children[i], collisionHandler, null, this);
		//if(checkOverlap(this.fPlayer,this.fSpike.children[i])){
			
		//}
	}
	this.physics.arcade.collide(this.fPlayer,this.fTreasure_chest,IsOpenChest, null, this);
	if (this.fKeyYellow.exists){
		
		this.physics.arcade.collide(this.fPlayer,this.fKeyYellow, getKey, null, this);
	}
	this.physics.arcade.collide(this.fPlayer,this.fBlockLayer_layer);

	if (testmode){
		if (this.cursors.left.isDown)
	    {
	    	// move to the left
			
	    	this.fPlayer.play('Left');
	    	this.fPlayer.body.velocity.x -= 150;
	    	//this.fPlayer.body.x -= 32;
	    	play = 'LeftStay';
	        
	    }else if (this.cursors.right.isDown)
	    {
	    	// move to the right
	    	this.fPlayer.play('Right');
	    	this.fPlayer.body.velocity.x += 150;
	    	//this.fPlayer.body.x += 32;
	    	play = 'RightStay';
	    }
	    else  if (this.cursors.up.isDown)
	    {
	    	// move to the up
	    	this.fPlayer.play('Back');
	    	this.fPlayer.body.velocity.y -= 150;
	    	//this.fPlayer.body.y -= 32;
	    	play = 'BackStay';
	    }else if (this.cursors.down.isDown)
	    {
	    	// move to the down
	    	this.fPlayer.play('Front');
	    	this.fPlayer.body.velocity.y += 150;
	    	//this.fPlayer.body.y += 32;
	    	play = 'FrontStay';
	    }else{
	    	this.fPlayer.play(play);
	    }

	}
	
	if ( goToTheLeft)
    {
    	// move to the left
		//101.05263157894632
		goToTheLeft=false;
    	//tween = this.add.tween(this.fPlayer).to( { x: this.fPlayer.body.velocity.x -= 101.05263157894632});
    	this.fPlayer.body.x -= 32;
    	play = 'LeftStay';
        
    }else if (goToTheRight)
    {
    	// move to the right
    	//tween = this.add.tween(this.fPlayer).to( { x: this.fPlayer.body.velocity.x += 101.5961552827511});
    	goToTheRight=false;
    	this.fPlayer.body.x += 32;
    	play = 'RightStay';
    }
    else  if (goToTheUp)
    {
    	// move to the up
    	//tween = this.add.tween(this.fPlayer).to( { y: this.fPlayer.body.velocity.y -= 101.5961552827511});
    	goToTheUp=false;
    	this.fPlayer.body.y -= 32;
    	play = 'BackStay';
    }else if (goToTheDown)
    {
    	// move to the down
    	//tween = this.add.tween(this.fPlayer).to( { y: this.fPlayer.body.velocity.y += 101.5961552827511});
    	goToTheDown=false;
    	this.fPlayer.body.y += 32;
    	play = 'FrontStay';
    }

};
// -- user code here --
var hp = 3;