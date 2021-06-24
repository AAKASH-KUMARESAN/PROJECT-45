var canvas, backgroundImage;
var biker,shop,road
var score


function preload() {
road = loadImage("images/track.jpg");
biker = loadImage("images/BIKER.png");
shop1 = loadImage("images/shop.png");
shop2 = loadImage("images/shop2.png");
}














function setup() {
  canvas = createCanvas(displayWidth , displayHeight);    
  track1 = createSprite(width/2,height/2)
  track1.scale = 1.1
  track1.velocityY = 2
  track1.addImage("road",road)
  bikerracer = createSprite(width/2,height - 200)
  bikerracer.addImage("biker",biker)
  bikerracer.scale = 0.2

}

if(shop1.isTouching(bikerracer)){
 bikerracer.velocityX = 0
 bikerracer.velocityY = 0
  
 text("Score: "+ score, 500,50);
 score = score + Math.round(getFrameRate()/120);

}

function draw() {
  background("black");  
  spawnShops()
 
  drawSprites();
}

function spawnShops(){
if(frameCount % 120  === 0){
  var shop = createSprite(200,0)
  shop.addImage("shop",shop1)
  shop.scale = 0.2
  shop.velocityY = 2
  shop.x = Math.round(random(600,1000))
}



}