// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  recur_circle(width/2, height/2, mouseX*2);
}


function recur_circle(x, y, rad){
  circle(x, y, rad*2);

  if (rad > 30){
    recur_circle(x-rad/2, y, rad/2);
    recur_circle(x+rad/2, y, rad/2);
    recur_circle(x, y-rad/2, rad/2);
    recur_circle(x, y+rad/2, rad/2);
  }
}