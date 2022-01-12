let rod
const rodLength = 500
const buttLength = rodLength * 0.25

function setup() {
  createCanvas(600, 600)
  rod = new Rod(width / 2, height, rodLength)
}

function draw() {
  background(0)
  stroke(255)

  if (mouseIsPressed) {
    rod.update(map(mouseX, 0, width, -width, width * 2), height / 2)
  }

  // draw rod and then some line
  let { tip } = rod.draw()
  strokeWeight(0.3)
  line(tip.x, tip.y, width / 2, 0)
}
