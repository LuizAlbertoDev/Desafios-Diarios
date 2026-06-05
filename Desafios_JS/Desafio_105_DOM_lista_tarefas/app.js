function init() {
    
    const tarefaInput = document.getElementById("tarefaInput")
    const adicionarTarefa = document.getElementById("adicionarTarefa")
    const tarefaList = document.getElementById("tarefaList")
    const mensagem = document.getElementById("mensagem")

    if(!tarefaInput || !adicionarTarefa || !tarefaList) {
        console.error("Elementos não encontrados no DOM")
        return
    }

    adicionarTarefa.addEventListener("click", () => {
        const tarefa = tarefaInput.value.trim()

        if (!tarefa) {
            mensagem.textContent = "Digite uma tarefa!"
            return
        }

    
        const tarefaItem = document.createElement("li")

        tarefaItem.innerHTML = `
            <span class="texto-tarefa">${tarefa}</span> 
            <button class="remover"> X </button>
            `
            
        tarefaItem.querySelector(".remover").addEventListener("click", () => {
            tarefaItem.remove()
        })

        tarefaList.appendChild(tarefaItem)

        tarefaInput.value = ""

        mensagem.textContent = ""
    }
    )

    tarefaList.addEventListener("click", (e) => {
        if (e.target.classList.contains("texto-tarefa")) {
            e.target.classList.toggle("riscar")
        }
    })
}

init()