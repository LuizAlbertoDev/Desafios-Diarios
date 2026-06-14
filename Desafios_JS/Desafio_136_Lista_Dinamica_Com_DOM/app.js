const container = document.getElementById("container")
const produtos = [
  "Arroz",
  "Feijão",
  "Macarrão",
  "Açúcar",
  "Café"
]

const ul = document.createElement("ul")

container.appendChild(ul)

produtos.forEach(p => {
    const li = document.createElement("li")

    li.textContent = p

    ul.appendChild(li)
})