var game;
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
function selectLevel(){
	if (game != null) {
        game.destroy();
    }
	game = new Phaser.Game(document.body.offsetWidth,document.body.offsetHeight, Phaser.Auto, 'phaser');

	game.state.add("PlayGame", playGame);
    game.state.start("PlayGame");
	Phaser.Device.whenReady(function () {
		game.plugins.add(PhaserInput.Plugin);
		game.plugins.add(PhaserNineSlice.Plugin);
		game.plugins.add(Phaser.Plugin.KineticScrolling);
	});
	var context = new AudioContext();
};

