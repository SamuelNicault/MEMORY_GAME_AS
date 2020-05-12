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

    this.button=this.add.sprite(70, 200,'valetN'); //à remplacer par la mniature de votre image
    this.button.setAlpha(0);
    this.button2=this.add.sprite(210, 200,'valetN2'); //à remplacer par la mniature de votre image
    this.button2.setAlpha(0);
    this.button3=this.add.sprite(340, 200,'reineN2'); //à remplacer par la mniature de votre image
    this.button3.setAlpha(0);
    this.button4=this.add.sprite(470, 200,'roiN'); //à remplacer par la mniature de votre image
    this.button4.setAlpha(0);
    this.button5=this.add.sprite(600, 200,'reineR'); //à remplacer par la mniature de votre image
    this.button5.setAlpha(0);
    this.button6=this.add.sprite(730, 200,'roiN2'); //à remplacer par la mniature de votre image
    this.button6.setAlpha(0);

    this.pass=this.add.sprite(70, 200,'carte');
    this.pass2=this.add.sprite(210, 200,'carte');
    this.pass3=this.add.sprite(340, 200,'carte');
    this.pass4=this.add.sprite(470, 200,'carte');
    this.pass5=this.add.sprite(600, 200,'carte');
    this.pass6=this.add.sprite(730, 200,'carte');
    this.pass.setInteractive();
    this.pass.alwaysEnabled = true;
    this.pass2.setInteractive();
    this.pass2.alwaysEnabled = true;
    this.pass3.setInteractive();
    this.pass3.alwaysEnabled = true;
    this.pass4.setInteractive();
    this.pass4.alwaysEnabled = true;
    this.pass5.setInteractive();
    this.pass5.alwaysEnabled = true;
    this.pass6.setInteractive();
    this.pass6.alwaysEnabled = true;

    this.pass.on('pointerdown',() => {
      this.button.setAlpha(1);
      this.pass.setAlpha(0);
    })

    this.pass.on('pointerup',() => {
      this.pass.setAlpha(1);
      this.button.setAlpha(0);
    });

    this.pass2.on('pointerdown',() => {
      this.button2.setAlpha(1);
      this.pass2.setAlpha(0);
    })

    this.pass2.on('pointerup',() => {
      this.pass2.setAlpha(1);
      this.button2.setAlpha(0);
    });

    this.pass3.on('pointerdown',() => {
      this.button3.setAlpha(1);
      this.pass3.setAlpha(0);
    })

    this.pass3.on('pointerup',() => {
      this.pass3.setAlpha(1);
      this.button3.setAlpha(0);
    });

    this.pass4.on('pointerdown',() => {
      this.button4.setAlpha(1);
      this.pass4.setAlpha(0);
    })

    this.pass4.on('pointerup',() => {
      this.pass4.setAlpha(1);
      this.button4.setAlpha(0);
    });

    this.pass5.on('pointerdown',() => {
      this.button5.setAlpha(1);
      this.pass5.setAlpha(0);
    })

    this.pass5.on('pointerup',() => {
      this.pass5.setAlpha(1);
      this.button5.setAlpha(0);
    });

    this.pass6.on('pointerdown',() => {
      this.button6.setAlpha(1);
      this.pass6.setAlpha(0);
    })

    this.pass6.on('pointerup',() => {
      this.pass6.setAlpha(1);
      this.button6.setAlpha(0);
    });
  }//End create

  update() {
  }//End update

}//End prog
