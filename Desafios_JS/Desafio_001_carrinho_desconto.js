// Seu desafio agora:
// Imagine uma lista de compras com 3 produtos. Cada produto é um objeto com nome e preco.

// Crie um array chamado carrinho contendo 3 objetos de sua escolha.

// Crie uma variável total começando em 0.

// O Desafio: Tente descobrir (ou pesquisar rapidamente) como usar o comando for para percorrer esse array e somar o preco de cada item na variável total.

// No final, use um if para dar 10% de desconto se o total for maior que 100.

// Exemplo da estrutura inicial:

// JavaScript

// const carrinho = [
//     { nome: "Teclado", preco: 150 },
//     { nome: "Mouse", preco: 50 },
//     { nome: "Cabo HDMI", preco: 30 }
// ];
// Por que esse exercício? Porque no Full Stack, o Backend vai te enviar uma lista assim, e você precisará saber manipulá-la para mostrar no Frontend.

// Pode começar. Não se preocupe em errar a sintaxe do for, o importante agora é eu ver como você tenta resolver a repetição. Mãos à obra!

const carrinho = [
    { nome: "Teclado", preco: 150 },
    { nome: "Mouse", preco: 50 },
    { nome: "Cabo HDMI", preco: 30 }
];

let total = 0
let valorFinal = 0


for (let i = 0; i < carrinho.length; i++) {
    total += carrinho[i].preco 
    valorFinal = total * 0.90
}

if ( total > 100){
    console.log(`O valor total é de R$ ${total}, voce ganhou um desconto de 10%, valor a pagar: R$ ${valorFinal}`)
}
else{
    console.log(`O valor total a pagar é: ${total}`)
}
