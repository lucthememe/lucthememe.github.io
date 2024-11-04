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
  //draw_grid(map);
}

/**
 * genrates a random grid of ore and dirt with a space on top and stone walls
 * @param {*the height of the map} coloms 
 * @param {*the width of the map} rows 
 * @param {*the height of the first layer of the ground} grass_lvl
 * @returns returns a grid map
 */
function gen_grid(coloms, rows, grass, air){
  let new_grid = [];
  let row_temp = [];

  for (let y = 0; y <= air; y++){
    new_grid.push(row_temp);
    console.log(row_temp);
  }

  row_temp = [];

  for (let x = 0; x <= coloms; x++){
    row_temp.push(mineables.grass);
  }
  new_grid.push(row_temp);
  console.log(row_temp);
  row_temp = [];

  for (let y = grass+1; y <= rows; y++){
    for (let x = 6; x <= coloms - 5; x++){
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
      else if (funny_little_guy > 900 && funny_little_guy <= 975){
        row_temp.push(mineables.gold);
      }
      else if (funny_little_guy > 975 && funny_little_guy <= 990){
        row_temp.push(mineables.emrald);
      }
      else if (funny_little_guy > 990 && funny_little_guy <= 1000){
        row_temp.push(mineables.treasure);
      }
    }
    new_grid.push(row_temp);
    console.log(row_temp);
    row_temp = [];
  }
  return new_grid;
}


// function draw_grid(grid){
//   for (let y = 0; y < MAP_HIGHT; y++){
//     for (let x = 0; x < MAP_WIDTH; x++){
//       if (grid[y][x] === mineables.earth){
//         image(earth_img, x*square_size, y*square_size, square_size, square_size);
//       }
//     }
//   }
// }
