class base{
  
    constructor(x, y, width, height, angle) {
      var sch = 0;
         var option = {
            'isStatic':true,
            'restitution':0.8,
            'friction':100000000.0,
            'density':100000000.0,
            
        }
        if(height == 10 || height == 20){
          this.body = Bodies.rectangle(x, y+50, width, height + 100, option);
            console.log('10')
            sch = 10;

        }
        else{
          this.body = Bodies.rectangle(x, y, width, height , option);
        }
        
        
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
      destroy(){
        World.remove(world, this.body)
      }

}