const primeiroNome = prompt("informe o primeiro nome do recruta:")
const sobrenome = prompt("informe o sobrenome do recruta")
const campoDeEstudo = prompt("Qual é o campo de estudo do recruta")
const anoDeNascimento = prompt("qual é o ano de nascimento do recrutas?")

alert(
    "recuta cadastrado com sucesso!\n" +
    "\nnome completo " + primeiroNome + " " + sobrenome +
    "\ncampo de estudo " + campoDeEstudo + 
    "\nidade: " + (2024 - anoDeNascimento)
)

