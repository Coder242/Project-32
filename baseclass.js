class Box{
    constructor(x, y, width, height, input) {

      if(input === "red"){
        this.image = loadImage("red_box.png");
      }else if(input === "pink"){
        this.image = loadImage("pink_box.png");
      }else if(input === "green"){
        this.image = loadImage("green_box.png");
      }else if(input === "yellow"){
        this.image = loadImage("yellow_box.png");
      }else{
        this.image = null;
      }

        var options = {
            restitution:0.8,
            friction:1,
            density:1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<3){
          push();
          translate(this.body.position.x, this.body.position.y);
          imageMode(CENTER);
          image(this.image, 0, 0, this.width, this.height);
          pop();
        }
        else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity-2;
          tint(255, this.Visiblity);
          image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
          pop();
        }
        
      }
}