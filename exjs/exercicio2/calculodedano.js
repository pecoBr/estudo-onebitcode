const atacante = prompt("Qual o nome do atacante?")
const poderDeAtaque = parseFloat(prompt("Qual é  poder de ataque dele?"))

const defensor = prompt("Qual é o nome do defensor?")
let pontosDeHp = parseFloat(prompt("Quantos pontos de Hp ele tem?"))
const poderDeDefesa = parseFloat(prompt("Qual é o seu poder de defesa?"))
const possuiEscudo = prompt("Ele possui escudo? (Sim/Não)")

let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
    danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

pont