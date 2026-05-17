const lampada = { ligada: false }

function ligarDesligar(){

    lampada.ligada = !lampada.ligada
    return lampada.ligada

}

console.log(ligarDesligar())
console.log(ligarDesligar())