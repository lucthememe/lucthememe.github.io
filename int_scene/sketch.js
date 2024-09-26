// int scene


let charX = 350;
let charY = 400;
let speed = 2;
let wallLeftX = 0;
let wallLeftY = 0;
let wallLeftH = 500;
let wallLeftW = 100;
let wallRightX = 400;
let wallRightY = 0;
let wallRightW = 100;
let wallRightH = 500;


function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(177);
  charmove();
  drawmaze();
  hitDitection();
}

function isTouchingWall(wallX, wallY, wallW, wallH){
  if(charX > wallX && charX < wallX + wallW && charY > wallY && charY < wallY + wallH){
    charX = 350;
    charY = 400;
  }
}

function charmove(){
  fill(100, 255 ,100);
  rect(charX, charY, 10, 10);
  if (keyIsDown(87)){
    charY = charY - speed;
  }
  if (keyIsDown(83)){
    charY = charY + speed;
  }
  if (keyIsDown(65)){
    charX = charX - speed;
  }
  if (keyIsDown(68)){
    charX = charX + speed;
  }
}

function drawmaze(){
  fill(255, 100, 100);
  rect(wallLeftX, wallLeftY, wallLeftW, wallLeftH);
  rect(wallRightX, wallRightY, wallRightW, wallRightH);
}

function hitDitection(){
  isTouchingWall(wallLeftX, wallLeftY, wallLeftW, wallLeftH)
  isTouchingWall(wallRightX, wallRightY, wallRightW, wallRightH)
}
