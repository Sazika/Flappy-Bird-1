var bg
var bird, birdImg
var bottomP, bottomPImg
var topP, topPImg
var ground, groundImg

function preload(){
  bg = loadImage("bg.png")
  birdImg = loadImage("bird.png")
  bottomP = loadImage("bottom pillar.png")
  topP = loadImage("top pillar.png")
  groundImg = loadImage("ground.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
 //bird sprite 
  bird = createSprite(250, 200, 50, 50);
  bird.addImage(birdImg)
  bird.scale = 0.4;

  //ground sprite
  ground = createSprite(width/2, height - 30, width, 30)
  ground.addImage(groundImg)
  ground.velocityX = -10
  
}

function draw() {
  background(bg);  

  if(keyDown("SPACE")){
    bird.velocityY = -10
  }

  //gravity
  bird.velocityY += 0.3

  drawSprites();
}

//bird.bounceOff(edges); this is fo the bird to not go out of screen