
const inputNome = document.getElementById("input-nome")
const botaoSaudar = document.getElementById("btn-saudar")
const paragrafo = document.getElementById("msg-saudacao")

botaoSaudar.addEventListener("click", function(){

    if(inputNome.value ===""){
        paragrafo.textContent = "Por favor, Digite seu nome"
        return
    }

    paragrafo.textContent = `Olá, ${inputNome.value}! Seja bem-vindo.`
})