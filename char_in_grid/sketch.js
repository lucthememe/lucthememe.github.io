// char grid
// luc coutu
// 24/10/22

let grid = [];
let grid_heigth = 5;
let grid_width = 5;
let square_size;
const open_tile = 0;
const wall_tile = 1;
const player_tile = 10;
let player = {
  x: 0,
  y: 0,
};
let grass_img;
let rock_img;

function preload(){
  grass_img = loadImage("grass.jpg");
  rock_img = loadImage("rock.jpg");
}

function setup() {
  if (windowWidth > windowHeight){
    createCanvas(windowHeight, windowHeight);
  }
  square_size = height/grid_heigth;
  grid = gen_grid(grid_heigth, grid_width);

  grid[player.y] [player.x] = player_tile;
}

function draw() {
  background(0);
  draw_grid();
}

function window_resize(){
  if (windowWidth > windowHeight){
    resizeCanvas(windowHeight, windowHeight);
  }
}

function draw_grid(){
  for (let y = 0; y < grid_heigth; y++){
    for (let x = 0; x < grid_width; x++){
      if (grid[x][y] === open_tile){
        //fill(0);
        image(rock_img, x*square_size, y*square_size, square_size, square_size);
      }
      else if (grid[x][y] === wall_tile){
        //fill(255);
        image(grass_img, x*square_size, y*square_size, square_size, square_size);
      }
      else if (grid[x][y] === player_tile){
        fill(255, 0, 0);
        square(x*square_size, y*square_size, square_size);
      }
    }
  }
}

//add player


function gen_grid(coloms, rows){
  let new_grid = [];
  for (let y = 0; y < rows; y++){
    new_grid.push([]);
    for (let x = 0; x < coloms; x++){
      if (random(100) > 50){
        new_grid[y].push(wall_tile);
      }
      else{
        new_grid[y].push(open_tile);
      }
    }
  }
  
  return new_grid;
}

function swap(x, y){
  if (x >= 0 && y >= 0 && x < grid_heigth && y < grid_heigth){
    if (grid[x][y] === open_tile){
      grid[x][y] = wall_tile;
    }
    else if (grid[x][y] === wall_tile){
      grid[x][y] = open_tile;
    }
  }
}

function mousePressed(){
  let x = Math.floor(mouseX/square_size);
  let y = Math.floor(mouseY/square_size);
  swap(x, y);
  // swap(x-1, y);
  // swap(x+1, y);
  // swap(x, y-1);
  // swap(x, y+1);


}

function keyPressed(){
  if (key === "w"){
    move_player(player.x, player.y - 1);
  }
  if (key === "a"){
    move_player(player.x - 1, player.y);
    
  }
  if (key === "s"){
    move_player(player.x, player.y + 1);
    
  }
  if (key === "d"){
    move_player(player.x + 1, player.y);
    
  }
}

function move_player(x, y){

  if (x >= 0 && x < grid_heigth && y >= 0 && y < grid_heigth && grid[y][x] === open_tile){
    grid [player.y][player.x] = open_tile;

    // move
    player.x = x;
    player.y = y;

    //show player

    grid[player.y][player.y] = player_tile;
  }
}