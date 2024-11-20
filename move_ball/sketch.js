// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnPoint(width/2, height/2);
}

function draw() {
  background(50);
  for (let point of points){
    point.update(points);
  }

  for (let point of points){
    point.display();
  }
}

function mousePressed(){
  spawnPoint(mouseX, mouseY);
}

function spawnPoint(x, y){
  let somePoint = new MoveingPoint(x, y);
  points.push(somePoint);
}

class MoveingPoint{
  constructor(x, y){
    this.x = x;
    this.y =y;
    this.speed = 10;
    this.radius = 15;
    this.minRadius = 15;
    this.maxRadius = 50;
    this.colour = color(0, random(255), 0);
    this.xTime = random(1000);
    this.yTime = random(1000);
    this.deltaTime = 0.1;
    this.reach = 150;
    

  }

  display(){
    noStroke();
    fill(this.colour);
    circle(this.x, this.y, this.radius*2);

  }

  update(pointsArray){
    this.move();
    this.wrap();
    this.conectTo(pointsArray);
    //this.ajustSizeMouse();
  }

  ajustSizeMouse(){
    let mouseDist = dist(this.x, this.y, mouseX, mouseY);
    if (mouseDist < this.reach){
      this.radius = map(mouseDist, 0, this.reach, this.maxRadius, this.minRadius);
    }
    else{
      this.radius = 15;
    }
  }

  move() {
    //ajhgsfksnhdgvbusdgbuisdgbuyuiydfgsduysvgusgfbdkcugydsbuyrkbvyfgskduingtvugyerionusgvyninygfinwgheoivufgnsiyegofyivseoinygsioydgvfoisygudiluygfshdfliu
    let dx = noise(this.xTime);
    let dy = noise(this.yTime);
  
    this.dx = map(dx, 0, 1, -this.speed, this.speed);
    this.dy = map(dy, 0, 1, -this.speed, this.speed);
  
    this.x += this.dx;
    this.y += this.dy;
    this.xTime += this.deltaTime;
    this.yTime += this.deltaTime;
  }

  wrap(){
    if (this.x  > width + 15){
      this.x = 0 - 15;
    }
    if (this.x  < 0 - 15){
      this.x = width + 15;
    }
    if (this.y  > height + 15){
      this.y = 0 - 15;
    }
    if (this.y  < 0 - 15){
      this.y = height + 15;
    }
  }
  
  conectTo(pointsArry){
    for (let otherPont of pointsArry){
      let pointDistance = dist(this.x, this.y, otherPont.x, otherPont.y);
      if (pointDistance < this.reach){
        stroke(this.colour);
        line(this.x, this.y, otherPont.x, otherPont.y);
      }
    }

  }

}
