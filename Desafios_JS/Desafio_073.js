const produtos = [
  { nome: "Camiseta", preco: 49.90, estoque: 0 },
  { nome: "Calça", preco: 129.90, estoque: 5 },
  { nome: "Tênis", preco: 199.90, estoque: 3 },
  { nome: "Boné", preco: 39.90, estoque: 0 },
  { nome: "Jaqueta", preco: 299.90, estoque: 2 },
];

const resultado = produtos
    .filter(produto =>  produto.estoque > 0)
    .map(produto => ({ nome:produto.nome , preco: Number((produto.preco * 0.90).toFixed(2) )}))

const total = resultado.reduce((acc,atual) => acc + atual.preco,0)

console.log(resultado)
console.log(`Soma total dos Itens: R$ ${total.toFixed(2)}`)