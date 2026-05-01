const estoque = [
    { id: 1, nome: "Processador", preco: 1200, quantidade: 5 },
    { id: 2, nome: "Memória RAM", preco: 300, quantidade: 0 },
    { id: 3, nome: "Placa de Vídeo", preco: 2500, quantidade: 2 },
    { id: 4, nome: "SSD", preco: 400, quantidade: 8 }
];


const relatorio = estoque
    .filter(n => n.quantidade > 0)
    .map(n => 
        `Produto: ${n.nome} | Total em Estoque: R$ ${n.preco * n.quantidade}`
    );


const total = estoque.reduce((acc, n) => {
    return acc + (n.preco * n.quantidade);
}, 0);


console.log(relatorio);
console.log(total);