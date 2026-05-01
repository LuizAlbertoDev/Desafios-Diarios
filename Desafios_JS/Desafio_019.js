const estoque = [
    { nome: "Camiseta", preco: 80 },
    { nome: "Sapato", preco: 250 },
    { nome: "Boné", preco: 50 },
    { nome: "Camiseta", preco: 80 }, // Duplicado!
    { nome: "Calça", preco: 120 }
];

estoque.sort((a,b) => a.preco - b.preco)

const estoqueLimpo = estoque
    .filter((n,index,estoque) => {
        return index === estoque.findIndex(p => p.nome === n.nome)
    })

const etiqueta = estoqueLimpo.map(n =>{
    return `${n.nome} - R$ ${n.preco}`
})

console.log(etiqueta);