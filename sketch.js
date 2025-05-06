// Declare variables for shape radii
let bg;
let y = 0
let secondsRadius;
let minutesRadius;
let hoursRadius;
let millisRadius
let clockDiameter;
let moonImage
let moonSize = 150
let earthImage
let earthSize = 200
let sunImage
let sunSize = 250
let starImage
let starSize = 100



function preload(){
  moonImage = loadImage("moon.png")
  earthImage = loadImage("earth.png")
  sunImage = loadImage("sun.png")
  starImage - loadImage ("star.png")
  bg = loadImage ("starrysky.jpg")
}

function setup() {
  
  createCanvas(2560, 1600);
  stroke(230);
  angleMode(DEGREES);

  // Set radius for each shape based on canvas dimensions
  let radius = min(width, height) / 2;
  secondsRadius = radius * 0.60;
  minutesRadius = radius * 0.55;
  millisRadius = radius * 0.7
  hoursRadius = radius * 0.48;
  clockDiameter = radius * 1.5;

  describe();
}

function draw() {
  background(bg);

  // Move origin to center of canvas
  translate(width / 2, height / 2);

  // Draw the clock background
noFill ();
  stroke (255,255,255,255)
  strokeWeight(3);
  ellipse(0, 0, clockDiameter, clockDiameter);
  ellipse(0, 0, clockDiameter -250, clockDiameter -250);
  ellipse(0, 0, clockDiameter -500, clockDiameter -500);
  ellipse(0, 0, clockDiameter + 200, clockDiameter + 200);

  // Calculate angle for each hand
  let millisecondAngle = map (millis(), 0, 360, 0, 60);
  let secondAngle = map(second(), 0, 60, 0, 360);
  let minuteAngle = map(minute(), 0, 60, 0, 360);
  let hourAngle = map(hour(), 0, 12, 0, 360);

  stroke(230);

  // Second hand
  push();
  rotate(secondAngle);
  strokeWeight(1);
  image(moonImage,-secondsRadius,-secondsRadius, moonSize, moonSize);
  pop();

  // Minute hand
  push();
  strokeWeight(2);
  rotate(minuteAngle);
  image(earthImage, -minutesRadius, -minutesRadius, earthSize, earthSize);
  pop();

  // Hour hand
  push();
  strokeWeight(4);
  rotate(hourAngle);
  image(sunImage, -hoursRadius, -hoursRadius, sunSize, sunSize);
  pop();

  

}
