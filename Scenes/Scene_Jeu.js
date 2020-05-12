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
    this.load.image('reineR2','assets/cardHeartsQ.png');
    this.load.image('carte','assets/cardBack_green5.png');
    this.load.image('back','assets/back.jpg');
  }//End preload


  create(){

    this.add.image(0,0,'back').setOrigin(0,0);

    this.button=this.add.sprite(70, 200,'valetN'); //à remplacer par la mniature de votre image
    this.button.setAlpha(0);
    this.button.valeur=0;
    this.button2=this.add.sprite(210, 200,'valetN2'); //à remplacer par la mniature de votre image
    this.button2.setAlpha(0);
    this.button2.valeur=0;
    this.button3=this.add.sprite(340, 200,'reineN2'); //à remplacer par la mniature de votre image
    this.button3.setAlpha(0);
    this.button3.valeur=0;
    this.button4=this.add.sprite(470, 200,'roiN'); //à remplacer par la mniature de votre image
    this.button4.setAlpha(0);
    this.button4.valeur=0;
    this.button5=this.add.sprite(600, 200,'reineN2'); //à remplacer par la mniature de votre image
    this.button5.setAlpha(0);
    this.button5.valeur=0;
    this.button6=this.add.sprite(730, 200,'roiN2'); //à remplacer par la mniature de votre image
    this.button6.setAlpha(0);
    this.button6.valeur=0;

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
      this.button.valeur==1;
      this.pass.setAlpha(0);
      if(this.button2.valeur==0){
        this.timedEvent = this.time.delayedCall(5000, passReac, [], this);
      }
    })

    function passReac(){
      this.pass.setAlpha(1);
      this.button.setAlpha(0);
    }

    this.pass2.on('pointerdown',() => {
      this.button2.valeur = 1;
      this.button2.setAlpha(1);
      this.pass2.setAlpha(0);
      if(this.button1.valeur==0){
        this.timedEvent = this.time.delayedCall(5000, passReac2, [], this);
      }
    })

    function passReac2(){
      this.pass2.setAlpha(1);
      this.button2.setAlpha(0);
    }

    this.pass3.on('pointerdown',() => {
      this.button3.valeur = 1;
      this.button3.setAlpha(1);
      this.pass3.setAlpha(0);
      if(this.button5.valeur==0){
        this.timedEvent = this.time.delayedCall(5000, passReac3, [], this);
      }
    })

    function passReac3(){
      this.pass3.setAlpha(1);
      this.button3.setAlpha(0);
    }

    this.pass4.on('pointerdown',() => {
      this.button4.valeur = 1;
      this.button4.setAlpha(1);
      this.pass4.setAlpha(0);
      if(this.button6.valeur==0){
        this.timedEvent = this.time.delayedCall(5000, passReac4, [], this);
      }
    })

   function passReac4(){
      this.pass4.setAlpha(1);
      this.button4.setAlpha(0);
    }

    this.pass5.on('pointerdown',() => {
      this.button5.valeur = 1;
      this.button5.setAlpha(1);
      this.pass5.setAlpha(0);
      if(this.button3.valeur==0){
        this.timedEvent = this.time.delayedCall(5000, passReac5, [], this);
      }
    })

    function passReac5(){
      this.pass5.setAlpha(1);
      this.button5.setAlpha(0);
    }

    this.pass6.on('pointerdown',() => {
      this.button6.valeur = 1;
      this.button6.setAlpha(1);
      this.pass6.setAlpha(0);
      if(this.button4.valeur==0){
        this.timedEvent = this.time.delayedCall(5000, passReac6, [], this);
      }
    })

    function passReac6(){
      this.pass6.setAlpha(1);
      this.button6.setAlpha(0);
    }


// Carte rouge

    this.button7=this.add.sprite(70, 400,'valetR'); //à remplacer par la mniature de votre image
    this.button7.setAlpha(0);
    this.button8=this.add.sprite(210, 400,'valetR2'); //à remplacer par la mniature de votre image
    this.button8.setAlpha(0);
    this.button9=this.add.sprite(340, 400,'reineR2'); //à remplacer par la mniature de votre image
    this.button9.setAlpha(0);
    this.button10=this.add.sprite(470, 400,'roiR'); //à remplacer par la mniature de votre image
    this.button10.setAlpha(0);
    this.button11=this.add.sprite(600, 400,'reineR2'); //à remplacer par la mniature de votre image
    this.button11.setAlpha(0);
    this.button12=this.add.sprite(730, 400,'roiR2'); //à remplacer par la mniature de votre image
    this.button12.setAlpha(0);






	this.pass7=this.add.sprite(70, 400,'carte');
    this.pass8=this.add.sprite(210, 400,'carte');
    this.pass9=this.add.sprite(340, 400,'carte');
    this.pass10=this.add.sprite(470, 400,'carte');
    this.pass11=this.add.sprite(600, 400,'carte');
    this.pass12=this.add.sprite(730, 400,'carte');
    this.pass7.setInteractive();
    this.pass7.alwaysEnabled = true;
    this.pass8.setInteractive();
    this.pass8.alwaysEnabled = true;
    this.pass9.setInteractive();
    this.pass9.alwaysEnabled = true;
    this.pass10.setInteractive();
    this.pass10.alwaysEnabled = true;
    this.pass11.setInteractive();
    this.pass11.alwaysEnabled = true;
    this.pass12.setInteractive();
    this.pass12.alwaysEnabled = true;


    this.pass7.on('pointerdown',() => {
      this.button7.setAlpha(1);
      this.pass7.setAlpha(0);
    })

    this.pass7.on('pointerup',() => {
      this.pass7.setAlpha(1);
      this.button7.setAlpha(0);
    });

    this.pass8.on('pointerdown',() => {
      this.button8.setAlpha(1);
      this.pass8.setAlpha(0);
    })

    this.pass8.on('pointerup',() => {
      this.pass8.setAlpha(1);
      this.button8.setAlpha(0);
    });

    this.pass9.on('pointerdown',() => {
      this.button9.setAlpha(1);
      this.pass9.setAlpha(0);
    })

    this.pass9.on('pointerup',() => {
      this.pass9.setAlpha(1);
      this.button9.setAlpha(0);
    });

    this.pass10.on('pointerdown',() => {
      this.button10.setAlpha(1);
      this.pass10.setAlpha(0);
    })

    this.pass10.on('pointerup',() => {
      this.pass10.setAlpha(1);
      this.button10.setAlpha(0);
    });

    this.pass11.on('pointerdown',() => {
      this.button11.setAlpha(1);
      this.pass11.setAlpha(0);
    })

    this.pass11.on('pointerup',() => {
      this.pass11.setAlpha(1);
      this.button11.setAlpha(0);
    });

    this.pass12.on('pointerdown',() => {
      this.button12.setAlpha(1);
      this.pass12.setAlpha(0);
    })

    this.pass12.on('pointerup',() => {
      this.pass12.setAlpha(1);
      this.button12.setAlpha(0);
    });

  }//End create

  update() {
  }//End update

}//End prog
