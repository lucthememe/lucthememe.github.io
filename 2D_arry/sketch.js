// motherload
// luc coutu
// 24/10/30
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//setting map
const MAP_WIDTH = 42;
const MAP_HIGHT = 465;
const tile_size = 5;
const air_height = 3;
const grass_lvl = 4;
const stone_wall_width = 5



// diffineing objects
let mineables ={
  grass: 1,
  earth: 2,
  stone: 3,
  iron: 4,
  copper: 5,
  gold: 6,
  emrald: 7,
  treasure: 8,
  floor_left: 9,
  floor_right: 10,
  floor: 11,
};
let refuel_station;
let ore_shop;
let upgrade_shop;
// setting up variables for img's
let images ={
  grass_img: 1,
  earth_img: 2,
  stone_img: 3,
  iron_img: 4,
  copper_img: 5,
  gold_img: 6,
  emrald_img: 7,
  treasure_img: 8,
  floor_left_img: 9,
  floor_right_img: 10,
  floor_img: 11,
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
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  let map = gen_grid(MAP_WIDTH, MAP_HIGHT, grass_lvl, air_height, stone_wall_width);
}

function draw() {
  background(1, 51, 1);
  draw_grid(map);
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
    console.log(row_temp);
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
  console.log(row_temp);
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
    console.log(row_temp);
    row_temp = [];
  }
  return new_grid;
}


function draw_grid(grid){
  for (let y = 0; y < MAP_HIGHT; y++){
    for (let x = 0; x < MAP_WIDTH; x++){
      if (grid[y][x] === mineables.earth){
        image(earth_img, x*square_size, y*square_size, square_size, square_size);
      }
    }
  }
}
