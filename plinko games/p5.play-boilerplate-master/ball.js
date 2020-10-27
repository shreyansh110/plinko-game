class Ball{
constructor(x,y,radius){
var options={
'restitution':1,
'friction':2,
'density':3,
isStatic:true


}

this.body=Bodies.circle(x,y,radius,options);
this.radius=radius
World.add(world,this.body)

}
display(){
var pis=this.body.position
push();
translate(pis.x,pis.y);
ellipseMode(RADIUS);
circle(0,0,this.radius);
pop();
}
    

}