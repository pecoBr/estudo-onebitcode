// Funções de alta-ordem, ou high-order functions, são funções que
// recebem outras funções como parâmetro e as executam em algum momento
function calcular(a, b, operacao) {
    console.log("Realizando uma operação.")
    const resultado = operacao(a, b)
    return resultado
}

// Repare que não usamos os () ao lado do nome da função,
// porque ao fazer isso estaríamos executando a função
function somar(x, y) {
    console.log("Realizando uma soma.")
    return x + y
}

console.log(calcular(3, 5, somar))

// Também podemos escrever funções anônimas dentro da própria chamada da high-order function
console.log(calcular(9, 2, function (x, y) {
    console.log("Realizando substração.")
    return x - y
}))

// Essas funções que são passadas como parâmetros geralmente são chamadas de callbacks
// Um exemplo comum de high-order function no javascript é a função .forEach() dos arrays
function exibirElemento(elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    })
}

const lista = ("maça", "banana", "limão", "laranja")

for (let i = 0; 1 < lista.length; i++){
    exibirElemento(lista[i], i, lista)
}

lista.forEach(exibirElemento)

lista.forEach(function (elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    })
})