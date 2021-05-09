const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, ground, ball1, rope1, ground2;






function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 600, 1200, 20); 
    box1 = new Box(900, 100, 70, 70); 
    ball1 = new Ball(200,200,80,80);
    rope1 = new Rope(ball1.body,{x: 400,y: 50});
    ground2 = new Ground(900,350,90,10);
    

    
}

function draw(){
      background("lightgrey");
     Engine.update(engine);
      ground.display(); 
      box1.display(); 
      ball1.display();
      rope1.display();
      ground2.display();
     



    }

    function mouseDragged() { 
        Matter.Body.setPosition(ball1.body, { x: mouseX, y: mouseY }); 
    
    }
