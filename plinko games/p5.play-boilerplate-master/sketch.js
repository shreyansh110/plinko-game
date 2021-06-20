const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
//var ball1
var divisions=[];
var plinkos=[];
var particles=[];

function preload(){



}


function setup(){

var canvas=createCanvas(400,1200);

engine=Engine.create();
world=engine.world;

ground1=new Ground(200,1190,400,10);

for ( var j=30;j<=width;j=j+50){
    plinkos.push(new Plinko(j,60,10,10));
                           
   } 




for ( var k=30;k<=width;k=k+50){
    plinkos.push(new Plinko(k,120,10,10));
                           
   } 


   for ( var l=30;l<=width;l=l+50){
    plinkos.push(new Plinko(l,180,10,10));
                           
   } 

   for ( var m=30;m<=width;m=m+50){
    plinkos.push(new Plinko(m,240,10,10));
                           
   } 

   for ( var n=30;n<=width;n=n+50){
    plinkos.push(new Plinko(n,300,10,10));
                           
   } 

   for ( var o=30;o<=width;o=o+50){
    plinkos.push(new Plinko(o,360,10,10));
                           
   } 

   for ( var p=30;p<=width;p=p+50){
    plinkos.push(new Plinko(p,420,10,10));
                           
   } 
/*
   for ( var q=30;q<=width;q=q+50){
    plinkos.push(new Plinko(q,480,10,10));
                           
   } 

   for ( var r=30;r<=width;r=r+50){
    plinkos.push(new Plinko(r,540,10,10));
                           
   } 

   for ( var s=30;s<=width;s=s+50){
    plinkos.push(new Plinko(s,600,10,10));
                           
   } 

*/

for(var t=10;t<=width;t=t+95 ){
divisions.push(new Division(t,1030,10,300));


}






}

function draw(){
background(0,255,255)
Engine.update(engine);

ground1.display();

if(frameCount%90===0){
   particles.push(new Particle(random(width/2-10,width/2+10),40,10));
   
   }

for(var i=0;i<plinkos.length;i++){
plinkos[i].display();

}      





for(var z=0;z<divisions.length;z++){
   divisions[z].display();
 // console.log (divisions[z]);
   }

   for(var j=0;j<particles.length;j++){
      particles[j].display();
      console.log(particles);
      }


//console.log(divisions);

}