class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :1.0,
            //isStatic:true
           
        }
        this.image = loadImage("alien.png")
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        
        
          push();

         

          if(this.body.speed<9){
          var angle = this.body.angle;
          var pos= this.body.position;
          
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          
          
          }
          else {
            World.remove(world,this.body);
  
          
            this.visiblity=this.visiblity -5;
            tint(255,this.visiblity);
            rect(this.rect,this.body.position.x,this.body.position.y,30,40);
           
          }
          
          
          pop();

         
          
        }
  }