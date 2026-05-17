const convidados = []

const nomeConvidado = document.getElementById("nome-convidado")
const acompanhante = document.getElementById("tem-acompanhante")
const lista = document.getElementById("lista-presenca")



function convidar(){
    const convidado = {
        nome:nomeConvidado.value.trim(),
        acompanhante:acompanhante.checked,
        chegou:false
    }

    nomeConvidado.value = ""
    acompanhante.checked = false

    convidados.push(convidado)
    desenhar()
}

function desenhar(){
    lista.innerHTML = ""

    convidados.forEach((n,index) => {
        const li = document.createElement("li")

        li.innerHTML = `
            Nome: ${n.nome} - ${n.acompanhante ? "Com acompanhante" : "Sem acompanhante"}
            <button onclick="confirmaChegada(${index})">Chegou</button>
        `
        lista.appendChild(li)

        li.style.backgroundColor = n.chegou ? "lightgreen" : ""
    })
}
function confirmaChegada(index){
    convidados[index].chegou = !convidados[index].chegou
    desenhar()
}

