function sun(...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0)
}

console.log(sun(1, 1))
console.log(sun(2, 2, 2, 2, 2, 2))
console.log(sun(222, 3, 44, 5, 1233, 22, 2))