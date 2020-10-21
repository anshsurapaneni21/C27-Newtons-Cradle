
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roofObject, ground,bobDiameter;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	roofObject = new Roof(400,350,600,20);

	bobDiameter = 60;

	//Create the Bodies Here.
	bobObject1 = new Bob(300,630,30);
	rope1 = new Rope(bobObject1.body, roofObject.body,-160,-40, -bobDiameter*2)

	bobObject2 = new Bob(320,630,30);
	rope2 = new Rope(bobObject2.body, roofObject.body,-130,-40, -bobDiameter*2,0)

	bobObject3 = new Bob(340,630,30);
	rope3 = new Rope(bobObject3.body, roofObject.body,-110,-40, -bobDiameter*2,0)

	bobObject4 = new Bob(360,630,30);
	rope4 = new Rope(bobObject4.body, roofObject.body,-90,-40, -bobDiameter*2,0)

	bobObject5 = new Bob(380,630,30);
	rope5 = new Rope(bobObject5.body, roofObject.body,-70,-40, -bobDiameter*2,0);





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  bobObject1.display();
  rope1.display();
  bobObject2.display();
  rope2.display();
  bobObject3.display();
  rope3.display();
  bobObject4.display();
  rope4.display();
  bobObject5.display();
  rope5.display();
  roofObject.display();
 
}



