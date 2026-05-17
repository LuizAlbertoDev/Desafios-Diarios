const carrinho = [
    { nome: "Arroz", preco: 30, categoria: "Alimento" },
    { nome: "Sabonete", preco: 5, categoria: "Higiene" },
    { nome: "Feijão", preco: 10, categoria: "Alimento" },
    { nome: "Shampoo", preco: 20, categoria: "Higiene" },
    { nome: "Macarrão", preco: 8, categoria: "Alimento" }
];

const aumento = carrinho    
    .filter(n => n.categoria === "Alimento")
    .map(n => n.preco * 1.1)

const valorFinal = aumento.reduce((acc,atual) => acc + atual)

console.log(aumento)

console.log(valorFinal.toFixed(2))
