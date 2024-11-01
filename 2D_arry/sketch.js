// motherload
// luc coutu
// 24/10/30
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//setting map
const MAP_WIDTH = 42;
const MAP_HIGHT = 465;
const grass_lvl = 4;
let tile_size = 5;

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
  images.earth_img;
  images.stone_img;
  images.iron_img;
  images.copper_img;
  images.gold_img;
  images.emrald_img;
  images.treasure_img;
  images.grass_img;
  images.floor_left_img;
  images.floor_right_img;
  images.floor_img;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  let map = gen_grid(MAP_WIDTH, MAP_HIGHT);
}

function draw() {
  background(1, 51, 1);
  draw_grid(map);
}

/**
 * genrates a random grid of ore and dirt with a space on top and stone walls
 * @param {*the height of the map} coloms 
 * @param {*the width of the map} rows 
 * @returns returns a grid map
 */
function gen_grid(coloms, rows){
  let new_grid = [];
  for (let y = 5; y < rows; y++){
    new_grid.push([]);
    for (let x = 6; x < coloms - 5; x++){
      let funny_little_guy = random(1000);
      if (funny_little_guy <= 500){
        new_grid.push(mineables.earth);
      }
      else if (funny_little_guy > 500 && funny_little_guy <= 700){
        new_grid.push(mineables.iron);
      }
      else if (funny_little_guy > 700 && funny_little_guy <= 800){
        new_grid.push(mineables.copper);
      }
      else if (funny_little_guy > 900 && funny_little_guy <= 975){
        new_grid.push(mineables.gold);
      }
      else if (funny_little_guy > 975 && funny_little_guy <= 990){
        new_grid.push(mineables.emrald);
      }
      else if (funny_little_guy > 990 && funny_little_guy <= 1000){
        new_grid.push(mineables.treasure);
      }
    }
    for (let y = 4)
  }
  return new_grid;
}


function draw_grid(grid){
  for (let y = 0; y < MAP_HIGHT; y++){
    for (let x = 0; x < MAP_WIDTH; x++){
      if (grid[x][y] === mineables.earth){
        image(earth_img, x*square_size, y*square_size, square_size, square_size);
      }
    }
  }
}
