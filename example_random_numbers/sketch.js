let counts = []
const spans = []
const iterations = 100
const size = 30

function setup() {
  const canvas = createCanvas(600, 400)

  const w = width / size - 0
  console.log(canvas)

  for (let i = 0; i < size; i++) {
    counts[i] = 0
    spans[i] = createSpan(i)
    spans[i].position(canvas.canvas.offsetLeft + i * w, canvas.canvas.offsetTop + height * 1.4)
  }

  /*

  simpleRandom()
  averageRandoms(count)
  productRandoms(count)
  maxOfRandoms(count)
  powerRandom(power)
  rootRandom(root)
  rootOfProductsRandom(root, count)

  */

  for (let i = 0; i < iterations; i++) {
    const rnd = Math.floor(rootOfProductsRandom(3, 5) * size)
    counts[rnd] += 1
  }

  const highestCount = max(...counts)
  console.log(...counts)

  console.log(`${iterations} interations:`)
  for (let i = 0; i < size; i++) {
    const percent = round((counts[i] / iterations) * 100, 3)

    fill(map(counts[i], 0, highestCount, 255, 0))
    stroke(127)
    rect(i * w, height, w, -height * (counts[i] / highestCount))

    //console.log(i * w, height, w, -height * (counts[i] / highestCount))
    console.log(i, counts[i], `${percent}%`)
  }
}
