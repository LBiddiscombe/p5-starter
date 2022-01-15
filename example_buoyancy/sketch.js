let float
let floatSize = 8
let dragC = 0.4
let buoyancyC = 1.5
let gravity

function setup() {
  createCanvas(400, 400)
  gravity = createVector(0, 0.2)
  float = new Mover(width / 2, 5, floatSize)
}

function draw() {
  background(0)

  let gravity = createVector(0, 0.2)
  let weight = p5.Vector.mult(gravity, float.mass)
  float.applyForce(weight)

  if (float.pos.y > height / 2) {
    float.drag(dragC)
  }

  // simulate
  if (mouseIsPressed) {
    const force = createVector(random(-2, 2), random(1, 10))
    float.applyForce(force)
  }

  // calculate volume fraction of object that is submerged
  const dr = (float.pos.y - height / 2) / floatSize
  let ratio
  if (dr <= -1) {
    ratio = 0
  } else if (dr < 1) {
    ratio = 0.5 + 0.5 * dr // for cuboid //ratio = 0.5 + 0.25 * dr * (3 - dr * dr) // for sphere
  } else {
    ratio = 1
  }
  float.buoyancy(buoyancyC, ratio, weight)

  float.update()
  float.edges()
  float.show()

  fill(125, 250)
  noStroke()
  rect(0, height / 2, width, height / 2)
  stroke(255)
  strokeWeight(2)
  line(0, height / 2, width, height / 2)
}
