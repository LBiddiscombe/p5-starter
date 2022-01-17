function simpleRandom() {
  return Math.random()
}

function averageRandoms(count) {
  let result = 0

  for (let i = 0; i < count; i++) {
    result += Math.random()
  }

  return result / count
}

function productRandoms(count) {
  let result = Math.random()

  for (let i = 1; i < count; i++) {
    result *= Math.random()
  }

  return result
}

function maxRandoms(count) {
  let result = 0

  for (let i = 0; i < count; i++) {
    const rnd = Math.random()
    if (rnd > result) result = rnd
  }

  return result
}

function minRandoms(count) {
  let result = Math.random()

  for (let i = 1; i < count; i++) {
    const rnd = Math.random()
    if (rnd < result) result = rnd
  }

  return result
}

function powerRandom(power) {
  return Math.pow(Math.random(), power)
}

function rootRandom(root) {
  return Math.pow(Math.random(), 1 / root)
}

// Something like rootOfProductsRandom(3, 5) might work for fish size distro?
function rootOfProductsRandom(root, count) {
  return Math.pow(productRandoms(count), 1 / root)
}

// function getRandomInt(imin, imax) {
//   return floor(random(imin, imax))
// }

// function getRandomIntPow(imin, imax, options = {}) {
//   let power = options.power || 2
//   const reversed = options.reversed || false

//   if (reversed) {
//     return min(imax - 1, floor(imin + (imax - imin) * (1 - pow(random(), power))))
//   }

//   return floor(imin + (imax - imin) * pow(random(), power))
// }

// function getRandomIntAvg(imin, imax, options = {}) {
//   let times = options.value || 3

//   let result = 0
//   times = floor(max(times, 1))
//   for (let i = 0; i < times; i++) {
//     result += random(imin, imax)
//   }
//   return floor(result / times)
// }
