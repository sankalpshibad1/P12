var garden,rabbit;
var apple, orangeL, redL;
var gardenImg,rabbitImg;
var appleImg, orangeImg, redImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
  
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX;


  drawSprites();
}

function createApples(){
  
    apple = createSprite(random(50,350),40,10,10);
    apple.velocityX = 3;
    apple.addImage(appleImg);
    apple.lifetime = 150;
    apple.scale = 0.07;
}

function createOrange(){

    orangeL = createSprite(random(50,350),40,10,10);
    orangeL.velocityX = 3;
    orangeL.addImage(orangeImg);
    orangeL.lifetime = 150;
    orangeL.scale = 0.08;
    
    
}

function createRed(){

  redL = createSprite(random(50,350),40,10,10);
  redL.velocityX = 3;
  redL.addImage(redImg);
  redL.lifetime = 150;
  redL.scale = 0.06;
  
  
}