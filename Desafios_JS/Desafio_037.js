const precos = [10, 20, 30, 40]

let valorTotal = 0

const somador = precos
    .forEach(n => valorTotal += n)

console.log(valorTotal)