
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.3 (Phaser v2.6.2)


/**
 * Level12.
 */
function Level12() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Level12_proto = Object.create(Phaser.State.prototype);
Level12.prototype = Level12_proto;
Level12.prototype.constructor = Level12;

Level12.prototype.init = function () {
	
	this.stage.backgroundColor = '#ffffff';
	
};

Level12.prototype.preload = function () {

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

Level12.prototype.create = function () {
	
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

    var _keyYellow = this.add.sprite(256.0, 352.0, 'keyYellow');
    _keyYellow.scale.setTo(0.45714285714285713, 0.45714285714285713);
    this.game.physics.arcade.enable(_keyYellow);
	
	var _treasure_chest = this.add.sprite(512.0, 352.0, 'treasure chest1', 0);
	_treasure_chest.scale.setTo(0.9142857142857143, 0.9142857142857143);
	var _treasure_chest_open = _treasure_chest.animations.add('open', [1, 2, 3, 4, 5, 6], 8, false);
	_treasure_chest_open.killOnComplete = true;
	this.game.physics.arcade.enable(_treasure_chest);
	
	var _block = this.add.group();
	
	var _base_out_atlas = this.add.sprite(224.0, 224.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(224.0, 256.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(224.0, 288.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(224.0, 384.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(256.0, 384.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(288.0, 384.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(320.0, 384.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(448.0, 384.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(416.0, 384.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(0.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(32.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(64.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(96.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(128.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(160.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(192.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(224.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(256.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(288.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(320.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(0.0, 32.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(352.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(384.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(416.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(448.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(448.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(480.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(512.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(544.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(576.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(608.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(640.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(672.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(704.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(736.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(768.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(800.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(832.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(864.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(896.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(928.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(928.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(960.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(992.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1024.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1056.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1088.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1120.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1152.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1184.0, 0.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1184.0, 96.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1184.0, 224.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1184.0, 192.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1184.0, 160.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1184.0, 128.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1184.0, 64.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1184.0, 32.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1184.0, 32.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1184.0, 256.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1184.0, 352.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1184.0, 480.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1184.0, 448.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1184.0, 416.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1184.0, 384.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1184.0, 320.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1184.0, 288.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1184.0, 288.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(0.0, 96.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(0.0, 192.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(0.0, 320.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(0.0, 288.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(0.0, 256.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(0.0, 224.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(0.0, 160.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(0.0, 128.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(0.0, 128.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(0.0, 352.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(0.0, 448.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(0.0, 576.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(0.0, 544.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(0.0, 512.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(0.0, 480.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(0.0, 416.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(0.0, 384.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(0.0, 384.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(0.0, 608.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(0.0, 704.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(32.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(0.0, 64.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(0.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(0.0, 736.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(0.0, 672.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(0.0, 640.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(0.0, 640.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(64.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(96.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(128.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(160.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(192.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(224.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(256.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(288.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(320.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(352.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(384.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(416.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(448.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(480.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(512.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(512.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(544.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(576.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(608.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(640.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(672.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(704.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(736.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(768.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(800.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(832.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(864.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(896.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(928.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(960.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(992.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(992.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1024.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1056.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1088.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1120.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1152.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1184.0, 768.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1184.0, 736.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1184.0, 704.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1184.0, 544.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1184.0, 672.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1184.0, 640.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1184.0, 608.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1184.0, 576.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(256.0, 224.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(288.0, 224.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(352.0, 224.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(384.0, 224.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(416.0, 224.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(1184.0, 512.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(320.0, 224.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(544.0, 256.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(224.0, 320.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(352.0, 384.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(480.0, 224.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(512.0, 224.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(544.0, 288.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(544.0, 320.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(384.0, 384.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(544.0, 320.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(448.0, 224.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(544.0, 224.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(224.0, 352.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(480.0, 384.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(512.0, 384.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(544.0, 384.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(544.0, 352.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(512.0, 320.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(480.0, 320.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
	var _base_out_atlas = this.add.sprite(480.0, 256.0, 'base_out_atlas', 234, _block);
	this.game.physics.arcade.enable(_base_out_atlas);
	
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
	
	var _HPGroup = this.add.group();
	
	var _hp3 = this.add.sprite(37.0, 37.0, 'hp heart', 0, _HPGroup);
	_hp3.scale.setTo(2.1492804711165077, 2.1492807122751274);
	_hp3.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 60, false);
	_hp3.animations.add('heal', [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 60, false);
	
	var _hp2 = this.add.sprite(128.0, 32.0, 'hp heart', 0, _HPGroup);
	_hp2.scale.setTo(2.1492804711165077, 2.1492807122751274);
	_hp2.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 60, false);
	_hp2.animations.add('heal', [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 60, false);
	
	var _hp1 = this.add.sprite(224.0, 32.0, 'hp heart', 0, _HPGroup);
	_hp1.scale.setTo(2.1492804711165077, 2.1492807122751274);
	_hp1.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 60, false);
	_hp1.animations.add('heal', [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 60, false);
	
	var _spike = this.add.group();
	_spike.position.setTo(-128.0, 192.0);
	
	var _base_out_atlas4 = this.add.sprite(416.0, 160.0, 'base_out_atlas', 258, _spike);
	this.game.physics.arcade.enable(_base_out_atlas4);
	
	var _base_out_atlas4 = this.add.sprite(384.0, 128.0, 'base_out_atlas', 258, _spike);
	this.game.physics.arcade.enable(_base_out_atlas4);
	
	var _hearts = this.add.group();
	_hearts.position.setTo(-128.0, 192.0);
	
	var _heart = this.add.sprite(640.0, 96.0, 'heart', null, _hearts);
	_heart.scale.setTo(0.4047615829565869, 0.4047615829565869);
	this.game.physics.arcade.enable(_heart);
	
	var _MonsterGroup = this.add.group();
	
	var _monster = this.add.sprite(480.0, 352.0, 'monster', 'sprite1',_MonsterGroup);
	_monster.name="monster"
	_monster.scale.setTo(0.64, 0.64);
	var _monster_Auto = _monster.animations.add('Auto', ['sprite1', 'sprite2', 'sprite6'], 2, true);
	_monster_Auto.play();
	this.game.physics.arcade.enable(_monster);
	
	var _monster1 = this.add.sprite(480.0, 288.0, 'monster', 'sprite1',_MonsterGroup);
	_monster1.name="monster1"
	_monster1.scale.setTo(0.64, 0.64);
	var _monster1_Auto = _monster1.animations.add('Auto', ['sprite1', 'sprite2', 'sprite6'], 2, true);
	_monster1_Auto.play();
	
	this.game.physics.arcade.enable(_monster1);
	
	
	
	// fields
	
	this.fMidLayer = _MidLayer;
	this.fMidLayer_layer = _MidLayer_layer;
	this.fKeyYellow = _keyYellow;
	this.fTreasure_chest = _treasure_chest;
	this.fBlock = _block;
	this.fPlayer = _player;
	this.fHPGroup = _HPGroup;
	this.fSpike = _spike;
	this.fHearts = _hearts;
	this.fMonsterGroup = _MonsterGroup;
	this.fMonster = _monster;
	this.fMonster1 = _monster1;
	//this.camera.follow(this.fPlayer);
	
	if (gamePass){
        hp = finnishGameHP;
        for (i= 3-finnishGameHP-1; i>=0;i--){
            this.fHPGroup.children[i].frame = 15;
        }
        if (key){
            getKey.call(this);

        }
	}
	for (i = 0; i<dieList.length;i++){
		for (j = 0; j<this.fMonsterGroup.children.length;j++){
			if (dieList[i] == this.fMonsterGroup.children[j].name){
				this.fPlayer.x = playerX;
				this.fPlayer.y = playerY;
				this.fMonsterGroup.children[j].visible = false;
			}
		}
	}
	this.cursors = this.input.keyboard.createCursorKeys();
	this.fPlayer.body.collideWorldBounds=true;
	player = this.fPlayer;
	if (destroySpikeList!= null){
        for (i = 0;i < destroySpikeList.length;i++){
            this.fSpike.children[destroySpikeList[i]].destroy();
        }
    }
    if (destroyHPList!= null){
        for (i = 0;i < destroyHPList.length;i++){
            this.fHearts.children[destroyHPList[i]].destroy();
        }
    }

};

/* --- end generated code --- */
Level12.prototype.initScene = function () {
    
};
Level12.prototype.update = function () {
	this.fPlayer.body.velocity.set(0);
	for (i = 0;i < this.fSpike.children.length;i++){
        this.physics.arcade.collide(this.fPlayer,this.fSpike.children[i], function(){
            lostheartHandler(this);
            this.fSpike.children[i].destroy();
            destroySpikeList.push(i);
        }, null, this);

    }

    for (i = 0;i < this.fHearts.children.length;i++){
        this.physics.arcade.collide(this.fPlayer,this.fHearts.children[i], collisionHeal, null, this);
    }

	if (this.fKeyYellow.exists){	
		this.physics.arcade.collide(this.fPlayer,this.fKeyYellow, getKey, null, this);
	}

	for (i = 0;i < this.fMonsterGroup.children.length;i++){
		if (this.fMonsterGroup.children[i].visible){
			this.physics.arcade.collide(this.fPlayer, this.fMonsterGroup.children[i],function (){
				playerX = this.fMonsterGroup.children[i].x;
				playerY = this.fMonsterGroup.children[i].y-32;
				currentMonster = this.fMonsterGroup.children[i];

				game.state.add("level",this);
				gameIndex = 3;
				enemyHP=3;
				dieList.push(this.fMonsterGroup.children[i].name);
				game.state.add("newGame", breakWallGame);
				game.state.start("newGame");

			}, null, this);
		}
	}
	
	this.physics.arcade.collide(this.fPlayer,this.fTreasure_chest,IsOpenChest, null, this);
	if (testmode){
		if (this.cursors.left.isDown)
	    {
	    	// move to the left
	    	this.fPlayer.play('Left');
	    	this.fPlayer.body.velocity.x -= 150;
            this.fPlayer.play('LeftStay');
	        
	    }else if (this.cursors.right.isDown)
	    {
	    	// move to the right
	    	this.fPlayer.play('Right');
	    	this.fPlayer.body.velocity.x += 150;
            this.fPlayer.play('RightStay');
	    }
	    else  if (this.cursors.up.isDown)
	    {
	    	// move to the up
	    	this.fPlayer.play('Back');
	    	this.fPlayer.body.velocity.y -= 150;
            this.fPlayer.play('BackStay');
	    }else if (this.cursors.down.isDown)
	    {
	    	// move to the down
	    	this.fPlayer.play('Front');
	    	this.fPlayer.body.velocity.y += 150;
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
		}else if (goToTheRight){
			playerX = this.fPlayer.x;
			goToTheRight=false;
			goRight = true;
		}else if (goToTheUp){
			playerY = this.fPlayer.y;
			goToTheUp=false;
			goUp = true;
		}else if (goToTheDown){
			playerY = this.fPlayer.y;
			goToTheDown=false;
			goDown = true;
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
			if (tween!=null){
                try {
                    tween.pause();
                } catch (err) {
                }
			}
			
			this.fPlayer.x =  Math.round(this.fPlayer.x / 32)*32;
			this.fPlayer.y =  Math.round(this.fPlayer.y / 32)*32;
		},null,this);
		
	if (goLeft){// move to the left

		goLeft=false;
		tween = this.add.tween(this.fPlayer).to({ x: this.fPlayer.x-32 }, 200, Phaser.Easing.Quadratic.InOut, true);
		tween.onStart.add(function(){this.fPlayer.play('Left');},this);
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
Level12.prototype.render = function () {
	//this.game.debug.bodyInfo(this.fPlayer,32, 150);
	//this.game.debug.body(this.fPlayer);
};
function resetPlayerXY(){
	//var remainder = this.fPlayer.x - Math.floor(this.fPlayer.x);

	
}

function checkOverlap(spriteA, spriteB) {
 
    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();              
 
    return Phaser.Rectangle.intersects(boundsA, boundsB);
 
}
 
// -- user code here --
var dieList = [];
var that;
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