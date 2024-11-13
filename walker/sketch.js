// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Walker{
  constructor(x, y, colour){
    this.x = x;
    this.y = y;
    this.speed = 4;
    this.size = 2;
    this.colour = colour;
  }

  display(){
    fill(this.colour);
    noStroke();
    circle(this.x, this.y, this.size*2);
  }

  movement(){
    let choice = random(100);
    if (choice <= 25){
      this.y -= this.speed;
    }
    else if (choice < 50 ){
      this.y += this.speed;
    }
    else if (choice <= 75){
      this.x -= this.speed;
    }
    else{
      this.x += this.speed;
    }
  }
}

let luc;
let fred;
let mike;

function setup() {
  createCanvas(windowWidth, windowHeight);
  luc = new Walker(width/2, height/2, "green");
  fred = new Walker(width/2, height/2, "red");
  mike = new Walker(width/2, height/2, "blue");
}

function draw() {
  //background(220);
  luc.movement();
  mike.movement();
  fred.movement();

  luc.display();
  mike.display();
  fred.display();
}
