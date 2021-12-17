//ccapture
// const T = 1;
// const NUM_FRAMES = 200;
// var capture = false; // default is to not capture frames, can be changed with button in browser
var capturer = new CCapture({
  format:'webm', 
  framerate: 5
});
var btn1;

function setup() {
  // createCanvas(windowWidth, windowHeight, WEBGL);
  createCanvas(1920, 1080, WEBGL);
  colorMode(HSB, 360, 100, 100, 100);
  background(0, 100, 20);
  frameRate(5);

  //CCapture
  btn1 = document.createElement('button');
  btn1.textContent = "save recording";
  document.body.appendChild(btn1);
  btn1.onclick = save_record;
}

function draw() {
  if (frameCount==1) capturer.start(); // start the animation capture
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

  capturer.capture(document.getElementById('defaultCanvas0')); 
  if (frameCount==480){
    save_record();
  }
  print(frameCount);
}

function save_record() {
  capturer.save();
}
