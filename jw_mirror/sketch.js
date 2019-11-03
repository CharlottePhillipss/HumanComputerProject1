let capture;
let width = 1024;
let height = 764;
let canvas;



function setup() {

  canvas = createCanvas(width, height);
  canvas.position(0,0);
  canvas.style('z-index', -1);
  capture = createCapture(VIDEO);
  capture.position(0,0);
  capture.style('z-index', -1);
  capture.size(width, height);
  capture.hide();

}

function draw() {
  background(175);
  // background(255);
  translate(width, 0);
  scale(-1.0, 1.0);
  image(capture,0,0, width, height);
  translate(width, 0);
  scale(-1.0,1.0);


}

function mousePressed(){
  rect(mouseX, mouseY, 55, 55);
}