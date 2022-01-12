let points = []
let sticks = []
numIterations = 10
let box

function setup() {
  createCanvas(600, 400)

  let prev = new Point(300, 300, { locked: true, radius: 16 })
  points.push(prev)
  for (let i = 1; i < 10; i++) {
    const p = new Point(300 + i * 20, 300)
    points.push(p)
    const s = new Stick(prev, p)
    sticks.push(s)
    prev = p
  }

  box = new Entity(10)
  box.addPoint(100, 100, { vx: 50, radius: 16 }) //x, y, vx, vy, locked
  box.addPoint(200, 100)
  box.addPoint(200, 250)
  box.addPoint(100, 200)

  box.addStick(0, 1)
  box.addStick(1, 2)
  box.addStick(2, 3)
  box.addStick(3, 0)
  box.addStick(3, 1)
}

function draw() {
  background(33)

  box.update()
  box.draw()

  for (const point of points) {
    point.update()
  }

  for (let i = 0; i < numIterations; i++) {
    for (const stick of sticks) {
      stick.update()
    }
  }

  // Render
  for (const stick of sticks) {
    stick.draw()
  }

  for (const point of points) {
    point.draw()
  }

  //noLoop()
}
