

var dot;
function preload(){




}




function setup() {
  createCanvas(800,400);
  dot=new Ball(400,200,2)
  createSprite();
 
}

function draw() {
  background(0);  

dot.display();
drawSprites();
}