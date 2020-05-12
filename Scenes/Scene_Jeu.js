class SceneJeu extends Phaser.Scene {
    constructor() {
        super("Jeu");
    }

  init(){
  }//End init

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
    this.load.image('back','assets/back.png');
  }//End preload

  create(){
  }//End create

  update() {
  }//End update

}//End prog
