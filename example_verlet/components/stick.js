const stick_thickness = 4

class Stick {
  constructor(pointA, pointB) {
    this.pointA = pointA
    this.pointB = pointB
    this.length = dist(pointA.position.x, pointA.position.y, pointB.position.x, pointB.position.y)
  }

  update() {
    const stickCenter = p5.Vector.add(this.pointA.position, this.pointB.position).div(2)
    const stickDir = p5.Vector.sub(this.pointA.position, this.pointB.position)
      .normalize()
      .mult(this.length / 2)

    if (!this.pointA.locked) {
      this.pointA.position = p5.Vector.add(stickCenter, stickDir)
    }
    if (!this.pointB.locked) {
      this.pointB.position = p5.Vector.sub(stickCenter, stickDir)
    }
  }

  draw() {
    strokeWeight(stick_thickness)
    stroke(250)
    line(this.pointA.position.x, this.pointA.position.y, this.pointB.position.x, this.pointB.position.y)
  }
}
