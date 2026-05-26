const inputTexto = document.getElementById("texto")
const botaoVerificar = document.getElementById("botaoVerificar")
const p = document.getElementById("p")

botaoVerificar.addEventListener("click", function(){

    const texto = inputTexto.value.trim()

    if(texto === ""){
        return 
    }

    if(texto.length < 3){
        p.textContent = "Muito Curto!"
        p.style.color = "red"
    }else if (texto.length <= 10){
        p.textContent = "Tamanho OK!"
        p.style.color = "green"
    }
    else{
        p.textContent = "Muito Longo!"
        p.style.color = "orange"
    }


})

