class Deal{
    constructor(){
        this.deal=createButton("Deal");
        this.noDeal=createButton("No Deal")
        this.show=createElement("h2")
        this.greeting=createElement("h3")
        this.formEnd=createButton("Resume")
    }
     display(){
        var avg=count/ask;
        background("red");
    this.show.html("this is your avg: " + avg);
    this.show.position(displayWidth/2 - 330, displayHeight/2-295);
    this.deal.position(displayWidth/2 - 30, displayHeight/2-195);
    this.noDeal.position(displayWidth/2 - 30, displayHeight/2-95)
    game.hideMainButtons();
    this.noDeal.mousePressed(()=>{
        this.show.hide();
        this.greeting.html("Thank You for Participating " + playerName);
        this.greeting.position(displayWidth/2-150,displayHeight/2-150)
        thankYou.play();
    });
    this.deal.mousePressed(()=>{
        this.greeting.html("All The Best");
        this.greeting.position(displayWidth/2-150,displayHeight/2-150)
        this.formEnd.position( displayWidth-300,displayHeight/2+100)
        
        });

        this.formEnd.mousePressed(()=>{
            game.showMainButtons();
             
             
        })
    
    }
}