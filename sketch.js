var bullet,wall;
var thickness,speed,weight,damage;

function setup() {
  createCanvas(800,400);
  thickness=random(22,83)
  speed=random(223,321);
  weight=random(30,52)
  bullet=createSprite(400, 200, 50, 50);
  wall=createSprite(600, 200, thickness, height/2);
 
  bullet.velocityX=speed/10
  wall.velocityX=0

  damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness)
}

function draw() {
  background(0); 
  
  if (HasCollide(bullet,wall)){
    bullet.velocityX=0
    if (damage>10){
      wall.shapeColor="red"      
    }
    else {
      wall.shapeColor="green"
    }
  }
  
  drawSprites();
}
