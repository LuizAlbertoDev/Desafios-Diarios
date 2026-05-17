const tarefas = [1, 2, 3, 4, 5]

const buscarTarefas = async(id) => {
    const resposta = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const dados = await resposta.json()
    console.log("--------------------------------------------------")
    console.log(dados.title)
    
    if(dados.completed){
        console.log("Tarefa Concluida")
    }
    else{
        console.log("Tarefa Pendente")
    }
}

const listarTarefas = async() => {
    for ( const tarefa of tarefas){
        await buscarTarefas(tarefa)
    }
}

listarTarefas()