// grid demo
// luc coutu
// 24/10/22

let grid = [];
let grid_heigth = 5;
let grid_width = 5;
let square_size;

function setup() {
  if (windowWidth > windowHeight){
    createCanvas(windowHeight, windowHeight);
  }
  square_size = height/grid_heigth;
  grid = gen_grid(grid_heigth, grid_width);

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
      if (grid[x][y] === 0){
        fill(0);
      }
      else if (grid[x][y] === 1){
        fill(255);
      }
      rect(x*square_size, y*square_size, square_size);
    }
  }
}
function gen_grid(coloms, rows){
  let new_grid = [];
  for (let y = 0; y < rows; y++){
    new_grid.push([]);
    for (let x = 0; x < coloms; x++){
      if (random(100) > 50){
        new_grid[y].push(1);
      }
      else{
        new_grid[y].push(0);
      }
    }
  }
  return new_grid;
}

function swap(x, y){
  if (x >= 0 && y >= 0 && x < grid_heigth && y < grid_heigth){
    if (grid[x][y] === 0){
      grid[x][y] = 1;
    }
    else {
      grid[x][y] = 0;
    }
  }
}

function keyPressed(){
  if (key === " "){
    grid = update_grid();
  }
  
}

function update_grid(){
  let next_turn = gen_grid(grid_heigth, grid_heigth);

  for (let y = 0; y < grid_heigth; y++){
    for (let x = 0; x < grid_heigth; x++){
      let neighbours = 0;

      for (let iy = -1; iy <= 1; iy++){
        for (let ix = -1; ix <= 1; ix++){
          if (y+iy >= 0 && y+iy < grid_heigth && x+ix >=0 && x+ix < grid_heigth){
            neighbours += grid[y+iy, x+ix];
          }
        }
      }
      if (grid[y][x] === 0){
        if (neighbours === 3){
          next_turn[y][x] = 1;
        }
        else {
          next_turn[y][x] = 0;
        }

        if (grid[y][x] === 1){
          if (neighbours === 2 || neighbours === 3){
            next_turn[y][x] = 1;
          }
          else {
            next_turn[y][x] = 0;
          }
        }
      }
    }
  }
  return next_turn;
}

// function mousePressed(){
//   let x = Math.floor(mouseX/square_size);
//   let y = Math.floor(mouseY/square_size);
//   swap(x, y);
//   swap(x-1, y);
//   swap(x+1, y);
//   swap(x, y-1);
//   swap(x, y+1);
// }