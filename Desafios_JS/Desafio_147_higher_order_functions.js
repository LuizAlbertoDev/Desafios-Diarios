function criarMultiplicador(multiplicador){
    return numero => numero * multiplicador
}

const dobrar = criarMultiplicador(2)
const triplicar = criarMultiplicador(3)

console.log(dobrar(5))
console.log(triplicar(5))