const precosDolar = [10, 50, 100, 250];
const taxaCambio = 5.00; // Vamos fingir que o dólar está 5 reais

const precosReal = precosDolar.map(n => n * taxaCambio)

console.log(precosReal)