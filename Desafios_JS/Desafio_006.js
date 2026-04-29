// O Desafio: O Gerador de Relatório de Vendas
// Imagine que você está no Backend e precisa enviar para o Frontend não apenas os itens baratos, mas um resumo completo da compra.

// Sua Missão:

// Use o mesmo array carrinho.

// Passo 1: Crie uma variável chamada totalBaratos usando o método .reduce().

// O que ele faz: O reduce serve para somar valores de um array e transformar em um único número.

// Passo 2: A soma deve considerar apenas os produtos que custam menos de R$ 100,00.

// Passo 3: No final, exiba a frase: "O valor total dos produtos populares é R$ [valor]".

// Por que o .reduce()?
// No Full Stack, você usa filter para escolher, map para transformar e reduce para gerar totais (como o valor final de uma nota fiscal ou o fechamento do caixa do dia).

// O Rigor: Tente combinar o .filter() com o .reduce() em uma única linha (encadeado), igual você fez no exercício anterior.



const carrinho = [
    { nome: "Teclado", preco: 150 },
    { nome: "Mouse", preco: 50 },
    { nome: "Cabo HDMI", preco: 30 }
];

const totalBaratos = carrinho
    .filter( Produto => Produto.preco < 100)
    .reduce((acc,atual) => {return acc + atual.preco},0)

console.log(`O valor total dos produtos populares é R$ ${totalBaratos}`)
