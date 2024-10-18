// luc coutu
// 24/10/7

let terrain = [];
let spawn_height = 0;
const NUMBER_OF_RECTS = 2500;
let char;
let death;
let move_beam = 0;

function preload(){
  death = loadSound("dead.ogg");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  let how_wide = width / NUMBER_OF_RECTS;
  genrateTerrain(how_wide);
  spawn_char(spawn_height + 50);
}

function draw() {
  background(0);
  spawn_beam();
  draw_char();
  move_char();
  move_beam += 5;
}

function genrateTerrain(theWidth){
  let counter = 0;
  let time = 0;
  let timeDelta = 0.0004;
  for (let x = 0; x < width * 3; x += theWidth){
    let theHeight = noise(time) * (height *0.8);
    counter++;
    if (counter === 1){
      spawn_height = height - theHeight;
    }
    let someRect = spawn_rect(x, theHeight, theWidth);
    terrain.push(someRect);
    time += timeDelta;
  }
}


function spawn_rect(leftSide, rectHeight, rectWidth){
  let theRect = {
    x: leftSide,
    y: height - rectHeight,
    w: rectWidth,
    h: 100
  };
  return theRect;
}

function spawn_beam(){
  noStroke();
  for (let someRect of terrain){
    fill(150, 0, 250);
    rect(someRect.x - move_beam, someRect.y, someRect.w, someRect.h);
    fill(150, 0, 200);
    rect(someRect.x - move_beam, someRect.y - 10, someRect.w, someRect.h + 20);
  }
}

function in_beam(){
  for (let somerect in terrain){
    if (char.y > somerect.y && char.y < somerect.y + 100){
      death.play();

    }
  }
}

function spawn_char(Y){
  let the_char = {
    y: Y,
    x: 0,
    speed: 5,
    size: 20,
  };
  char = the_char;
  rect(char.x, char.y, char.size, char.size);
}

function move_char(){
  if (keyIsDown(87)){
    char.y = char.y - char.speed;
  }
  if (keyIsDown(83)){
    char.y = char.y + char.speed;
  }
}

function draw_char(){
  fill(255);
  rect(char.x, char.y, char.size, char.size);
}