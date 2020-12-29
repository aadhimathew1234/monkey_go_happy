
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;

var ground;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  

 
}


function draw() {
  background(220);
  
  if(keyDown("space")) {
    monkey.y = (monkey.y - 30);
  }
  
  monkey.velocityY = 4;
  
  monkey.collide(ground); 
  
  if (ground.x < 150){
      ground.x = ground.width/2;
  }
  
  
  
  stroke("black");
  textSize(20);
  fill("white");
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime,100,50);
  
  
  
  spawnBanana();
  spawnObstacles();

  drawSprites();
}

function spawnBanana(){
  if(frameCount%80==0){
  banana=createSprite(600,Math.round(random(120,200)));
    banana.addImage(bananaImage);
    banana.velocityX=-2;
   banana.lifetime=300;
    banana.scale=0.1;
}
}

function spawnObstacles(){
  if(frameCount%300==0){
    obstacle = createSprite(300,330,10,40);
    obstacle.velocityX = -(6);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.lifetime=300;
    
  }
}








