const container = document.getElementById("container")
const botao = document.createElement("button")
const paragrafo = document.createElement("p")

botao.textContent="Mostrar/Esconder"
paragrafo.textContent = "visivel"

botao.addEventListener("click",() => {
    paragrafo.classList.toggle("escondido")
}) 

container.appendChild(botao)
container.appendChild(paragrafo)
