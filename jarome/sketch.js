// bounceing ball
//sep 19 2024

//veriables
let x = 50
let y = 200
let size = 100
let speedx = 2
let speedy = 5
let bounce = 0
let r = 0
let b = 0
let g = 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(127);
  
  moveBall(); 
  bounceBall();
  displayBall();
  

function moveBall(){
    //movement
  x = x+speedx;
  y = y+speedy;
}

function bounceBall(){
  //bouonceing when the ball hitsthe top or m,,,,,mm,       bottom
  if (x >= 350){
    speedx = -2;
    bounce++;
  }
  else if (x <= 50){
    speedx = 2;
    bounce++;
  }
  if (y >= 350){
    speedy = -5;
    bounce++;
  }
  else if (y <= 50){
    speedy = 5;
    bounce++;
  }
}
  
function displayBall(){
  //changeing color
  if (bounce >= 1){
    bounce = 0
    r = random(0, 255)
    g = random(0, 255)
    b = random(0, 255)
  }
    
  //showing the ball
  noStroke();
  fill(r, g, b);
  circle(x, y, 100);
}

}