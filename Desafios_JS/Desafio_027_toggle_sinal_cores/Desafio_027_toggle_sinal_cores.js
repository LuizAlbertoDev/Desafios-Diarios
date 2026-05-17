const status = document.getElementById("status")

function ficarVerde (){
    status.innerHTML = `O sinal está: VERDE`
    status.style.color = "green"
}

function ficarVermelho(){
    status.innerHTML = `O sinal está: VERMELHO`
    status.style.color = "red"
}