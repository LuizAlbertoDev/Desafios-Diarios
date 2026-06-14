const container = document.getElementById("container")

const botao = document.createElement("button")

container.appendChild(botao)
botao.textContent = "Clique"

botao.addEventListener("click",() => {
    console.log("Botão clicado!")
})