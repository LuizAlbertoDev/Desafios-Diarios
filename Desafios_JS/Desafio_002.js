// Seu novo desafio:
// O cliente quer ver quais produtos do carrinho custam mais de R$ 40,00 para decidir se remove algum.

// Use o mesmo array carrinho do exercício anterior.

// Crie um novo for.

// O Desafio: Dentro do loop, coloque um if que verifique: se o preço do produto for maior que 40, dê um console.log exibindo apenas o nome desse produto.

// No final do código, exiba também a quantidade total de itens filtrados.

// Por que isso? No dia a dia, você terá que filtrar listas de usuários ativos, produtos em estoque ou pedidos cancelados. Essa é a base de tudo.

const carrinho = [
    { nome: "Teclado", preco: 150 },
    { nome: "Mouse", preco: 50 },
    { nome: "Cabo HDMI", preco: 30 }
];

let contador = 0

for (let i = 0; i < carrinho.length; i++) {
    if(carrinho[i].preco > 40){
        contador++
        console.log(carrinho[i])
    }
}
console.log(`Total de itens no carrinho: ${contador}`)