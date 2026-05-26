let contador = 1

const listaDom = document.getElementById("lista-dom")
const botao = document.getElementById("btn-adicionar")

botao.addEventListener("click", function(){
    const li = document.createElement("li")
    li.textContent = `Item ${contador}`
    listaDom.appendChild(li)
    contador++
})