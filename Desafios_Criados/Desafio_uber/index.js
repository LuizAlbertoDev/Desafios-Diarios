// oq meu sistema precisa ter ? ( controlador de gastos UBER )

//variavel de total de km rodados
const totalKmRodados = 200

//variavel de total bruto
const totalBruto = 300

//variavel de gasto de gasolina 
const gastoGasolina = 100

//funcao para calcular o lucro liquido
function calcularLucroLiquido(){
    calcularMediaCarro(totalKmRodados, gastoGasolina)
}
//funcao para calcular o media do carro
function calcularMediaCarro (km, gasto) {
    calcularValorKmRodado(totalBruto, km)
    const media = km / gasto
    console.log(`a media do carro é de ${media} km/l`)
}
//calcular media do valor do km rodado
function calcularValorKmRodado (total,km){
    const valorKmRodado = total / km
    console.log(`o valor do km rodado é de R$ ${valorKmRodado.toFixed(2)}`)
}

//funcao para calcular o lucro liquido
function calcularLucroLiquido(){
    const lucroLiquido = totalBruto - gastoGasolina
    console.log(`o lucro liquido é de R$ ${lucroLiquido.toFixed(2)}`)
}