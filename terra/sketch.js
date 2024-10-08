// luc coutu
// 24/10/7

let terrain = [];
const NUMBER_OF_RECTS = 1080;

function setup() {
  noStroke();
  createCanvas(windowWidth, windowHeight);
  let how_wide = width / NUMBER_OF_RECTS;
  genrateTerrain(how_wide);

}

function draw() {
  background(100);
  spawn_cave();
}

function genrateTerrain(theWidth){
  let time = 0;
  let timeDelta = 0.0003;
  for (let x = 0; x < width; x += theWidth){
    let theHeight = noise(time) * height;
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

function spawn_cave(){
  for (let someRect of terrain){
    rect(someRect.x, someRect.y, someRect.w, someRect.h);
  }
}