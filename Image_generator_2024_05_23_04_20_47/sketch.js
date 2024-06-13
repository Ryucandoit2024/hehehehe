var pictureList; // this variable is used in preload() and in draw() so we create it outside of those sections.

let angle = 0;
let stepSize = 5;
let radius = 200;
let numParticles = 100;
let particles = [];

function preload() {
  pictureList = [];
  var imgCount = 7; // total number of images
  // use a for loop to load all 7 images into the array
  for (var i = 0; i < imgCount; i++) {
    pictureList[i] = loadImage((i + 1) + ".png");
  }
}

function setup() {
  createCanvas(800, 800);
  noStroke();
  fill(255, 50);

  // Initialize particles
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  // Change background color
  let bgColor = color((frameCount * 0.5) % 360, 100, 50, 0.1);
  background(bgColor);

  translate(width / 2, height / 2);

  // Draw squares
  var n = 60;
  for (var i = 0; i < n; i++) {
    var r = int(random(200, 250));
    var g = int(random(160, 195));
    var b = int(random(170, 190));

    fill(r, g, b);
    noStroke();

    var x = int(random(-400, 400));
    var y = int(random(-400, 400));

    rect(x, y, random(10, 300), random(10, 300));
  }

  // Draw images
  var n = 45;
  for (var i = 0; i < n; i++) {
    var r = int(random(0, 7));
    var randomImage = pictureList[r];

    var x = int(random(-300, 300));
    var y = int(random(-300, 300));

    push();
    translate(x, y);
    rotate(HALF_PI / 3.0);
    imageMode(CENTER);
    image(randomImage, 0, 0, randomImage.width, randomImage.height);
    pop();
  }

  // Draw metaphysical curve movement for particles
  for (let i = 0; i < numParticles; i++) {
    let x = cos(angle + i) * (radius + sin(frameCount * 0.05 + i) * 50);
    let y = sin(angle + i) * (radius + sin(frameCount * 0.05 + i) * 50);
    fill((frameCount + i * 10) % 360, 100, 100);
    ellipse(x, y, 10, 10);
  }

  angle += radians(stepSize);

  // Update and draw particles
  for (let particle of particles) {
    particle.update();
    particle.show();
  }
}

// Particle class definition
class Particle {
  constructor() {
    this.pos = createVector(0, 0);
    this.vel = p5.Vector.random2D().mult(random(1, 2));
    this.acc = createVector(0, 0);
    this.color = color(random(360), 100, 100);
    this.size = random(2, 8);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    // If particle goes off screen, reposition it to the center
    if (this.pos.x > width / 2 || this.pos.x < -width / 2 || this.pos.y > height / 2 || this.pos.y < -height / 2) {
      this.pos.set(0, 0);
      this.vel = p5.Vector.random2D().mult(random(1, 2));
      this.color = color(random(360), 100, 100);
    }
  }

  show() {
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}

