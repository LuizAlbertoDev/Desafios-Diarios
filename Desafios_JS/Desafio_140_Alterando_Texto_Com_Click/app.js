const container = document.getElementById("container")

const botao = document.createElement("button")
const paragrafo = document.createElement("p")

paragrafo.textContent = "Aguardando Clique..."
botao.textContent = "Clique!"

botao.addEventListener("click",() => {
    paragrafo.textContent = "Botão clicado com sucesso!"
})


container.appendChild(paragrafo)
container.appendChild(botao)