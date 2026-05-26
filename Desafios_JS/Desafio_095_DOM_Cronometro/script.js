const btnIniciar = document.getElementById("iniciar")
const btnPausar = document.getElementById("pausar")
const btnZerar = document.getElementById("zerar")
const display = document.getElementById("display")

let tempo = 0
let intervalo = null

function atualizar(){
    const minutos = Math.floor(tempo/60)
    const segundos = tempo % 60
    display.textContent =
        `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`
}

btnIniciar.addEventListener("click",function(){

    if(!intervalo){
        intervalo = setInterval(function(){
        tempo++
        atualizar()
    },1000)
    }
})

btnPausar.addEventListener("click",function(){
    clearInterval(intervalo)
    intervalo = null
})

btnZerar.addEventListener("click",function(){
    clearInterval(intervalo)
    intervalo = null
    tempo = 0
    display.textContent = "00:00"
})