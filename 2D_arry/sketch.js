// motherload
// luc coutu
// 24/10/30
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//setting map
const MAP_WIDTH = 43;
const MAP_HIGHT = 465;
const air_height = 3;
const grass_lvl = 4;
const stone_wall_width = 5;
const number_of_tiles = 50;
const cam_offset = 4;
let tile_size = 0;
let grid_map;

let player ={
  y: 1,
  x: 0,
  cam_y: 0,
  cam_x: 0,
  inventory: [],
};

// diffineing objects
let mineables ={
  grass: [1, 0],
  earth: [2, 0],
  stone: [3, 0],
  iron: [4, 30],
  copper: [5, 60],
  gold: [6, 250],
  emrald: [7, 2500],
  treasure: [8,5000],
  floor_left: [9,],
  floor_right: [10,],
  floor: [11,],
};

let refuel_station;
let ore_shop;
let upgrade_shop;

// setting up variables for img's
let images ={
  grass_img: null,
  earth_img: null,
  stone_img: null,
  iron_img: null,
  copper_img: null,
  gold_img: null,
  emrald_img: null,
  treasure_img: null,
  floor_left_img: null,
  floor_right_img: null,
  floor_img: null,
  char_down: null,
  char_left: null,
  char_right: null,
};

function preload(){
  images.earth_img = loadImage("earth.png");
  images.stone_img = loadImage("rock.png");
  images.iron_img = loadImage("iron.png");
  images.copper_img = loadImage("copper.png");
  images.gold_img = loadImage("gold.png");
  images.emrald_img = loadImage("emrald.png");
  images.treasure_img = loadImage("treasure.png");
  images.grass_img = loadImage("grass.png");
  images.floor_left_img = loadImage("floor_edge_left.png");
  images.floor_right_img = loadImage("floor_edge_right.png");
  images.floor_img = loadImage("floor.png");
  images.char_down = loadImage("char_down.png");
  images.char_left = loadImage("char_left.png");
  images.char_right = loadImage("char_right.png");
}

function setup() {
  tile_size = windowWidth/number_of_tiles;
  createCanvas(windowWidth, windowHeight);
  grid_map = gen_grid(MAP_WIDTH, MAP_HIGHT, grass_lvl, air_height, stone_wall_width);
}

function draw() {
  background(1, 51, 1);
  moveplayer();
  draw_grid(grid_map, tile_size, player.cam_y, player.cam_x);
}

/**
 * genrates a random grid of ore and dirt with a space on top and stone walls
 * @param {*coloms the height of the map}
 * @param {*rows the width of the map} 
 * @param {*grass the height of the first layer of the ground}
 * @param {*air the height of the air}
 * @param {*stone_wall the width of the stone wall on the sides}
 * @returns returns a grid map
 */
function gen_grid(coloms, rows, grass, air, stone_wall){
  let new_grid = [];
  let row_temp = [];

  for (let y = 0; y <= air; y++){
    new_grid.push(row_temp);
  }

  row_temp = [];
  for (let rock = 0; rock <= stone_wall-1; rock++){
    row_temp.push(mineables.stone);
  }
  for (let x = 5; x <= coloms-5; x++){
    row_temp.push(mineables.grass);
  }
  for (let rock = 0; rock <= stone_wall-1; rock++){
    row_temp.push(mineables.stone);
  }
  new_grid.push(row_temp);
  row_temp = [];

  for (let y = grass+1; y <= rows; y++){
    for (let rock = 0; rock <= stone_wall-1; rock++){
      row_temp.push(mineables.stone);
    }
    for (let x = 5; x <= coloms - 5; x++){
      let funny_little_guy = random(1000);
      if (funny_little_guy <= 500){
        row_temp.push(mineables.earth);
      }
      else if (funny_little_guy > 500 && funny_little_guy <= 700){
        row_temp.push(mineables.iron);
      }
      else if (funny_little_guy > 700 && funny_little_guy <= 800){
        row_temp.push(mineables.copper);
      }
      else if (funny_little_guy > 800 && funny_little_guy <= 975){
        row_temp.push(mineables.gold);
      }
      else if (funny_little_guy > 975 && funny_little_guy <= 990){
        row_temp.push(mineables.emrald);
      }
      else if (funny_little_guy > 990 && funny_little_guy <= 1000){
        row_temp.push(mineables.treasure);
      }
    }
    for (let rock = 0; rock <= stone_wall-1; rock++){
      row_temp.push(mineables.stone);
    }
    new_grid.push(row_temp);
    row_temp = [];
  }
  return new_grid;
}


function draw_grid(grid, square_size, cam_y, cam_x){
  for (let y = 0; y < MAP_HIGHT; y++){
    for (let x = 0; x < MAP_WIDTH+1; x++){
      if (grid[y][x] === mineables.grass){
        image(images.grass_img, (x + cam_x)*square_size, (y + cam_y)*square_size, square_size, square_size);
      }
      else if (grid[y][x] === mineables.earth){
        image(images.earth_img, (x + cam_x)*square_size, (y + cam_y)*square_size, square_size, square_size);
      }
      else if (grid[y][x] === mineables.stone){
        image(images.stone_img, (x + cam_x)*square_size, (y + cam_y)*square_size, square_size, square_size);
      }
      else if (grid[y][x] === mineables.iron){
        image(images.iron_img, (x + cam_x)*square_size, (y + cam_y)*square_size, square_size, square_size);
      }
      else if (grid[y][x] === mineables.copper){
        image(images.copper_img, (x + cam_x)*square_size, (y + cam_y)*square_size, square_size, square_size);
      }
      else if (grid[y][x] === mineables.gold){
        image(images.gold_img, (x + cam_x)*square_size, (y + cam_y)*square_size, square_size, square_size);
      }
      else if (grid[y][x] === mineables.emrald){
        image(images.emrald_img, (x + cam_x)*square_size, (y + cam_y)*square_size, square_size, square_size);
      }
      else if (grid[y][x] === mineables.treasure){
        image(images.treasure_img, (x + cam_x)*square_size, (y + cam_y)*square_size, square_size, square_size);
      }
      else if (grid[y][x] === 0){
        
      }
    }
  }
}

function moveplayer(){
  if (keyIsDown(83) || keyIsDown(40)){
    if (player.cam_y >= -MAP_HIGHT + number_of_tiles+1){
      player.cam_y--;
      player.y--;
      mine_tile(player.x, player.y);
    }
  }
  if (keyIsDown(87) || keyIsDown(38)){
    if (player.cam_y <= 0){
      player.cam_y++;
      player.y++;
      mine_tile(player.x, player.y);
    }
  }
  if (keyIsDown(68) || keyIsDown(39)){
    if (player.cam_x >= -MAP_WIDTH + number_of_tiles){
      player.cam_x--;
      player.x--;
      mine_tile(player.x, player.y);
    }
  }
  if (keyIsDown(65)  || keyIsDown(37)){
    if (player.cam_x <= -1){
      player.cam_x++;
      player.x++;
      mine_tile(player.x, player.y);
    }
  }
}

function mine_tile(next_tile_x, next_tile_y){
  player.inventory.push(grid_map[next_tile_y][next_tile_x]);
  grid_map[next_tile_y][next_tile_x] = 0;
}