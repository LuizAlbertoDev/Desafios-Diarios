const subtitulo = document.getElementById("subtitulo")
const botao = document.getElementById("btn-mudar")


botao.addEventListener("click", function(){
    subtitulo.textContent = "Texto alterado pelo JavaScript!"
    subtitulo.style.color = "Blue"
})