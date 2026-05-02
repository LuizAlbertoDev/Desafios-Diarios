const historicoDeJogos = []

const nomeTime = document.getElementById("time-nome")
    const gols = document.getElementById("gols-quantidade")
    const lista = document.getElementById("lista-partidas")

function registrar(){
    
    const timeValor = nomeTime.value.trim()
    const golsValor = Number(gols.value)

    if(golsValor < 0 || timeValor === ""){
        alert("Preencha corretamente")
        return
    }

    const time = {
        nome: timeValor,
        gols:golsValor
    }

    historicoDeJogos.push(time)

    renderizar()
}

function renderizar(){
    lista.innerHTML=""

    historicoDeJogos.forEach(n => {
        const li = document.createElement("li")

        if (n.gols > 3) {
            li.textContent = `O time ${n.nome} deu um SHOW: ${n.gols} gols!`
        }
        else{
            li.textContent = `O time ${n.nome} marcou ${n.gols} gols`
        }

        if (n.gols > 3){
            li.style.color = "blue"
        }

        lista.appendChild(li)
    })
    
}


