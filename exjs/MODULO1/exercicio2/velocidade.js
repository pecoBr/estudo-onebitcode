const veiculo1 = prompt("informe o nome do veículo")
const velocidade1 = parseFloat(prompt("informe a velocidade do veículo"))
const veiculo2 = prompt("informe o nome do segundo veículo")
const velocidade2 = parseFloat(prompt("informe a velocidade do segundo veículo"))

if (velocidade1 > velocidade2) {
    alert(veiculo1 + " foi mais rapido que " + veiculo2)
} else if (velocidade2 > velocidade1) {
    alert(veiculo2 + " foi mais rapido que " + veiculo1)
} else {
    alert(veiculo1 + " e " + veiculo2 + " tiveram a mesma velocidade")
}