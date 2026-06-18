const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const soma = numeros.reduce((acc,atual) => acc + atual ,0)

console.log(`A soma de todos os números é: ${soma}`)