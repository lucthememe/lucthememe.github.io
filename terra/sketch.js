// luc coutu
// 24/10/7

let terrain = [];
const NUMBER_OF_RECTS = 50000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let how_wide = width / NUMBER_OF_RECTS;
  genrateTerrain(how_wide);

}

function draw() {
  background(220);
  for (let someRect of terrain){
    rect(someRect.x, someRect.y, someRect.w, someRect.h);
  }
}

function genrateTerrain(theWidth){
  let time = 0;
  let timeDelta = 0.0001;
  for (let x = 0; x < width; x += theWidth){
    let theHeight = noise(time) * height;
    let someRect = spawn_rect(x, theHeight, theWidth);
    terrain.push(someRect);
    time += timeDelta
  }
}

function spawn_rect(leftSide, rectHeight, rectWidth){
  let theRect = {
    x: leftSide,
    y: height - rectHeight,
    w: rectWidth,
    h: rectHeight
  };
  return theRect;
}