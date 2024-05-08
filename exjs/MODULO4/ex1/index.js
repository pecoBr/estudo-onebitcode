const average = (...numbers) => {
  const sun = numbers.reduce((accum, num) => accum + num, 0)
  return sun / numbers.length
}

console.log(`Média Aritimética Simples: ${average(2, 6, 3, 7, 4)}`)
// porque
// 2 + 6 + 3 + 7 + 4 === 22
// e 
// 22 / 5 === 4.4

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
// n -> número, p -> peso
// mediaPonderada({ n: 7, p: 2}, { n: 9, p: 5 }, { n: 3, p: 1 }) === 7.75
// porque
// (7 * 2) + (9 * 5) + (3 * 1) === 62
// e
// 62 / (2 + 5 + 1) === 7.75

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
// mediana(2, 4, 5, 7, 42, 99) === 6
// porque 5 e 7 estão juntos no centro da sequência e
// media(5, 7) === 6
//mediana(15, 14, 8, 7, 3) === 8
// porque 8 está no centro da sequência

const mode = (...numbers) => {
  const quantities = numbers.map(num => [
    num,
    numbers.filter(n => num === n).length
  ])
  quantities.sort((a, b) => b[1] - a[1])
  return quantities[0][0]
} 

console.log (`Moda: ${mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)
// porque:
// 4 aparece 4 vezes
// 5 e 1 aparecem 2 vezes
// 9, 7, 3, 2 e 0 aparecem 1 vez