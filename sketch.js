const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var backgroundImg
var ground
var tower1
//var block
var timer

var blocks = []
var i = 0

function preload() {
  backgroundImg = loadImage("./Assets/Background.jpg")
}

function setup() {
  createCanvas(1600,800);
  engine = Engine.create();
  world = engine.world
  ground = new Ground(800, 800, 1600, 20)
  tower1 = new Tower(400, 700)
  timer = createSprite(0, 40, 20, 20)
  timer.velocityX = 5
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);
  drawSprites();
  ground.show()
  tower1.show()
  
  
  
  buildBlock()
  
}

function buildBlock(){

  if(mouseDown("leftButton") && timer.x > 20){
    i += 1
    if(blocks.length <= 20){
      var block = new Block(mouseX, mouseY, 50, 50)
      blocks.push(block)
      block.show()
      timer.x = 0
    }
    
    console.log(i)
  }
  if(blocks.length <=1){
    blocks[i].show()
  }
  
  //var block = new Block(mouseX, mouseY, 50,50)
  //block.show()
}

  
  
