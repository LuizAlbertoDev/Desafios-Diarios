const produtos = [
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 150 },
    { nome: "Monitor", preco: 800 },
    { nome: "Cabo USB", preco: 20 }
];

const acimaDe100 = produtos
    .filter(n => n.preco > 100)
    .map(n => {
        return {
            nome: n.nome,
            preco: n.preco * 0.90
        }})

const valorTotal = acimaDe100.reduce((acc,atual) => {return acc + atual.preco},0)

console.log(acimaDe100)
console.log(valorTotal)