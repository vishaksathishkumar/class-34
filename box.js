class Box{
    constructor(x,y,width,height){
        var options={
          density:20,
          friction:10,  
        }
        this.body=Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //console.log(options)
        World.add(myworld, this.body);
    }

    display(){
        var pos =this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }

}