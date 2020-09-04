class Form{
    constructor(){
        this.input=createInput("Name");
        this.btplay=createButton("Play");
        this.btLetsStart=createButton("Let's Start");
        this.title=createElement("h1");
        this.greeting=createElement("h2");
        this.greeting2=createElement("h2");
        this.greeting3=createElement("h2");
        
    }

    hide(){
        this.greeting.hide();
        this.greeting2.hide();
        this.greeting3.hide();
        this.btplay.hide();
        this.btLetsStart.hide();
        this.input.hide();
        this.title.hide();
    }
    
      display(){
        this.title.html("Deal Or No Deal");
        this.title.position(displayWidth/2 - 90, 0);
        background(formBg);
        this.input.position(displayWidth/2 - 60 , displayHeight/2 - 80);
        this.btplay.position(displayWidth/2 + 10, displayHeight/2);
        this.btLetsStart.hide();

        this.btplay.mousePressed(()=>{
            this.input.hide();
            this.btplay.hide();
            this.btLetsStart.show();
            this.btLetsStart.position(displayWidth/2 + 150, displayHeight/2+90);
            playerName = this.input.value();
            this.greeting.html("Hello " + playerName )
            this.greeting.position(displayWidth/2 - 80, displayHeight/4);
            this.greeting2.html( "Your Game Starts in Few Seconds" )
            this.greeting2.position(displayWidth/2 - 170, displayHeight/4+65);
            this.greeting3.html( "Till Then Rack Your Brains to be Victorious" )
            this.greeting3.position(displayWidth/2 - 170, displayHeight/4+95);
            // this.btLetsStart.attribute('disabled','');
            // gameState=PLAY;
        });
        this.btLetsStart.mousePressed(()=>{
            gameState=PLAY
            playCounter=1
        });
      }
}