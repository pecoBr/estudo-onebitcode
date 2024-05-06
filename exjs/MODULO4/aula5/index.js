function normalSum(a, b) {
  return a + b
}

console.log(`Soma normal: ${normalSum(2, 2)}`)

const anonymouusSum = function (a,b) {
  return a + b
}

console.log(`Soma anônima: ${anonymouusSum(2, 2)}`)

const arrowSum = (a, b) => {
  return a + b
}

console.log(`Soma arrow funtion: ${arrowSum(2, 2)}`)

const subtract = (a, b) => a - b

console.log(`Suubtração: ${subtract(5, 2)}`)

const double = n => `O dobro de ${n} é ${n * 2}`

const number = 21
console.log(double(number))

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startingWithP = towns.filter(town => town[0] === 'P')

console.log(startingWithP)