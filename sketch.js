var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var Divisions=[];
var divisionHeight=300;
var score =0;
var particle;
var turn=0;
function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     Divisions.push (new divisions(k,height-divisionHeight/2, 10,divisionHeight ));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,40);
 text("500  ",30,450);
 text("500  ",110,450);
 text("500  ",200,450);
 text("500  ",280,450);
 text("100  ",360,450);
 text("100  ",440,450);
 text("100  ",520,450);
 text("200  ",600,450);
 text("200  ",680,450);
 text("200  ",760,450);

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
    // particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //   score++;
  // }

if(particle!=null){
particle.display()





}



 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < Divisions.length; k++) {
     
     Divisions[k].display();
   }

   
}



