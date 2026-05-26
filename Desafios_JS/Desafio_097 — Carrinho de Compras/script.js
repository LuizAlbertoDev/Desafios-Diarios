const produtos = [
  { id: 1, nome: "Mouse", preco: 100 },
  { id: 2, nome: "Teclado", preco: 250 },
  { id: 3, nome: "Monitor", preco: 1200 },
  { id: 4, nome: "Notebook", preco: 3500 }
]

const carrinho = []

const listaProdutos = document.getElementById("lista-produtos")
const itensCarrinho = document.getElementById("itens-carrinho")
const total = document.getElementById("total")
const btnLimpar = document.getElementById("limpar")

function renderizarProdutos(){

  produtos.forEach(produto => {

    const div = document.createElement("div")
    div.classList.add("produto")

    div.innerHTML = `
      <h3>${produto.nome}</h3>
      <p>R$ ${produto.preco}</p>
      <button>Adicionar</button>
    `

    const botao = div.querySelector("button")

    botao.addEventListener("click", function(){
      carrinho.push(produto)
      atualizarCarrinho()
    })

    listaProdutos.appendChild(div)

  })

}

function atualizarCarrinho(){

  itensCarrinho.innerHTML = ""

  let soma = 0

  carrinho.forEach((produto, index) => {

    soma += produto.preco

    const div = document.createElement("div")
    div.classList.add("item-carrinho")

    div.innerHTML = `
      <p>${produto.nome} - R$ ${produto.preco}</p>
      <button>Remover</button>
    `

    const botaoRemover = div.querySelector("button")

    botaoRemover.addEventListener("click", function(){

      carrinho.splice(index, 1)
      atualizarCarrinho()

    })

    itensCarrinho.appendChild(div)

  })

  total.textContent = `Total: R$ ${soma}`

}

btnLimpar.addEventListener("click", function(){

  carrinho.length = 0
  atualizarCarrinho()

})

renderizarProdutos()