
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
	
};

breakWallGame.prototype.create = function () {
	
	this.playerInputMask = game.add.graphics();
	this.playerInputMask.inputEnabled=true;
	this.playerInputMask.beginFill(0xF6F641);
	this.playerInputMask.drawRect( 100,300,900, 300 );
	this.playerInputMask.endFill();
	this.WeaknessOutputMask = game.add.graphics();
	this.WeaknessOutputMask.inputEnabled=true;
	this.WeaknessOutputMask.beginFill(0x98F5FF);
	this.WeaknessOutputMask.drawRect(100,0,900, 300);
	this.WeaknessOutputMask.endFill();
	this.heartArea = game.add.graphics();
	this.heartArea.beginFill(0xF6ADF3);
	this.heartArea.drawRect( 0,0,100,600 );
	this.animeArea = game.add.graphics();
	this.animeArea.beginFill(0x35AC27);
	this.animeArea.drawRect( 0,600,1000,600 );
	
	var _HPGroup = this.add.group();
	_HPGroup.position.setTo(29.0, 195.0);
	
	var _hp3 = this.add.sprite(-23.0, 32.0, 'hp heart', 0, _HPGroup);
	_hp3.scale.setTo(2.1492804711165077, 2.1492807122751274);
	_hp3.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 60, false);
	
	var _hp2 = this.add.sprite(-23.0, -68.0, 'hp heart', 0, _HPGroup);
	_hp2.scale.setTo(2.1492804711165077, 2.1492807122751274);
	_hp2.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 60, false);
	
	var _hp1 = this.add.sprite(-23.0, -168.0, 'hp heart', 0, _HPGroup);
	_hp1.scale.setTo(2.1492804711165077, 2.1492807122751274);
	_hp1.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 60, false);
	
	var _misa_right = this.add.sprite(33.0, 549.0, 'atlas', 'misa-right');
	_misa_right.scale.setTo(3.4624001776418343, 3.7540000855073545);
	
	this.add.sprite(153.0, 685.0, 'magic');
	
	var _monster = this.add.sprite(991.0, 626.0, 'monster', 'sprite2');
	_monster.scale.setTo(-3.039040655493502, 3.384639910744491);
	var _monster_player = _monster.animations.add('player', ['sprite3', 'sprite4'], 2, true);
	var _monster_destroy = _monster.animations.add('destroy', ['sprite10', 'sprite11', 'sprite12', 'sprite13', 'sprite14', 'sprite9'], 6, false);
	_monster_destroy.killOnComplete = true;
	_monster_player.play();
	
	
	
	// fields
	
	this.fHPGroup = _HPGroup;
	this.fMonster = _monster;
	inGame(gameIndex);
};

/* --- end generated code --- */
breakWallGame.prototype.update = function () {
	
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
				var fireball = this.add.sprite(150.0,680.0, 'fireball', 24);
				fireball.scale.setTo(1.9674997027108243, 1.5625000174710881);
				var fireball_play = fireball.animations.add('play', [32, 33, 34, 35], 10, true);
				fireball_play.play();
				if (--enemyHP == 0){
					tween = this.add.tween(fireball).to({ x: 800, y: 680}, 1000, "Linear", true, 500);   
					tween.onComplete.add(function() {
						fireball.destroy();
						this.fMonster.play('destroy').onComplete.add(function(){
							gamePass = true;
							this.fFinishTime.setText('Enemy HP:'+ enemyHP);
                            KoMessage("貪食怪",function(){
								hideGrid(false);
								gamePass = true;
								game.state.start("level");
							}),this;
						}, this);
					},this);
					
				}else{
					tween = this.add.tween(fireball).to({ x: 800, y: 680}, 1000, "Linear", true, 500);   
					tween.onComplete.add(function() {
						fireball.destroy();
					},this);
					
					var that = this;
					setTimeout(function() {
						var style = { font: "65px Arial", fill: "#00000", align: "center" };
						var text = that.add.text(910,650, "-1", style);
					    text.anchor.set(0.5);
					    text.alpha = 0.1;  
					    hitTween = that.add.tween(text).to( { alpha: 1,y: 600 }, 1500, "Linear", true);
						hitTween.onComplete.add(function() {
							
					    	this.fFinishTime.setText('Enemy HP:'+ enemyHP);
							weaknessGroup.destroy();
							this.state.add("breakWallGame", breakWallGame);
							game.state.start("breakWallGame");
					    },that);
						}, 1300);
					
					
				}
			}else{
				this.fWorngTime.setText("Worng    :" + ++worngTime );
				
				this.fLimitTime.setText("Attempts :" + --limitTime );
				if(limitTime==0){
					messageBox(false,300,200,function(){
						game.state.add("breakWallGame", breakWallGame);
						game.state.start("breakWallGame");
				        worngTime=0;
					}),this;
				}
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
	playerInput.x = 120;
	playerInput.y = 330;
	}
	elements = new Array();
	currentRow=0;
	currentCol=0;
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
