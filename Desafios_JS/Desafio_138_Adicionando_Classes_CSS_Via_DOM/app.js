const objetos = [
  {
    nome: "Arroz",
    preco: 29.90
  },
  {
    nome: "Feijão",
    preco: 8.50
  },
  {
    nome: "Café",
    preco: 18.90
  }
]

const container = document.getElementById("container")

objetos.forEach(p => {
    const div = document.createElement("div")
    div.classList.add("card")

    const h3  = document.createElement("h3")
    h3.classList.add("titulo-produto")
    const paragrafo = document.createElement("p")
    paragrafo.classList.add("preco-produto")

    paragrafo.textContent = `Preco: R$${p.preco}`
    h3.textContent = `Produto: ${p.nome}`
    
    
    div.appendChild(h3)
    div.appendChild(paragrafo)
    container.appendChild(div)
})