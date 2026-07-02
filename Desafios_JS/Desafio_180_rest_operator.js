function calcularMedia(...notas){
    let soma = 0

    for(const nota of notas){
        soma += nota
    }

    return soma / notas.length
}

console.log(calcularMedia(8, 7, 9));
console.log(calcularMedia(10, 5, 6, 7, 8));