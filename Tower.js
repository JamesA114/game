class Tower 
{
  constructor(x, y) 
  {
    let options = {
    isStatic: false
    };
    
    for(var i = 0; i < 5; i ++){
        console.log(i)
        this.body = Bodies.rectangle(x + (110*i), y, 100, 50)
        World.add(world, this.body);
        console.log("block is added")
      }
      for(var v = 0; v < 5; v ++){
        this.body = Bodies.rectangle(x + 50*v, y + 50, 50, 25)
        World.add(world, this.body); 
        console.log("block is added")
      }
    
  }

  show() {
    let pos = this.body.position;
    push();
    rectMode(CENTER);
    stroke(20);
    fill(148,147,146);
    rect(pos.x,pos.y);
    pop();
  }

  buildTower(x, y){
      
  }
  
}