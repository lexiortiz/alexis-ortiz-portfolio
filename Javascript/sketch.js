// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/17WoOqgXsRM

const stars = [];
let speed;
let canvasColor;
let starColor;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  // Move canvas to hero canvas div
  canvas.parent('hero-canvas-div');
  // Reset the location of a star that drifts out of frame
  // Star count = 800
  for (var i = 0; i < 800; i++) {
    stars[i] = new Star();
  }
}

// function draw() {
//   // Control speed of stars
//   speed = map(200, 0, width, 0, 20);
//   // Background color
//   canvasColor = color('rgba(23, 16, 28, 0.5)');
//   // Star color
//   starColor = color('rgb(248, 246, 244)');
//   background(canvasColor);
//   // Begin from center of canvas
//   translate(width / 2, height / 2);
//   // Create and update the stars
//   for (var i = 0; i < stars.length; i++) {
//     stars[i].update();
//     stars[i].show();
//   }
// }

function Star() {
  // Star shape
  this.x = random(-width/2, width/2);
  this.y = random(-height/2, height/2);
  // 3D illusion of moving stars
  this.z = random(width);
  this.pz = this.z;

  this.update = function() {
    this.z = this.z - speed;
    // If z is less than 0, change direction
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  this.show = function() {
    fill('#999');
    noStroke();
    // Start animation from far away
    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);
    // Close stars are big, far are small
    var r = map(this.z, 0, width, 12, 0);
    ellipse(sx, sy, r, r);
    // Create star lines 
    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);
    //Reset the location, previous z start at z
    this.pz = this.z;
    stroke('#333');
    line(px, py, sx, sy);
  }
}