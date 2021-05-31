const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
//var ball1
var divisions=[];
var plinkos=[];

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

   for ( var q=30;q<=width;q=q+50){
    plinkos.push(new Plinko(q,480,10,10));
                           
   } 

   for ( var r=30;r<=width;r=r+50){
    plinkos.push(new Plinko(r,540,10,10));
                           
   } 

   for ( var s=30;s<=width;s=s+50){
    plinkos.push(new Plinko(s,600,10,10));
                           
   } 



for(var t=100;t<=width;t=t+80 ){
divisions.push(new Division(t,950,10,150));

}






}

function draw(){
background(0,255,255)


for(var i=0;i<plinkos.length;i++){
plinkos[i].display();

}      

ground1.display();

for(var z=0;z<divisions.length;z++){
   divisions[z].display();
   
   }



}