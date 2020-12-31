var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true, friction:0});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	

	
	side1=createSprite(300, height-90, 20, 100);
	side1.shapeColor="red";
	side2=createSprite(400, height-50, 200, 20);
	side2.shapeColor="red";
	side3=createSprite(500, height-90, 20, 100);
	side3.shapeColor="red";
	//var options={}

	side1body=Bodies.rectangle(side1.position.x+20,side1.position.y, 20, 100);
	World.add(world, side1body);
	side2body=Bodies.rectangle(side2.position.x,side2.position.y-20, 200, 20);
	World.add(world, side2body);
	side3body=Bodies.rectangle(side3.position.x+10,side3.position.y, 20, 100);
	World.add(world, side3body);
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  textSize(30)
  fill("yellow")
  text("Press Down arrow key to release parcel", 200, 50);
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Body.setStatic(packageBody, false);
    
  }
  if(keyCode === LEFT_ARROW)
  {
	  helicopterSprite.x-=20;
	  Body.translate(packageBody, {x:-20, y:0})
  }
  if(keyCode === RIGHT_ARROW)
  {
	  helicopterSprite.x+=20;
	  Body.translate(packageBody, {x:20, y:0})
  }
}



