const listaCompras = []

const lista = document.getElementById("exibicao-lista")
const nomeInput = document.getElementById("item-nome")
const precoInput = document.getElementById("item-preco")

function adicionar(){

    const nomeValor = nomeInput.value
    const precoValor = Number(precoInput.value)

    if(nomeValor === "" || precoValor === 0) return 
    

    const produto = {
        nome:nomeValor, 
        preco:precoValor
    }

    listaCompras.push(produto)

    desenhar()

    nomeInput.value = ""
    precoInput.value = ""

}

function desenhar(){

    lista.innerHTML= ""

    listaCompras.forEach(n => {
        const li = document.createElement("li")

        li.textContent = `${n.nome} - R$ ${n.preco.toFixed(2)}`

        if (n.preco > 50){
            li.style.color = "red"
            li.style.fontWeight = "bold"
        }

        lista.appendChild(li)
    })
}