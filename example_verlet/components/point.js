class Point {
  constructor(x, y, options = {}) {
    this.position = createVector(x, y)
    this.prevPosition = createVector(x, y)

    this.locked = options.locked ?? false
    this.radius = options.radius ?? 8
    this.gravity = options.gravity ?? createVector(0, 1)
    this.drag = options.drag ?? 0.97
    this.groundFriction = options.groundFriction ?? 0.95
  }

  applyForce(vForce) {
    this.position = p5.Vector.add(this.position, vForce)
  }

  update(options = {}) {
    this.keepInBounds = options.keepInBounds ?? true

    if (!this.locked) {
      const positionBeforeUpdate = this.position

      let velocity = p5.Vector.sub(this.position, this.prevPosition)
      velocity.mult(this.drag)

      // if the point touches the ground also set groundFriction
      if (this.position.y >= height - this.radius && velocity.magSq() > 0.000001) {
        velocity.mult(this.groundFriction)
      }

      this.applyForce(velocity)
      this.applyForce(this.gravity)

      this.prevPosition = positionBeforeUpdate

      if (this.keepInBounds) {
        this.position.x = constrain(this.position.x, this.radius, width - this.radius)
        this.position.y = constrain(this.position.y, this.radius, height - this.radius)
      }
    }
  }

  draw() {
    if (this.locked) {
      fill(250, 20, 20)
    } else {
      fill(150)
    }
    strokeWeight(0)
    stroke(0)
    circle(this.position.x, this.position.y, this.radius)
  }
}
