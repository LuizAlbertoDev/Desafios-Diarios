const container = document.getElementById("container")

const botaoSomar = document.createElement("button")
const botaoDiminuir = document.createElement("button")
const paragrafo = document.createElement("p")

let contador = 0

paragrafo.textContent = "Valor: 0"
botaoSomar.textContent = "Somar"
botaoDiminuir.textContent = "Subtrair"

botaoDiminuir.addEventListener("click", () => {
    if(contador > 0) {
        contador--
        paragrafo.textContent = `Valor: ${contador}`
    }
})

botaoSomar.addEventListener("click",() => {
    contador++
    paragrafo.textContent = `Valor: ${contador}`
})



container.appendChild(paragrafo)
container.appendChild(botaoSomar)
container.appendChild(botaoDiminuir)