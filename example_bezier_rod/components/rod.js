function Rod(x, y, len) {
  const p0 = createVector(x, y)
  const p1 = createVector(x, y - len * 0.5)
  const p2 = createVector(x, y - len * 1.1)

  function update() {
    p1.x = map(mouseX, 0, width, -width, width * 2)
    p1.y = height / 2
  }

  function draw() {
    let delta = 0.05

    noFill()
    let prev
    let totalLength = 0
    let tipDrawn

    for (let t = 0; t <= 1.00001; t += delta) {
      let p = quadratic(p0, p1, p2, t)
      if (!prev) prev = p
      const len = prev.dist(p)
      totalLength += len
      let thickness = map(totalLength / rodLength, 1, 0, 2, 10)
      if (totalLength < buttLength) thickness = 15
      strokeWeight(thickness)

      if (totalLength <= rodLength) {
        line(prev.x, prev.y, p.x, p.y)
        prev = p
      } else {
        if (totalLength + len > rodLength && !tipDrawn) {
          tipDrawn = true
          const remainder = p.copy().sub(prev)
          remainder.setMag(rodLength + len - totalLength)
          p = prev.copy().add(remainder)
          line(prev.x, prev.y, p.x, p.y)
          prev = p
        }
      }
    }

    return { tip: prev }
  }

  function quadratic(p0, p1, p2, t) {
    let x1 = lerp(p0.x, p1.x, t)
    let y1 = lerp(p0.y, p1.y, t)
    let x2 = lerp(p1.x, p2.x, t)
    let y2 = lerp(p1.y, p2.y, t)
    let x = lerp(x1, x2, t)
    let y = lerp(y1, y2, t)
    return createVector(x, y)
  }

  return { update, draw }
}
