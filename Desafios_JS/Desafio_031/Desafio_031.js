const usuario = []

const nome = document.getElementById("nome-usuario")

const idade = document.getElementById("idade-usuario")

const divisao = document.getElementById("cartao-usuario")

function cadastrar(){
    const nomeValor = nome.value.trim()
    const idadeTexto = idade.value.trim()

    if(!nomeValor || !idadeTexto){
        divisao.innerHTML = "Preencha todos os campos";
        divisao.className = "reprovado";
        return;
    }

    const valor = Number(idadeTexto)

    const aprovado = valor >= 18

    divisao.innerHTML = aprovado
    ? `Usuário ${nomeValor} cadastrado (Acesso VIP)`
    : `Usuário ${nomeValor} cadastrado (Menor de idade)` 

    divisao.className = aprovado
    ? "aprovado"
    : "reprovado"

    nome.value = ""
    idade.value = ""

    const novoUsuario = {
        nome: nomeValor,
        idade: valor
    }
    usuario.push(novoUsuario)

    desenharLista()
}

function desenharLista(listaParaDesenhar = usuario){
    const listaUl = document.getElementById("lista-usuarios")

    listaUl.innerHTML = ""

    usuario.forEach( user =>{
        listaUl.innerHTML += `<li>${user.nome} - ${user.idade}</li>`
    })
}

function filtratVips(){
    usuario.filter(vip =>{
        vip.idade >= 18
    })
}
