const meusFilmes = []

const nomeFilme = document.getElementById("filme-nome")
const lista = document.getElementById("lista-filmes")

function adicionarFilme(){

    const nomeDoFilme = nomeFilme.value.trim()

    if(nomeDoFilme === ""){
        alert ("Preencha com o Filme")
        return
    }

    const filme = {
        titulo:nomeDoFilme,
        assistido:false
    }

    meusFilmes.push(filme)

    nomeFilme.value = ""

    desenharFilmes()
}

function desenharFilmes(){
    lista.innerHTML = ""

    meusFilmes.forEach((n,index) => {
        const li = document.createElement("li")
        li.innerHTML = `
            ${n.titulo} - ${n.assistido ? "Assistido" : "Pendente"}
            <button onclick ="marcarAssistido(${index})">Assistido</button>
            <button onclick ="removerFilme(${index})">Remover</button>
        `

        lista.appendChild(li)
    })
}

function marcarAssistido(index){
    meusFilmes[index].assistido = !meusFilmes[index].assistido; 
    desenharFilmes();
}

function removerFilme(index){
    meusFilmes.splice(index,1)
    desenharFilmes()
}