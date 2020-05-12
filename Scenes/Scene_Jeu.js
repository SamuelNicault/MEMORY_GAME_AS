class SceneJeu extends Phaser.Scene {
    constructor() {
        super("Jeu");
    }

  init(){
    this.fin;
  }

  preload(){
    this.load.image('valetN','assets/cardClubsJ.png');
    this.load.image('valetN2','assets/cardSpadesJ.png');
    this.load.image('roiN','assets/cardClubsK.png');
    this.load.image('roiN2','assets/cardSpadesK.png');
    this.load.image('reineN','assets/cardClubsQ.png');
    this.load.image('reineN2','assets/cardSpadesQ.png');
    this.load.image('valetR','assets/cardDiamondsJ.png');
    this.load.image('valetR2','assets/cardHeartsJ.png');
    this.load.image('roiR','assets/cardDiamondsK.png');
    this.load.image('roiR2','assets/cardHeartsK.png');
    this.load.image('reineR','assets/cardDiamondsQ.png');
    this.load.image('reineN2','assets/cardHeartsQ.png');

  }

  create(){
    this.fin = this.physics.add.sprite(512,1500,'fin');
  	this.fin.body.setGravityY(-300);
  	this.timedEvent = this.time.delayedCall(33000, changeLevel, [], this);
    this.keys = this.input.keyboard.addKeys('A');

  	function changeLevel () {
  		console.log('change de level');
  		this.scene.start('Titre');
  	}
  }


  update() {

    if(this.keys.A.isDown){
			this.scene.start('Titre');
		}


    if (this.fin.y >= -1800){
        this.tweens.add({
          targets: this.fin,

          y : -6000,
          // alpha: { start: 0, to: 1 },
          // alpha: 1,
          // alpha: '+=1',
          ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
          duration: 100000,
          repeat: 0,            // -1: infinity
          yoyo: false
      });
    }
  }
}
