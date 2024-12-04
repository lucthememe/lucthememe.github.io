// oopIN

class Shape {
  constructor(x, y, colour) {
    this.x = x;
    this.y = y;
    this.colour = colour;
  }

  display (){
    noStroke();
    fill(this.colour);
  }

  move(){
    this.x += random(-2, 2);
    this.y += random(-2, 2);
  }
}

class Circle extends Shape {
  constructor(x, y, colour, radius){
    super(x, y, colour);
    this.radius = radius;
  }

  display() {
    super.display();
    circle(this.x, this.y, this.radius*2);
  }
}

class Square extends Shape {
  constructor(x, y, colour, size){
    super(x, y, colour);
    this.size = size;
  }

  display() {
    super.display();
    square(this.y, this.y, this.size);
  }
}

let theShapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i=0;i<20;i++){
    if (random(100) > 50){
      let theCircle = new Circle(random(width), random(height), color(random(255), random(255), random(255), random(20, 50)));
      theShapes.push(theCircle);
    }
    if (random(100) > 50){
      let theSquare = new Square(random(width), random(height), color(random(255), random(255), random(255), random(20, 50)));
      theShapes.push(theSquare);
    }
  }
}

function draw() {
  background(220);

  for (let someShape of theShapes){
    someShape.move();
    someShape.display();
  }
}
