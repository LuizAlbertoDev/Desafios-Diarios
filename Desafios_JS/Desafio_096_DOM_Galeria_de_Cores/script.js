const inputCor = document.getElementById("cor")
const inputOpacidade = document.getElementById("opacidade")
const preview = document.getElementById("preview")
const valorOpacidade = document.getElementById("valor-opacidade")

function atualizarCor(){
    const cor = inputCor.value
    const opacidade = inputOpacidade.value/100

    valorOpacidade.textContent = inputOpacidade.value

    preview.style.backgroundColor = cor
    preview.style.opacity = opacidade
}

inputCor.addEventListener("input", atualizarCor)
inputOpacidade.addEventListener("input", atualizarCor)
atualizarCor()

