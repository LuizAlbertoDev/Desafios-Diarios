async function buscarTarefas() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/todos");

    const tarefas = await resposta.json();

    const completo = tarefas
        .filter(t => t.completed);

    const lista = document.getElementById("lista-tarefas")

    lista.innerHTML = ""

    completo.forEach(tarefa => {
        
        const li = document.createElement("li")

        li.innerText = tarefa.title

        lista.appendChild(li)

    })
}

buscarTarefas();