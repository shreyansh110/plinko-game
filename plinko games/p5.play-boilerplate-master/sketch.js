const Engine = Matter.Engine;
const World=Matter.World;
const Bodies =Matter.Bodies;

var dot;
function preload(){

}

function setup() {
  createCanvas(800,400);
  dot=new Ball(200,200,2)
 
 
}

function draw() {
  background(0);  

dot.display();
drawSprites();
}