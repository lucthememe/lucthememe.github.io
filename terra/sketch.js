// luc coutu
// 24/10/7

//seting up variables
let terrain = [];
let spawn_height = 0;
let char;
let death;
let move_beam = 0;
let beam_x = 0;
let beam_y = 0;
let live = 0;
let curant_rect = 20;
let beam_bottom = 0;
let beam_top = 0;
let dead = false

/**
 * preloads a sound
 */
function preload(){
  death = loadSound("death.mp3");

}

/**
 * sets up thing that need to run before the program starts drawing
 */
function setup() {
  createCanvas(windowWidth, windowHeight);
  genrateTerrain(1);
  spawn_char(spawn_height + 50);
}

/**
 * draws frames
 */
function draw() {
  background(0);
  spawn_beam();
  draw_char();
  move_char();
  in_beam();
  move_beam += 5;
}

/**
 * genrates a wavey line
 * @param {the width of the rectangles it makes} theWidth 
 */
function genrateTerrain(theWidth){
  let counter = 0;
  let time = 0;
  let timeDelta = 0.001;
  for (let x = 0; x < width * 3; x += theWidth){
    let theHeight = noise(time) * (height *0.8);
    counter++;
    if (counter === 1){
      spawn_height = height - theHeight;
    }
    let someRect = spawn_rect(x, theHeight, theWidth);
    terrain.push(someRect);
    time += timeDelta;
  }
}

/**
 * makes a rectangle 
 * @param {*the left side of the rect} leftSide 
 * @param {*the height of the rect} rectHeight 
 * @param {*the width of the rect} rectWidth 
 * @returns a rectangle 
 */
function spawn_rect(leftSide, rectHeight, rectWidth){
  let theRect = {
    x: leftSide,
    y: height - rectHeight,
    w: rectWidth,
    h: 100
  };
  return theRect;
}

/**
 * spawns and sets up the character
 * @param {*the y pos for the character to spawn at } Y 
 */
function spawn_char(Y){
    let the_char = {
      y: Y,
      x: 0,
      speed: 5,
      size: 20,
    };
    char = the_char;
    rect(char.x, char.y, char.size, char.size);
  }

/**
 * controls the movement of the character
 */
function move_char(){
  if (keyIsDown(87)){
    char.y = char.y - char.speed;
  }
  if (keyIsDown(83)){
    char.y = char.y + char.speed;
  }
}

/**
 * draws the character curant position
 */
function draw_char(){
  if (dead === false){
    fill(255);
    rect(char.x, char.y, char.size, char.size);
  }
}


/** 
* spawns 2 beams that move acrose the screen
*/
function spawn_beam(){
  noStroke();
  
  for (let someRect of terrain){
    beam_x = someRect.x - move_beam;
    beam_y = someRect.y;
    
    fill(150, 0, 200);
    rect(beam_x, beam_y - 10, someRect.w, someRect.h + 20);
    fill(150, 0, 250);
    rect(beam_x, beam_y, someRect.w, someRect.h);
    }
    curant_rect += 5;
}

/**
 * checks if the player is in the beam
 */
function in_beam(){
  beam_top = terrain[curant_rect].y;
  beam_bottom = beam_top+100;
  
  if (char.y < beam_top || char.y > beam_bottom - char.size){
      dead = true;
      if (!death.isPlaying() && live === 0){
        death.play()
      }
      live++
    }
}