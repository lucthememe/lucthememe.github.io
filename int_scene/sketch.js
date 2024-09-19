// int scene


let x = 100
let y = 100
let speed = 2

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  ballmove()
}

function ballmove(){
  circle(x, y, 50)

}