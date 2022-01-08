let canvas

function setup() {
  canvas = createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(0)
  rectMode(CENTER)
  rect(width / 2, height / 2, 100, 80)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
