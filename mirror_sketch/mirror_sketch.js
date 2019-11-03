let capture;
let width = 1024;
let height = 764;
let weather="";
let json;
let img;
let canvas;

function preload() {
  let weather_url="https://api.openweathermap.org/data/2.5/weather?q=Lubbock&units=imperial&APPID=3ef80adea47b29f2cdc09057cb0b1fa6";
json=loadJSON(weather_url);
}

function setup() {
  canvas = createCanvas(width, height);
  canvas.position(0,0);
  canvas.style('z-index', -1);
  capture = createCapture(VIDEO);
  capture.position(0,0);
  capture.style('z-index', -1);
  capture.size(width, height);
  capture.hide();
  canvas.parent('webcam');
  weather=json.main.temp;
  img = loadImage('cloudy.png'); // Load the image
}

function draw() {
  background(175);
  // background(255);
  translate(width, 0);
  scale(-1.0, 1.0);
  image(capture,0,0, width, height);
  translate(width, 0);
  scale(-1.0,1.0);
  
  fill(255);
  textSize(32);
  text(weather+ "\xB0F",10,30);
  image(img, 10, 25);
  m = month();
  d = day();
  y = year();
  h = hour();
  mi = minute();
  se = second();
  text(m+'/'+d+'/'+y,870,30);
  textSize(25);
  text(h+':'+mi+':'+se,900,60);
  let cal = select("#calendar");
  cal.position(781,75);
  let spot = select("#spotify");
  spot.position(10, 120);
  let news = select("#news");
  news.position(0, 700);
}

