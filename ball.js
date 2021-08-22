class Ball{
    constructor(x,y,r){
   var options ={
       density:100,
       frictionAir:0,
   }
   this.body=Bodies.circle(x,y,r,options);
   World.add(myworld,this.body);
   this.radius=r;
    }
display(){
  var  pos=this.body.position;
  fill("yellow");
  ellipseMode(RADIUS);
  ellipse(pos.x,pos.y,this.radius,this.radius);
}
}