const inputTarefa = document.getElementById("input-tarefa")
const btnAdd = document.getElementById("btn-add")
const listaTarefas = document.getElementById("lista-tarefas")

btnAdd.addEventListener("click", function(){

    const textoTarefa = inputTarefa.value.trim()
    if(textoTarefa === "")
        return

    const li = document.createElement("li")
    li.textContent = textoTarefa

    const botaoRemover = document.createElement("button")
    botaoRemover.textContent = "X"

    botaoRemover.addEventListener("click", function(){
        li.remove()
    })

    li.appendChild(botaoRemover)

    listaTarefas.appendChild(li)

    inputTarefa.value = ""
})
