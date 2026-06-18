const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const resultado = numeros.filter(n => n % 2 === 0).map(n => n * 3).reduce((acc,atual) => acc + atual,0)

console.log(`A soma dos pares triplicados é: ${resultado}`)