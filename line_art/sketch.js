// genrative art
// luc 
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const TS = 1;
let tile_array = [];
let color = [];


function setup() {
  createCanvas(3500, 3500);
  for (let x = 0; x < width; x += TS){
    for(let y = 0; y < height; y += TS){
      someTile = spawnTile(x, y);
      tile_array.push(someTile);
    }
  }
  // noLoop();
}

function draw() {
  background(220);

  //display tile
  for(let myTile of tile_array){
    color = [random(0, 255), random(0, 255), random(0, 255)];
    stroke(color[0], color[1], color[2]);
    line(myTile.x1, myTile.y1, myTile.x2, myTile.y2 );
  }
}

//negitive slope
function spawnTile(x, y){
  let choice = random(100);
  let tile;

  if (choice < 50){
    tile = {
      x1: x - TS/2,
      x2: x + TS/2,
      y1: y + TS/2,
      y2: y - TS/2
    };
  }
  else{
    tile = {
      x1: x - TS/2,
      x2: x + TS/2,
      y1: y - TS/2,
      y2: y + TS/2
    };
  }

  return tile;
}