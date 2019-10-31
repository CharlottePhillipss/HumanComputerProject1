let capture;
let width = 500;
let height = 500;

function setup() {
  let canvas = createCanvas(500, 500);
  capture = createCapture(VIDEO);
  capture.size(500, 500);
  capture.hide();
  canvas.position(0,0);
  canvas.parent('webcam');
}

function draw() {
  background(255);
  translate(width, 0);
  scale(-1.0, 1.0);
  image(capture, 0, 0, 500, 500);
  translate(width, 0);
  scale(-1.0, 1.0);
  
  fill(255);
  textSize(32);
  text('Hi there!', 0, 50);
  
  
}
