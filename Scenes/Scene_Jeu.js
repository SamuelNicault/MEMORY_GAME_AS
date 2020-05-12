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
    this.load.image('carte','assets/cardBack_green5.png');
    this.load.image('back','assets/back.jpg');
  }//End preload

  create(){
    this.add.image(0,0,'back').setOrigin(0,0);

    this.button=this.add.sprite(150, 100,'valetN'); //à remplacer par la mniature de votre image
    this.button.setAlpha(0);

    this.pass=this.add.sprite(150, 100,'carte');
    this.pass.setInteractive();
    this.pass.alwaysEnabled = true;


    this.pass.on('pointerover',() => {
      this.button.setAlpha(1);
      this.pass.setAlpha(0);
    })

    this.pass.on('pointerout',() => {
      this.pass.setAlpha(1);
      this.button.setAlpha(0);
    });
  }//End create

  update() {
  }//End update

}//End prog
