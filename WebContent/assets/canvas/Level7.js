
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.2 (Phaser v2.6.2)


/**
 * Level7.
 */
function Level7() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Level7_proto = Object.create(Phaser.State.prototype);
Level7.prototype = Level7_proto;
Level7.prototype.constructor = Level7;

Level7.prototype.init = function () {
	
	this.stage.backgroundColor = '#ffffff';
	
};

Level7.prototype.preload = function () {

    toolbox = '<xml id="toolbox" style="display: none">';
    toolbox += ' <block type="move_right"></block>';
    toolbox += '<block type="move_left"></block>';
    toolbox += '<block type="move_up"></block>';
    toolbox += '<block type="move_down"></block>';
    toolbox += '<block type="controls_repeat_ext">';
    toolbox += '<value name="TIMES">';
    toolbox += '    <shadow type="math_number">';
    toolbox += '        <field name="NUM">10</field>';
    toolbox += '   </shadow>';
    toolbox += '</value>';
    toolbox += '</block>';
    toolbox += '</xml>';
    changeToolbox(toolbox,20);

    this.load.pack('maze', 'assets/pack.json');
    this.load.pack('game', 'assets/pack.json');
};

Level7.prototype.create = function () {
	
	this.initScene();
	this.world.setBounds(0, 0, 20000, 20000);
	
	var _bottomLayer = this.add.tilemap('bottomLayer', 32, 32);
	_bottomLayer.addTilesetImage('base_out_atlas1');
	var _bottomLayer_layer = _bottomLayer.createLayer(0);
	_bottomLayer_layer.resizeWorld();
	
	var _MidLayer = this.add.tilemap('MidLayer', 32, 32);
	_MidLayer.addTilesetImage('terrain_atlas1');
	var _MidLayer_layer = _MidLayer.createLayer(0);
	_MidLayer_layer.resizeWorld();
	
	var _keyYellow = this.add.sprite(448.0, 384.0, 'keyYellow');
	_keyYellow.scale.setTo(0.45714285714285713, 0.45714285714285713);
	this.game.physics.arcade.enable(_keyYellow);
	
	var _treasure_chest = this.add.sprite(384.0, 256.0, 'treasure chest1', 0);
	_treasure_chest.scale.setTo(0.9142857142857143, 0.9142857142857143);
	var _treasure_chest_open = _treasure_chest.animations.add('open', [1, 2, 3, 4, 5, 6], 8, false);
	_treasure_chest_open.killOnComplete = true;
	this.game.physics.arcade.enable(_treasure_chest);
	_treasure_chest.body.immovable = true;
	
	var _block = this.add.group();
	
	var _base_out_atlas = this.add.sprite(224.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(160.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(128.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(192.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(96.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(64.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(32.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(0.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(480.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(416.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(384.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(448.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(352.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(320.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(288.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(256.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(736.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(672.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(640.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(704.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(608.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(576.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(544.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(512.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(992.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(928.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(896.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(960.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(864.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(832.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(800.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(768.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1152.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1120.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1088.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1056.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1024.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(224.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(160.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(128.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(192.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(96.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(64.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(32.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(0.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(480.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(416.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(384.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(448.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(352.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(320.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(288.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(256.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(736.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(672.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(640.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(704.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(608.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(576.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(544.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(512.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(992.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(928.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(896.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(960.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(864.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(832.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(800.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(768.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1152.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1120.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1088.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1056.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1024.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1184.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1184.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(0.0, 32.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(0.0, 64.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(0.0, 96.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(0.0, 128.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(0.0, 160.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(0.0, 192.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(0.0, 224.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(0.0, 256.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(0.0, 288.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(0.0, 320.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(0.0, 352.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(0.0, 384.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(0.0, 416.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(0.0, 448.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(0.0, 480.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(0.0, 512.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(0.0, 544.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(0.0, 576.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(0.0, 608.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(0.0, 640.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(0.0, 672.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(0.0, 704.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(0.0, 736.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1184.0, 32.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1184.0, 64.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1184.0, 96.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1184.0, 128.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1184.0, 160.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1184.0, 192.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1184.0, 224.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1184.0, 256.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1184.0, 288.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1184.0, 320.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1184.0, 352.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1184.0, 384.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1184.0, 416.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1184.0, 448.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1184.0, 480.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1184.0, 512.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1184.0, 544.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1184.0, 576.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1184.0, 608.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1184.0, 640.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1184.0, 672.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1184.0, 704.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(1184.0, 736.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(352.0, 256.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(480.0, 256.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(224.0, 288.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(352.0, 288.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(384.0, 288.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(416.0, 288.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(480.0, 288.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(224.0, 320.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(224.0, 224.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(256.0, 224.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(288.0, 224.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(320.0, 224.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(352.0, 224.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(384.0, 224.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(416.0, 224.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(448.0, 224.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(480.0, 224.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(224.0, 256.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(224.0, 352.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(384.0, 352.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(416.0, 352.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(448.0, 352.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(480.0, 352.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(224.0, 384.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(480.0, 384.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(224.0, 416.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(256.0, 416.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(288.0, 416.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(320.0, 416.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(352.0, 416.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(384.0, 416.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(416.0, 416.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(448.0, 416.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(480.0, 416.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _base_out_atlas = this.add.sprite(480.0, 320.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	_base_out_atlas.body.immovable = true;
	
	var _monster = this.add.sprite(384.0, 384.0, 'monster', 'sprite1');
	_monster.scale.setTo(0.64, 0.64);
	var _monster_Auto = _monster.animations.add('Auto', ['sprite1', 'sprite2', 'sprite6'], 2, true);
	_monster_Auto.play();
	this.game.physics.arcade.enable(_monster);
	
	var _player = this.add.sprite(256.0, 224.0, 'atlas', 'misa-front-walk.000');
	_player.animations.add('Back', ['misa-back-walk.000', 'misa-back-walk.001', 'misa-back-walk.002', 'misa-back-walk.003'], 6, true);
	_player.animations.add('Left', ['misa-left-walk.000', 'misa-left-walk.001', 'misa-left-walk.002', 'misa-left-walk.003'], 6, true);
	_player.animations.add('Front', ['misa-front-walk.000', 'misa-front-walk.001', 'misa-front-walk.002', 'misa-front-walk.003'], 6, true);
	_player.animations.add('Right', ['misa-right-walk.000', 'misa-right-walk.001', 'misa-right-walk.002', 'misa-right-walk.003'], 6, true);
	_player.animations.add('BackStay', ['misa-back'], 6, false);
	_player.animations.add('FrontStay', ['misa-front'], 6, false);
	_player.animations.add('LeftStay', ['misa-left'], 6, false);
	_player.animations.add('RightStay', ['misa-right'], 6, false);
	this.game.physics.arcade.enable(_player);
	_player.body.setSize(31.9999999999, 31.9999999999, 0.0, 32.0);
	
	
	
	// fields
	
	this.fMidLayer = _MidLayer;
	this.fMidLayer_layer = _MidLayer_layer;
	this.fKeyYellow = _keyYellow;
	this.fTreasure_chest = _treasure_chest;
	this.fBlock = _block;
	this.fMonster = _monster;
	this.fPlayer = _player;
	if (gamePass){
		this.fPlayer.x = playerX;
		this.fPlayer.y = playerY;
		this.fMonster.destroy();
		gamePass=false;
	}
	this.cursors = this.input.keyboard.createCursorKeys();
	this.fPlayer.body.collideWorldBounds=true;
	player = this.fPlayer;
	
};

/* --- end generated code --- */
Level7.prototype.initScene = function () {
    
};
Level7.prototype.update = function () {
	this.fPlayer.body.velocity.set(0);
	if (this.fKeyYellow.exists){	
		this.physics.arcade.collide(this.fPlayer,this.fKeyYellow, getKey, null, this);
	}
	if (!gamePass){
		this.physics.arcade.collide(this.fPlayer, this.fMonster,function (){
			playerX = this.fMonster.x;
			playerY = this.fMonster.y-32;
			game.state.add("level",this);
			game.state.add("newGame", breakWallGame);
			game.state.start("newGame");
		}, null, this);
	}
	
	this.physics.arcade.collide(this.fPlayer,this.fTreasure_chest,IsOpenChest, null, this);
	if (testmode){
		if (this.cursors.left.isDown)
	    {
	    	// move to the left
	    	this.fPlayer.play('Left');
	    	this.fPlayer.body.velocity.x -= 150;
	    	//this.fPlayer.body.x -= 32;
            this.fPlayer.play('LeftStay');
	        
	    }else if (this.cursors.right.isDown)
	    {
	    	// move to the right
	    	this.fPlayer.play('Right');
	    	this.fPlayer.body.velocity.x += 150;
	    	//this.fPlayer.body.x += 32;
            this.fPlayer.play('RightStay');
	    }
	    else  if (this.cursors.up.isDown)
	    {
	    	// move to the up
	    	this.fPlayer.play('Back');
	    	this.fPlayer.body.velocity.y -= 150;
	    	//this.fPlayer.body.y -= 32;
            this.fPlayer.play('BackStay');
	    }else if (this.cursors.down.isDown)
	    {
	    	// move to the down
	    	this.fPlayer.play('Front');
	    	this.fPlayer.body.velocity.y += 150;
	    	//this.fPlayer.body.y += 32;
            this.fPlayer.play('FrontStay');
	    }else{
	    	this.fPlayer.play(play);
	    }

	}
	// set movement value
		if (goToTheLeft){
			
			playerX = this.fPlayer.x;
			goToTheLeft=false;
			goLeft = true;
			expX = playerX - 32;
		}else if (goToTheRight){
			playerX = this.fPlayer.x;
			goToTheRight=false;
			goRight = true;
			expX = playerX + 32;
		}else if (goToTheUp){
			playerY = this.fPlayer.y;
			goToTheUp=false;
			goUp = true;
			expX = playerY - 32;
		}else if (goToTheDown){
			playerY = this.fPlayer.y;
			goToTheDown=false;
			goDown = true;
			expX = playerY + 32;
		}
		
		this.physics.arcade.collide(this.fPlayer,this.fBlock,function(){
			if (player.animations.currentAnim.name == "Left"){
				this.fPlayer.play('LeftStay');
			}else if (player.animations.currentAnim.name == "Right"){
				this.fPlayer.play('RightStay');
			}else if (player.animations.currentAnim.name == "Back"){
				this.fPlayer.play('BackStay');
			}else if (player.animations.currentAnim.name == "Front"){
				this.fPlayer.play('FrontStay');
			}
			
			this.fPlayer.x =  Math.round(this.fPlayer.x / 32)*32;
			this.fPlayer.y =  Math.round(this.fPlayer.y / 32)*32;
		},null,this);
		
	if (goLeft){// move to the left
		goLeft=false;
		tween = this.add.tween(this.fPlayer).to({ x: this.fPlayer.x-32 }, 200, Phaser.Easing.Quadratic.InOut, true);
		tween.onStart.add(function(){this.fPlayer.play('Left');});
		tween.onComplete.add(function(){
            this.fPlayer.play('LeftStay');
            this.fPlayer.x =  Math.round(this.fPlayer.x / 32)*32;
            this.fPlayer.y =  Math.round(this.fPlayer.y / 32)*32;
		},this);
    }else if (goRight)// move to the right
    {
    	goRight=false;
    	tween = this.add.tween(this.fPlayer).to({ x: this.fPlayer.x+32 }, 200, Phaser.Easing.Quadratic.InOut, true);
    	tween.onStart.add(function(){this.fPlayer.play('Right');},this);
    	tween.onComplete.add(function(){
    		this.fPlayer.play('RightStay');
            this.fPlayer.x =  Math.round(this.fPlayer.x / 32)*32;
            this.fPlayer.y =  Math.round(this.fPlayer.y / 32)*32;
        },this);
    }
    else  if (goUp)
    {
    	goUp=false;
    	tween = this.add.tween(this.fPlayer).to({ y: this.fPlayer.y-32 }, 200, Phaser.Easing.Quadratic.InOut, true);
    	tween.onStart.add(function(){this.fPlayer.play('Back');},this);
    	tween.onComplete.add(function(){
    		this.fPlayer.play('BackStay');
            this.fPlayer.x =  Math.round(this.fPlayer.x / 32)*32;
            this.fPlayer.y =  Math.round(this.fPlayer.y / 32)*32;
    	},this);
    }else if (goDown)
    {
    	goDown=false;
    	tween = this.add.tween(this.fPlayer).to({ y: this.fPlayer.y+32 }, 200, Phaser.Easing.Quadratic.InOut, true);
    	tween.onStart.add(function(){this.fPlayer.play('Front');},this);
    	tween.onComplete.add(function(){
    		this.fPlayer.play('FrontStay');
            this.fPlayer.x =  Math.round(this.fPlayer.x / 32)*32;
            this.fPlayer.y =  Math.round(this.fPlayer.y / 32)*32;
    	},this);

	    	// move to the down
	    	//this.fPlayer.body.y += 32;
    }

};
Level7.prototype.render = function () {
	//this.game.debug.bodyInfo(this.fPlayer,32, 150);
	//this.game.debug.body(this.fPlayer);
};
function resetPlayerXY(){
	//var remainder = this.fPlayer.x - Math.floor(this.fPlayer.x);

	
}

 
// -- user code here --

var tween;
var touchWall= false;
var goToTheRight = false;
var goToTheLeft = false;
var goToTheUp = false;
var goToTheDown = false;
var player;
var playerY;
var playerX;
var expX;
var expY; 
var goRight= false;
var goLeft= false;
var goUp= false;
var goDown= false;