const tarefas = JSON.parse(localStorage.getItem("minhas_tarefas")) || [];


function salvar(){
    const listaEmTexto = JSON.stringify(tarefas)
    localStorage.setItem("minhas_tarefas",listaEmTexto)
}

const nomeTarefa = document.getElementById("tarefa")
const lista = document.getElementById("lista")

desenhar();

function adicionarTarefa(){
    const texto = nomeTarefa.value.trim()
    if(texto === "")return

    const newTarefa = {
        id:Date.now(),
        titulo:texto,
        concluida:false
    }

    tarefas.push(newTarefa)

    nomeTarefa.value = ""
    salvar()
    desenhar()
}

function desenhar(){
    lista.innerHTML = ""

    tarefas.forEach((n,index) => {
        const li = document.createElement("li")

        const estilo  = n.concluida ? 'style="text-decoration: line-through; color: gray;"' : '';

        li.innerHTML = `
            ID: ${n.id} - Titulo: ${n.titulo} - concluida: ${n.concluida}
            <button onclick="excluir(${index})">Apagar</button>
            <button onclick="alternar(${index})">${n.concluida ? 'Desmarcar' : 'Concluir'}</button>
        `
        lista.appendChild(li)

    });
}

function excluir(index){
    tarefas.splice(index, 1)
    salvar()
    desenhar()
}

function alternar(index){
    tarefas[index].concluida = !tarefas[index].concluida
    salvar()
    desenhar()
}