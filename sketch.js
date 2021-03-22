var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(windowWidth,windowHeight);

  car=createSprite(windowWidth/2-600, height/2, 50, 50);
  wall=createSprite(windowWidth/2+600,height/2,60,height/2);

  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background("black");  

  car.velocityX=speed;

  if(wall.x-car.x < car.width/2+wall.width/2 && car.x-wall.x < car.width/2+wall.width/2){  

    car.velocityX=0;
    deformation=0.5*speed*speed*weight/22500;

    if(deformation>180) {
      car.shapeColor="red";
    }

    if(deformation>100 && deformation<180){
      car.shapeColor="yellow";
    }

    if(deformation<100){
      car.shapeColor="green";
    }
  }

  drawSprites();
}   