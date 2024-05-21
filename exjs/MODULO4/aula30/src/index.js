const average = (...numbers) => {
  const sun = numbers.reduce((accum, num) => accum + num, 0)
  return sun / numbers.length
}

console.log(`Média Aritimética Simples: ${average(2, 6, 3, 7, 4)}`)

const weightedAvarege = (...entries) => {
  const sun = entries.reduce((accum, { number, weigth }) => accum + (number * (weigth ?? 1)), 0)
  const weigthSun = entries.reduce((accum, entry) => accum + (entry.weigth ?? 1), 0)
  return sun / weigthSun
}

console.log(`Média Ponderada: ${weightedAvarege (
  { number: 9, weigth: 3 },
  { number: 7 },
  { number: 10, weigth: 1}
)}`)

const median = (...numbers) => {
  const orderedNumbers = [...numbers].sort((a, b) => a - b)
  const middle = Math.floor(orderedNumbers.length / 2)
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle]
  }

  const firstMedian = orderedNumbers[middle - 1]
  const secondMedian = orderedNumbers[middle]
  return average(firstMedian, secondMedian)
}

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`)

const mode = (...numbers) => {
  const quantities = numbers.map(num => [
    num,
    numbers.filter(n => num === n).length
  ])
  quantities.sort((a, b) => b[1] - a[1])
  return quantities[0][0]
} 

console.log (`Moda: ${mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)