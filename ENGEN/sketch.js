// engen
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// i suffered


function setup() {
}

function draw() {
  background(220);
}

class Entity{
  constructor(position = {x: 0, y: 0}){
    this.components = [];
    this.priorityMap = new Map();

    const TransForm = new TransForm(this.position, 0, 1);

  }

  addComponent(component, priority){
    this.components
  }

}

class GameEngine{
  constructor(){
    this.entites;

  createCanvas(windowWidth, windowHeight);
  noStroke();

  this.degugMode = true;
  this.systems = [];
  }
}