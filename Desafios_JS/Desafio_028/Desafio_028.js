let contador = 0

const numero = document.getElementById("numero")

function subir (){
    contador++
    numero.innerHTML = contador
    if(contador > 10){
        numero.style.color ="green"
    }
}

function zerar (){
    contador = 0
    numero.innerHTML = contador
    if(contador === 0){
        numero.style.color ="black"
    }

}