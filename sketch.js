const Engine=Matter.Engine;
const World=Matter.World;
const Constraint = Matter.Constraint ;
const Bodies = Matter.Bodies;
var myengine
var myworld
var block=[]


function setup() {
  createCanvas(800,400);
  myengine=Engine.create();
  myworld=myengine.world;
  ball=new Ball(200,200,25);
  rope= new Rope(ball.body,{x:200,y:50})
  for (var j = 0; j <=width-10; j=j+50) 
  {
    block.push(new Box(20,60,50,50));
  }
}

function draw() {
  background(0);
  ball.display();
  rope.display();
  block.display();

}

function mouseDragged() {
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}