class Block 
{
  constructor(x, y, w,h) 
  {
    let options = {
    isStatic: false
    };
    var blocks = []
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
    blocks.push(this.body);
  }

   show() {
    let pos = this.body.position;
    push();
    rectMode(CENTER);
    stroke(50,50,50);
    fill(148,147,146);
    rect(pos.x,pos.y, this.w, this.h);
    pop();
  }
}
