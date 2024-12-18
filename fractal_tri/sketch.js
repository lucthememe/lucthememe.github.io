// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let start_tri = [
  {x: 1000, y:50},
  {x:50, y:900},
  {x:1900, y:900},
];
let depth = 1;

function setup() {
  noStroke;
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  surpenk(start_tri, depth);

}


function surpenk(points, levels){
  noStroke;
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y);

  if (levels > 0){
    surpenk([points[0], midpoint(points[0], points[1]), midpoint(points[0], points[2])], levels-1);
    surpenk([points[1], midpoint(points[0], points[1]), midpoint(points[1], points[2])], levels-1);
    surpenk([points[2], midpoint(points[0], points[2]), midpoint(points[1], points[2])], levels-1);
  }
  fill(random(255), random(255), random(255));
  noStroke;
}

function midpoint(p1, p2){
  let midX = (p1.x + p2.x) /2;
  let midY = (p1.y + p2.y) /2;
  return {x: midX, y: midY};
}

function mousePressed(){
  if (depth < 10000){
    depth++;
  }

}