const Engine=Matter.Engine;
const World=Matter.World;
const Constraint = Matter.Constraint ;
const Bodies = Matter.Bodies;
var myengine
var myworld


function setup() {
  createCanvas(800,400);
  myengine=Engine.create();
  myworld=myengine.world;
  ball=new Ball(200,200,25);
  rope= new Rope(ball.body,{x:200,y:50})
}

function draw() {
  background(0);
  ball.display();
  rope.display();

}

function mouseDragged() {
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}