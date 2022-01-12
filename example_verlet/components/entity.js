class Entity {
  constructor(iterations) {
    this.points = []
    this.sticks = []
    this.iterations = iterations || 16
  }

  addPoint(x, y, options = {}) {
    this.points.push(new Point(x, y, options))
  }

  addStick(p1, p2) {
    this.sticks.push(new Stick(this.points[p1], this.points[p2]))
  }

  updatePoints(options = {}) {
    for (const point of this.points) {
      point.update(options)
    }
  }

  updateSticks() {
    for (const stick of this.sticks) {
      stick.update()
    }
  }

  renderPoints() {
    for (const point of this.points) {
      point.draw()
    }
  }

  renderSticks() {
    for (const stick of this.sticks) {
      stick.draw()
    }
  }

  update(options = {}) {
    this.updatePoints(options)
    for (let i = 0; i < this.iterations; i++) {
      this.updateSticks()
    }
  }

  draw() {
    this.renderSticks()
    this.renderPoints()
  }
}
