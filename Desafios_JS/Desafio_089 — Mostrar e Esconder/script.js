const p = document.getElementById("p")
const botao = document.getElementById("btn")

botao.addEventListener("click", function(){
    p.classList.toggle("oculto")

    if(p.classList.contains("oculto")){
        botao.textContent = "Mostrar"
    }
    else{
        botao.textContent = "Esconder"
    }
})

