const estoque = [{nome: "Pão", qtd: 2}, {nome: "Leite", qtd: 10}, {nome: "Ovo", qtd: 4}]

const maiorQue5 = estoque.filter(n => n.qtd < 5)

console.log(maiorQue5)