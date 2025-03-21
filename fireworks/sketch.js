// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const numOfPartical = 100;

class Parical {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.size = 5;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.opasity = 255;
  }

  display(){
    noStroke();
    fill(this.r, this.g, this.b, this.opasity);
    circle(this.x, this.y, this.size);
  }

  update(){
    this.y += this.dy;
    this.x += this.dx;

    this.opasity--;
  }

  thisHeavyIsDead(){
    return this.opasity<=0;
  }

}

let theFireWorks =[];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let fireWorks of theFireWorks){
    if (!fireWorks.thisHeavyIsDead()){
      fireWorks.update();
      fireWorks.display();
    }
    else {
      let index = theFireWorks.indexOf(fireWorks);
      fireWorks.splice(index, 1);
    }
  }
}


function keyPressed(){
  for(let i = 0; i<numOfPartical; i++){
    let somePartical = new Parical(mouseX, mouseY);
    theFireWorks.push(somePartical);
  }
}