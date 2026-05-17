
const calcular = (a, b, operacao) => operacao(a,b)

const somar = (a, b) => a + b
const multiplicar = (a ,b) => a * b

console.log(calcular(5,4,somar))
console.log(calcular(5,4,multiplicar))