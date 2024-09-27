// int scene


let charX;
let charY;
let speed = 2;

let wallLeftX = 0;
let wallLeftY = 0;
let wallLeftH = 500;
let wallLeftW = 50;

let wallRightX = 450;
let wallRightY = 0;
let wallRightW = 50;
let wallRightH = 500;

let wallBottomX = 50;
let wallBottomY = 480;
let wallBottomW = 400;
let wallBottomH = 20;

let wallTopX = 50;
let wallTopY = 0;
let wallTopW = 400;
let wallTopH = 20;

let wall1X = 100;
let wall1Y = 400;
let wall1W = 350;
let wall1H = 20;


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
  rect(wallX, wallY, wallW, wallH);
  if(charX+10 > wallX && charX < wallX + wallW && charY > wallY && charY < wallY + wallH){
    charSpawn;
  }
}

function charmove(){
  charSpawn;
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
  strokeWeight(0);
}

function hitDitection(){
  fill(255, 100, 100);
  isTouchingWall(wallLeftX, wallLeftY, wallLeftW, wallLeftH);
  isTouchingWall(wallRightX, wallRightY, wallRightW, wallRightH);
  isTouchingWall(wallBottomX, wallBottomY, wallBottomW, wallBottomH);
  isTouchingWall(wallTopX, wallTopY, wallTopW, wallTopH);
  isTouchingWall(wall1X, wall1Y, wall1W, wall1H);
}

function charSpawn(){
  charX = 400;
  charY = 400;
}