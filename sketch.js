
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{

}

function setup() {
	createCanvas(1500, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	s400 = new S400(650,650);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

	  s400.display();
	  
  drawSprites();
 
}



