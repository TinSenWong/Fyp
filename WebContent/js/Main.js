var game1Pass = false;
window.onload = function() {
	var game = new Phaser.Game(1200, 800, Phaser.AUTO);

	// Add the States your game has.
	// game.state.add("Boot", Boot);
	// game.state.add("Menu", Menu);
	// game.state.add("Preload", Preload);
	
	game.state.add("Level", Level);

	game.state.start("Level");
	
	Phaser.Device.whenReady(function () {
		game.plugins.add(PhaserInput.Plugin);
		game.plugins.add(PhaserNineSlice.Plugin);
		game.plugins.add(Phaser.Plugin.KineticScrolling);
	});
	
	
};
