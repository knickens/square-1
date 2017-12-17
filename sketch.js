var  myPoem;
var KiR = 50;
var KiG = 50;
var KiB = 50;


function preload(){
 myPoem = loadSound('js/squareone.mp3');   
}



function setup(){
createCanvas(800,600); 
 KiR = random(0,255);
Ki= random(0,255);
KiG = random(0,255);
 myPoem.setVolume(0.2);
  
}

function draw(){
  background(0);  
   KiR = random(0,255);
Ki= random(0,255);
KiG = random(0,255);
  translate(400, 300);
  stroke(4);
      fill(KiB,KiG,KiR,50);
  for (var i = 0; i <= 10; i ++) {
    ellipse(5, 50, 20, 100);
    rotate(PI/random(1,5));
  }
   fill(255,100);
  for (var i = 0; i <= 10; i ++) {
    ellipse(5, 50, 20, 100);
    rotate(PI/random(1,5));
  }
  
  fill(KiB,KiG,KiR,100);
   for (var i = 0; i <= 10; i ++) {
    ellipse(10, 60, 40, 200);
    rotate(PI/random(1,5));
  }
   fill(255,100);
  for (var i = 0; i <= 10; i ++) {
    ellipse(10, 60, 40,200);
    rotate(PI/random(1,5));
  }
  
 
  fill(KiB,KiG,KiR,100);
   for (var i = 0; i <= 10; i ++) {
    ellipse(20, 80, 30, 400);
    rotate(PI/random(1,5));
  }
   fill(255,100);
  for (var i = 0; i <= 10; i ++) {
    ellipse(10, 80, 30,400);
    rotate(PI/random(1,5));
  }

}


function mouseClicked(){
  if(myPoem.isPlaying()){
   myPoem.pause();
  
    
   
  }
  else{
   myPoem.play();
  
  
  
  }
}
