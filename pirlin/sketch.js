// perlin noise ball
// luc coutu
// 2024 oct 7

let x;
let y;
let time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height / 2;
}

function draw() {
  background(220);

  x = noise(time) * width;
  y = noise(time + 1) * height;

  circle(x, y, 50);

  time += 0.01;
}
