const container = document.getElementById("container")

const botao = document.createElement("button")
const paragrafo = document.createElement("p")

let contador = 0

botao.textContent = "adicionar"
paragrafo.textContent = "Cliques: 0"

botao.addEventListener("click", () => {
    contador++

    paragrafo.textContent = `Cliques: ${contador}`

})

container.appendChild(paragrafo)
container.appendChild(botao)
