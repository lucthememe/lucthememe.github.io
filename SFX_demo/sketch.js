// SFX demo

let bg_music;
let boos;

function preload(){
  bg_music = loadSound("2025-01-12 21-17-23.mkv");
  boos = loadSound("boos.ogg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg_music.amp(1.0);
}

function draw() {
  background(220);
}

function keyPressed(){
  if (!bg_music.isPlaying()) {
    bg_music.loop();
  }
}