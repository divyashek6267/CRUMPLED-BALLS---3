
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var groundObj,dustbin1,paperObj
var link;
var world;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbin1=new Dustbin(1200,650);
	paperObj=new Paper(200,450,20);
	groundObj=new Ground(width/2,670,width,20);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
	  link=new launcher(paperObj.body,{x:150,y:100});
	Engine.run(engine);
	
	
}


function draw() {
  rectMode(CENTER);
  background("white");

  paperObj.display();
  groundObj.display();
  dustbin1.display();
  
  link.display();


  }

function mouseDragged(){
	Matter.Body.setPosition(paperObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	link.fly();
}


