var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var d = 0; d <=width; d = d + 80) {
     divisions.push(new Divisions(d, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var p = 75; p <=width; p=p+50) 
    {
    
       plinkos.push(new Plinko(p,75));
    }

    for (var p = 50; p <=width-10; p=p+50) 
    {
    
       plinkos.push(new Plinko(p,175));
    }

     for (var p = 75; p <=width; p=p+50) 
    {
    
       plinkos.push(new Plinko(p,275));
    }

     for (var p = 50; p <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
  
   for (var p = 0; p < plinkos.length; p++) {
     
     plinkos[p].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var d = 0; d < divisions.length; d++) {
     
     divisions[d].display();
   }
}