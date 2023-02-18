var garden,rabbit;
var gardenImg,rabbitImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}



function draw() {
  background(0);
  

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  createapples();
  createorange();
  createred();
  var selectsprites=Math.round(random(1,3));

if (frameCount % 80 == 0){
  if(selectsprites==1){
  createapples();
  }
  else if (selectsprites==2){
  createorange();
  } else {
  createred();
  }
}
rabbit.x=World.mouseX;
}


function createapples (){
apple=createSprite(random(50,350),40,10,10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY=3;
apple.lifetime=150;

}
function createorange (){
  orangel=createSprite(random(50,350),40,10,10);
  orangel.addImage(orangeImg);
  orangel.scale=0.08;
  orangel.velocityY=3;
  orangel.lifetime=150;
}
function createred (){
  red=createSprite(random(50,350),40,10,10);
  red.addImage(redImg);
  red.scale=0.06;
  red.velocityY=3;
  red.lifetime=150;

}
