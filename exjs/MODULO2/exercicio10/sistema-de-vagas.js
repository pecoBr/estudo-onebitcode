const vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice){
        //1. nome, (x candidatos)
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")

    alert(vagasEmTexto)
}

function novaVaga() {
    const nome = prompt("Informe um nome para vaga:")
    const descricao = prompt("Agora, informe uma descrição para vaga:")
    const dataLimite = prompt("Informe a data limite para esta vaga (dd/mm/aaaa)")

    const comfirmacao = comfirm(
        "Deseja criar uma vaga com essas informações?\n" +
        "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite
    )

    if (comfirmacao) {
        const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
        vagas.push(novaVaga)
        alert("Vaga criada.")
    }
}

function exibirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja exibir:")

    if (indice >= vagas.length || indice < 0) {
        alert("Índice inválido")
        return 
    }

    const vaga = vagas[indice]

    const candidatosEmTesto = vaga.candidatos.reduce(function (textoFinal, candidatos) {
        return textoFinal + "\n - " + candidatos
    }, "")

    alert(
            "Vaga nº " + indice +
            "\nNome: " + vaga.nome +
            "\nDescrição: " + vaga.descricao +
            "\nData limite: " + vaga.dataLimite +
            "\nQuantidade de candidatos: " + vaga.candidatos.length +
            "\nCandidatos inscritos: " + candidatosEmTesto
    )
}

function inscreverCandidato() {
    const candidato = prompt("Informe o nome do(a) candisato(a):")
    const indice = prompt("Informe o índice da vaga para qual o(a) candidato(a) deseja se inscrever.")
    const vaga = vagas(indice)

    const comfirmacao = confirm(
        "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )

    if (comfirmacao) {
        vaga.candidatos.push(candidato)
        alert("Inscrição realizada.")
    }
}

function excluirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja excluir:")
    const vaga = vagas[indice]

    const comfirmacao = comfirm(
        "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )

    if (comfirmacao) {
        vagas.splice(indice, 1)
        alert("Vaga excluida.")
    }
}

function exibirMenu() {
    const opcao = prompt(
      "Cadastro de Vagas de Emprego" +
      "\n\nEscolha uma das opções" +
      "\n1. Listar vagas disponíveis" +
      "\n2. Criar uma nova vaga" +
      "\n3. Visualizar uma vaga" +
      "\n4. Inscrever um(a) candidato(a)" +
      "\n5. Excluir uma vaga" +
      "\n6. Sair"
    )
  
    return opcao
}

function executar() {
    let opcao = ""
    
    do {
        opcao = exibirMenu()

        switch(opcao) {
            case "1":
                listarVagas()
                break
            case "2":
                novaVaga()
                break
            case "3":
                exibirVaga()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                ("Opção inálida.")    
        }
    } while(opcao !== "6")
}

executar()