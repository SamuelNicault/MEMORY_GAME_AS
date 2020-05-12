class SceneJeu extends Phaser.Scene {
    constructor() {
        super("Jeu");
    }

  init(){
  }//End init

  preload(){
    this.load.image('valetN','assets/monde/cardClubsJ.png');
    this.load.image('valetN2','assets/monde/cardSpadesJ.png');
    this.load.image('roiN','assets/monde/cardClubsK.png');
    this.load.image('roiN2','assets/monde/cardSpadesK.png');
    this.load.image('reineN','assets/monde/cardClubsQ.png');
    this.load.image('reineN2','assets/monde/cardSpadesQ.png');
    this.load.image('valetR','assets/monde/cardDiamondsJ.png');
    this.load.image('valetR2','assets/monde/cardHeartsJ.png');
    this.load.image('roiR','assets/monde/cardDiamondsK.png');
    this.load.image('roiR2','assets/monde/cardHeartsK.png');
    this.load.image('reineR','assets/monde/cardDiamondsQ.png');
    this.load.image('reineN2','assets/monde/cardHeartsQ.png');
  }//End preload

  create(){
  }//End create

  update() {
  }//End update

}//End prog
