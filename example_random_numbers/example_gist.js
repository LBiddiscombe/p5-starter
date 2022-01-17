// created by greg reimer ("gregreimer" at gmail) http://obadger.com/

function createHistogram(rFunc) {
  var arr = []
  var size = 30
  for (var i = 0; i < size; i++) {
    arr[i] = 0
  }
  for (var i = 0; i < 1000000; i++) {
    arr[Math.floor(rFunc() * size)]++
  }
  var max = Math.max.apply(Math, arr)
  var factor = 50 / Math.max(1, max)
  var hist = arr.map(function (n) {
    n = Math.ceil(n * factor)
    var result = ''
    for (var i = 0; i < n; i++) {
      result += '#'
    }
    return result
  })
  hist.forEach(function (s) {
    console.log(s)
  })
}

console.log('\n------------------\nsimple random number')
createHistogram(function () {
  return Math.random()
})

console.log('\n------------------\naverage of two random numbers')
createHistogram(function () {
  return (Math.random() + Math.random()) / 2
})

console.log('\n------------------\naverage of three random numbers')
createHistogram(function () {
  return (Math.random() + Math.random() + Math.random()) / 3
})

console.log('\n------------------\naverage of four random numbers')
createHistogram(function () {
  return (Math.random() + Math.random() + Math.random() + Math.random()) / 4
})

console.log('\n------------------\nproduct of two random numbers')
createHistogram(function () {
  return Math.random() * Math.random()
})

console.log('\n------------------\nproduct of three random numbers')
createHistogram(function () {
  return Math.random() * Math.random() * Math.random()
})

console.log('\n------------------\nsquare of a random number')
createHistogram(function () {
  return Math.pow(Math.random(), 2)
})

console.log('\n------------------\ncube of a random number')
createHistogram(function () {
  return Math.pow(Math.random(), 3)
})

console.log('\n------------------\nchoose the higher of two random numbers')
createHistogram(function () {
  return Math.max(Math.random(), Math.random())
})

console.log('\n------------------\nchoose the higher of three random numbers')
createHistogram(function () {
  return Math.max(Math.random(), Math.random(), Math.random())
})

console.log('\n------------------\nchoose the higher of four random numbers')
createHistogram(function () {
  return Math.max(Math.random(), Math.random(), Math.random(), Math.random())
})

console.log('\n------------------\nsquare root of a random number')
createHistogram(function () {
  return Math.sqrt(Math.random())
})

console.log('\n------------------\ncube root of a random number')
createHistogram(function () {
  return Math.pow(Math.random(), 1 / 3)
})

console.log('\n------------------\n1.4th root of a random number')
createHistogram(function () {
  return Math.pow(Math.random(), 1 / 1.4)
})

console.log('\n------------------\nsquare root of the product of two random numbers')
createHistogram(function () {
  return Math.sqrt(Math.random() * Math.random())
})

console.log('\n------------------\nfifth root of the product of five random numbers')
createHistogram(function () {
  return Math.pow(Math.random() * Math.random() * Math.random() * Math.random() * Math.random(), 1 / 5)
})
