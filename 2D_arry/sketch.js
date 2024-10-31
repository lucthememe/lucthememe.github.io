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
let tile_size = 5

// diffineing objects
let grass = 1;
let earth = 2;
let stone = 3;
let iron = 4;
let copper = 5;
let gold = 6;
let emrald = 7;
let treasure = 8;
let floor_left;
let floor_right;
let floor;
let refuel_station;
let ore_shop;
let upgrade_shop;
// setting up variables for img's
let earth_img;
let stone_img;
let iron_img;
let copper_img;
let gold_img;
let emrald_img;
let treasure_img;
let grass_img;
let floor_left_img;
let floor_right_img;
let floor_img;




function setup() {
  createCanvas(windowWidth, windowHeight);
  let map = gen_grid(MAP_WIDTH, MAP_HIGHT);
  //console.log(map);
}

function draw() {
  background(1, 51, 1);
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
        new_grid.push(earth);
      }
      else if (funny_little_guy > 500 && funny_little_guy <= 700){
        new_grid.push(iron);
      }
      else if (funny_little_guy > 700 && funny_little_guy <= 800){
        new_grid.push(copper);
      }
      else if (funny_little_guy > 900 && funny_little_guy <= 975){
        new_grid.push(gold);
      }
      else if (funny_little_guy > 975 && funny_little_guy <= 990){
        new_grid.push(emrald);
      }
      else if (funny_little_guy > 990 && funny_little_guy <= 1000){
        new_grid.push(treasure);
      }
    }
    console.log(new_grid);
  }
  return new_grid;
}