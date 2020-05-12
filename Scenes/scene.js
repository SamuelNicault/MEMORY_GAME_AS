var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 800,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {y: 0},
			debug: false

		}
	},

	scene: [SceneJeu]

};

var game = new Phaser.Game(config);
