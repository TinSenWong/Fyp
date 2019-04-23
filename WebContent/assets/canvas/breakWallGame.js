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
	
	MonsterGame = true;
	checkInput = false;
	this.showEnemyHP = enemyHP;
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
	//var _wrongTime = this.add.text(1000.0, 50.0, 'Wrong:'+wrongTime, {"font":"bold 28px Arial"});
	//var _limitTime = this.add.text(1002.0, 113.0, "Attempts :" + limitTime, {"font":"bold 28px Arial"});
	//this.fWrongTime = _wrongTime;
	//this.fLimitTime = _limitTime;
	var _finishTime = this.add.text(960.0, 769.0, this.showEnemyHP+'/'+enemyHP, {"font":"bold 28px Arial"});
	
	
	this.fFinishTime = _finishTime;	
	
	var _HPGroup = this.add.group();
	_HPGroup.position.setTo(29.0, 195.0);
	
	var _hp3 = this.add.sprite(-23.0, -168.0, 'hp heart', 0, _HPGroup);
	_hp3.scale.setTo(2.1492804711165077, 2.1492807122751274);
	_hp3.animations.add('play', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 60, false);
	
	var _hp2 = this.add.sprite(-23.0, -68.0, 'hp heart', 0, _HPGroup);
	_hp2.scale.setTo(2.1492804711165077, 2.1492807122751274);
	_hp2.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 60, false);
	
	var _hp1 = this.add.sprite(-23.0, 32.0, 'hp heart', 0, _HPGroup);
	_hp1.scale.setTo(2.1492804711165077, 2.1492807122751274);
	_hp1.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 60, false);
	
	var _curtains = this.add.sprite(21.0, -12.0, 'curtains', 0);
	_curtains.scale.setTo(6.192168460166832, 3.7934940235158177);
	var _curtains_open = _curtains.animations.add('open', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 39], 20, false);
	_curtains.animations.add('close', [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], 20, false);
	_curtains.animations.add('both', [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 39], 20, false);
	_curtains_open.play();
	
	var _misa_right = this.add.sprite(33.0, 549.0, 'atlas', 'misa-right');
	_misa_right.scale.setTo(3.4624001776418343, 3.7540000855073545);
	
	this.add.sprite(153.0, 685.0, 'magic');
	
	var _monster = this.add.sprite(991.0, 626.0, 'monster', 'sprite2');
	_monster.scale.setTo(-3.039040655493502, 3.384639910744491);
	var _monster_player = _monster.animations.add('player', ['sprite3', 'sprite4'], 2, true);
	var _monster_destroy = _monster.animations.add('destroy', ['sprite10', 'sprite11', 'sprite12', 'sprite13', 'sprite14', 'sprite9'], 6, false);
	_monster_destroy.killOnComplete = true;
	_monster_player.play();
	
	var _hp_bar = this.add.sprite(878.0, 769.0, 'hp_bar', 0);
	_hp_bar.scale.setTo(2.65344019870935, 2.567321806126191);
	_hp_bar.animations.add('full', [0, 1, 2, 3, 4, 5, 6], 6, false);
	var _hp_bar_destroy = _hp_bar.animations.add('destroy', [6], 6, false);
	_hp_bar_destroy.killOnComplete = true;
	
	
	
	// fields
	
	this.fHPGroup = _HPGroup;
	this.fCurtains = _curtains;
	this.fMonster = _monster;
	this.fHp_bar = _hp_bar;
	inGame(gameIndex);
	for (i= 3-hp-1; i>=0;i--){
		this.fHPGroup.children[i].frame = 15;
	}
	
};

/* --- end generated code --- */
breakWallGame.prototype.update = function () {
	this.fCurtains.bringToTop();
    MonsterGame = false;
    if (checkInput) {
        checkInput = false;
        var count = 0;
        if (playerInput != null || playerInput.length != 0) {

            if (playerInput.length == weaknessGroup.length) {
                //every row
                for (i = 0; i < weaknessGroupList.length; i++) {

                    //every column
                    for (j = 0; j < weaknessGroupList[0].length; j++) {
                    	try {
                            if (weaknessGroupList[i][j] == null && playerInputList[i][j] == null) {

                            } else if (weaknessGroupList[i][j].frameName == playerInputList[i][j].frameName) {
                                count += 1;
                            }
                        }catch{}
                    }
                }
            }
            if (count == weaknessGroup.children.length) {
                var fireball = this.add.sprite(150.0, 680.0, 'fireball', 24);
                fireball.scale.setTo(1.9674997027108243, 1.5625000174710881);
                var fireball_play = fireball.animations.add('play', [32, 33, 34, 35], 10, true);
                fireball_play.play();

                tween = this.add.tween(fireball).to({x: 800, y: 680}, 1000, "Linear", true, 500);
                tween.onComplete.add(function () {
                    fireball.destroy();
                    this.showEnemyHP--;
                    that.fFinishTime.setText(this.showEnemyHP+'/'+enemyHP);
                    if (that.showEnemyHP == 0) {
                		that.fHp_bar.animations.play('destroy');
                	} else {
                		var _hp_bar_drophp = that.fHp_bar.animations.add('-hp', [that.fHp_bar.frame++, that.fHp_bar.frame++, that.fHp_bar.frame++], 6, false);
                    	_hp_bar_drophp.play();
                	}
                }, this);

                that = this;
                
                setTimeout(function () {
                	
                    var style = {font: "65px Arial", fill: "#00000", align: "center"};
                    var text = that.add.text(910, 650, "-1", style);
                    text.anchor.set(0.5);
                    text.alpha = 0.1;
                    
                    hitTween = that.add.tween(text).to({alpha: 1, y: 600}, 1500, "Linear", true);
                    
                    hitTween.onComplete.add(function () {
                        if (that.showEnemyHP == 0) {
                            that.fMonster.play('destroy').onComplete.add(function () {
                                gamePass = true;

                                KoMessage("貪食怪", function () {
                                    hideGrid(false);
                                    gamePass = true;
                                    game.state.start("level");
                                }), that;
                            }, that);


                        } else {
                            this.fFinishTime.setText(this.showEnemyHP+'/'+enemyHP);
                            text.destroy();
                            this.fCurtains.play('close').onComplete.add(function(){
	                            weaknessGroup.destroy();
	                            inGame(gameIndex);
	                            this.fCurtains.play('open');
                            },this);
                        }
                        resetElement();
                    }, that);
                }, 1300);


            } else {
                var fireball = this.add.sprite(800.0, 680.0, 'fireball', 24);
                fireball.scale.setTo(1.9674997027108243, 1.5625000174710881);
                var fireball_play = fireball.animations.add('play', [0, 1, 2, 3], 10, true);
                fireball_play.play();
                tween = this.add.tween(fireball).to({x: 150, y: 680}, 1000, "Linear", true, 500);
                tween.onComplete.add(function () {
                    fireball.destroy();
                    lostheartHandler(this);
                }, this);
                --limitTime;
                ++wrongTime;
                if (limitTime == 0) {
                	 messageBox(false, 300, 200, function () {
                         inGame(gameIndex);
                         worngTime = 0;
                     }), this;
                 }
                }

            
        }

    }
};
breakWallGame.prototype.render = function () {
    //this.game.debug.inputInfo(32, 32);
};


// -- user code here --
