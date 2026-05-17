const listaNomes = []

const nome = document.getElementById("nomeInput")
const lista = document.getElementById("lista")

function adicionar(){

    const valor = nome.value.trim()

    if(valor === "") return

     const newNome = {
        nome:valor
    }

    nome.value = ""
    listaNomes.push(newNome)
    desenhar()
}

function desenhar(){
    lista.innerHTML = ""
    listaNomes.forEach(n => {

        const li = document.createElement("li")

        if(n.nome.length > 3){
            li.style.backgroundColor = "red"
        }
        else{
            li.style.backgroundColor = "green"
        }

        li.textContent = n.nome
        lista.appendChild(li)
    })
}
