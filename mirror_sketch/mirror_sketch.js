let capture;
let width = 500;
let height = 500;
let weather="";
let json;
let img;

function preload() {
  let weather_url="https://api.openweathermap.org/data/2.5/weather?q=Lubbock&units=imperial&APPID=3ef80adea47b29f2cdc09057cb0b1fa6";
json=loadJSON(weather_url);
}

function setup() {
  let canvas = createCanvas(500, 500);
  capture = createCapture(VIDEO);
  capture.size(500, 500);
  capture.hide();
  canvas.position(0,0);
  canvas.parent('webcam');
  weather=json.main.temp;
  img = loadImage('1.png'); // Load the image
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
  text(weather+ "\xB0F",10,30);
  image(img, 20, 50);
  m = month();
  d = day();
  y = year();
  h = hour();
  mi = minute();
  se = second();
  text(m+'/'+d+'/'+y,357,30);
  textSize(25);
  text(h+':'+mi+':'+se,400,60);
  
}
