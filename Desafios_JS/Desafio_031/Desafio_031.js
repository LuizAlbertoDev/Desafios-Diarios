const compras = []

const nomeInput = document.getElementById("nome-produto")
const precoInput = document.getElementById("preco-produto")
const listaProduto = document.getElementById("lista-produtos")

function adicionar(){
    const nome = nomeInput.value.trim()
    const preco = Number(precoInput.value)

    if(nome === "" || preco <= 0){
        alert("preencha todos os campos!")
        return
    }

    const item = {
        nome: nome,
        preco: preco
    }

    compras.push(item)

    nomeInput.value = ""
    precoInput.value = ""

    desenhar()
}

function desenhar(){
    listaProduto.innerHTML = ""

    compras.forEach((item,index) => {
        const li = document.createElement("li")

        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`

        listaProduto.appendChild(li)
    })
}