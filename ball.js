class Ball{
    constructor(x,y,z){
        var options = {
            density:1
        }
        this.body = Bodies.circle(x,y,z,options);
        this.image = loadImage("hexagon.png");
        World.add(world, this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,25,20);
        pop();
    }
}