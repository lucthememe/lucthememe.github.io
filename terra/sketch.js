// luc coutu
// 24/10/7

let terrain = [];
const NUMBER_OF_RECTS = 5000;
let spawn_height = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  let how_wide = width / NUMBER_OF_RECTS;
  genrateTerrain(how_wide);

}

function draw() {
  background(0);
  fill(255);
  spawn_char(spawn_height + 50);
  spawn_beam();
}

function genrateTerrain(theWidth){
  let counter = 0;
  let time = 0;
  let timeDelta = 0.0002;
  for (let x = 0; x < width; x += theWidth){
    let theHeight = noise(time) * height;
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
    rect(someRect.x, someRect.y, someRect.w, someRect.h);
    fill(150, 0, 200);
    rect(someRect.x, someRect.y - 10, someRect.w, someRect.h + 20);
  }
}

function spawn_char(Y){
  let y = Y;
  let x = 0;
  let speed = 20;
  let size = 20;
  rect(x, y, size, size);
}