const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var boxl,boxr,boxb;
var paper,dustbin;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    paper = new Paper(100,100);

    ground = new Ground(600,height,1200,20,"red");
    dustbin = new Dustbin();

}

function draw(){
    background(0);
    Engine.update(engine);
    dustbin.display();

    ground.display();
    paper.display();
}
function keyPressed(){
    if(keyCode==UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
    }
}