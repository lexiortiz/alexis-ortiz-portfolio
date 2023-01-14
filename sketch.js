var xiketic;
var cloudBlu;
const particles = [];

function setup() {
  var canvas = createCanvas(300, 100);
  canvas.parent('sensory-canvas');
  heliotrope = color(210, 133, 254); 
  xiketic = color(21, 17, 24); // bkgd
  cloudBlu = color(116, 75, 139, 35); // particles
  //create number of particles based on the window width
  const particlesLength = Math.floor(300 / 1.9);
  //go through and add to particles array
  for(let i = 0; i < particlesLength; i++) {
    particles.push(new Particle());
  }
  frameRate(40);
}

function draw() {
  background(xiketic);
  //for each particle, draw a circle and update velocity
  particles.forEach((particle, index) => {
     particle.update();
     particle.draw();
  });
}

class Particle {
  constructor () {
    //objects position
    this.pos = createVector(random(300), random(100));
    //objects velocity
    this.vel = createVector(random(5, -5), random(-10, 10));
    //objects size
    this.size = 65;
  }
  
  //update movement by adding velocity
  update () {
    this.pos.add(this.vel);
    this.edges();
  }
  
  //draw single particle
  draw() {
    noStroke();
    fill(cloudBlu);
    ellipse(this.pos.x, this.pos.y, this.size);
  }
  
  //detect edges 
  edges() {
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }
    
    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }
}
