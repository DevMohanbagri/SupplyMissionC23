var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,wall1,wall2,wall3;
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
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	//wall1sprite = createSprite(width/2,500,200,20);
	//wall1sprite.shapeColor="red";

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	//creating walls for box
	var option={
		isStatic:true
	}


	wall1 = Bodies.rectangle(width/2,650,200,20,option);
	World.add(world,wall1);

	wall2 = Bodies.rectangle(500,600,20,130,option);
	World.add(world,wall2);

	wall3 = Bodies.rectangle(300,600,20,130,option);
	World.add(world,wall3);

	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

	Engine.update(engine);

  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;

  rectMode(CENTER);

 
  fill("red");
  stroke("red");
  rect(wall1.position.x,wall1.position.y,200,20);

  rect(wall2.position.x,wall2.position.y,20,130);

  rect(wall3.position.x,wall3.position.y,20,130);

 

  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Body.setStatic(packageBody,false);
	packageBody.restitution=0;
    
  }
}



