let acumulador = 0

const input = document.getElementById("valor-input");

const total = document.getElementById("total")

const lista = document.getElementById("historico")

function adicionarValor(){

    const valor = Number(input.value);

    if(!valor) return
    
    acumulador += valor

    lista.innerHTML += `<li>Somado: R$ ${valor.toFixed(2)}</li>`
    
    total.innerHTML = acumulador.toFixed(2)

    input.value = ""
}

function limpar(){

    acumulador = 0

    input.value = ""

    total.innerHTML = "0.00"

    lista.innerHTML = ""
}