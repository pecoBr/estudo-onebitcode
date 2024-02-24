const atacante = prompt("Qual o nome do atacante?")
const poderDeAtaque = parseFloat(prompt("Qual é o poder de ataque dele?"))

const defensor = prompt("Qual o nome do defensor?")
const pontosDeHp = parseFloat(prompt("Quantos pontos de HP ele tem?"))
const poderDeDefesa = parseFloat(prompt("Qual seu poder de defesa?"))
const possuiEscudo = prompt("Ele possui escudo? (Sim/Nao)")

let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Nao") {
    danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo ==="Sim" ) {
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

pontosDeHp - danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
  atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
  defensor + "\nPontos de vida: " + pontosDeVida +
  "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
)