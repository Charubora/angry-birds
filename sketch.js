const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground,pig1,log1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
   box1= new Box(800,500,50,50);
   box2= new Box(1000,500,50,50);
   ground=new Ground(600,590,1200,20);
   pig1=new Pig(900,500,50,50);
   log1=new Log(900,450,250,PI/2);
   box3= new Box(800,400,50,50);
   box4= new Box(1000,400,50,50);
   pig2=new Pig(900,400,50,50);
   log2=new Log(900,350,250,PI/2);
   box5= new Box(900,350,50,50);
   log3=new Log(850,300,150,PI/7);
   log4=new Log(950,300,150,-PI/7);
   bird=new Bird(200,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box1);
    ground.display();
   box1.display();
    box2.display();
   pig1.display();
   log1.display();
   box3.display();
   box4.display();
  pig2.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  bird.display();
}