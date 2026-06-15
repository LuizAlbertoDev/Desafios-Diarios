const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const nPares = numeros.filter(n => n % 2 === 0)

console.log(`Original: ${numeros}`)
console.log(`Pares: ${nPares}`)