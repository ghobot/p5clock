var cx, cy;
var secondsRadius;
var minutesRadius;
var hoursRadius;
var clockDiameter;

function setup() {
  createCanvas(640, 360);
  stroke(255);
  smooth(8);

var radius = min(width, height) / 2;
  secondsRadius = radius * 0.72;
  minutesRadius = radius * 0.60;
  hoursRadius = radius * 0.50;
  clockDiameter = radius * 1.8;

  cx = width / 2;
  cy = height / 2;
}

function draw() {
  
    background(0);
    smooth();

  // Draw the clock background



  // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
  var s = second();
  var m = minute();// + norm(second(), 0, 60); 
  var h = hour();// + norm(minute(), 0, 60);

  if (h>16) {
    fill(0,100,255);
    noStroke();
    ellipse(cx, cy, clockDiameter, clockDiameter);
  } else {
    fill(255,255,0);
    strokeWeight(3);
    stroke(0);
    ellipse(cx, cy, clockDiameter, clockDiameter);
  }


  var st = h + ":" + m + ":" + s;
  fill(255);
  textSize(48);
  text(st, .38*width, height/2+20);
  
}