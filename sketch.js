var jerry,tom
var tomimage1,tomimage2
var jerryimage1,jerryimage2
var bg

function preload() {
    //load the images here
    bg=loadImage("garden.png")
    tomimage1=loadAnimation("cat1.png")
    tomimage2=loadAnimation("cat2.png","cat3.png")
    tomimage3=loadAnimation("cat4.png")
    
    jerryimage1=loadAnimation("mouse1.png")
    jerryimage2=loadAnimation("mouse2.png","mouse3.png")
    jerryimage3=loadAnimation("mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(870,500)
jerry=createSprite(200,500)
tom.addAnimation("tomsleeping",tomimage1)
jerry.addAnimation("jerrystanding",jerryimage1)
tom.scale=0.2
jerry.scale=0.15
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if (tom.x-jerry.x<tom.width/2-jerry.width/2){
    tom.velocityX=0
    tom.addAnimation("tomlastimage",tomimage3);
    tom.x=300
    tom.scale=0.2
    tom.changeAnimation("tomlastimage")
    jerry.addAnimation("jerrylastimage",jerryimage3)
    jerry.scale=0.15
    jerry.changeAnimation("jerrylastimage")
}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
tom.velocityX=-3;
tom.addAnimation("tomrunning",tomimage2)
tom.changeAnimation("tomrunning")
jerry.addAnimation("jerryteasing",jerryimage2)
jerry.changeAnimation("jerryteasing")

}
