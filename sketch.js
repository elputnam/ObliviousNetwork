function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB, 360, 100, 100, 100);
  background(0, 100, 20);
  frameRate(5);
}

function draw() {
  background(0, 100, random(20));
  rotateX(frameCount * random(0.01));
  rotateY(frameCount * random(0.01));
  rotateZ(frameCount * random(0.01));
  stroke(175, random(100), random(100));
  // noFill();
  fill(0, 100, random(100));
  cone(width*.25, height*.25, int(random(5,10)), 10);
  push();
  rotate(random(90));
  cone(width*.25, height*.25, int(random(5,10)), 10);
  pop();
  push();
  rotate(random(90, 180));
  cone(width*.25, height*.25, int(random(5,10)), 10);
  pop();
  push();
  rotate(random(180, 270));
  cone(width*.25, height*.25, int(random(5,10)), 10);
  pop();
}
