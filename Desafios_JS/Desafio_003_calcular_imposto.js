// Excelente! Você não só seguiu o que eu pedi, como deu um passo além e criou uma lógica de contagem dinâmica com a variável contador. Isso é exatamente o que um desenvolvedor faz quando precisa gerar relatórios (ex: "Quantos produtos caros temos no estoque?").

// Análise do Professor
// Lógica de Filtro: Perfeita. O if dentro do for é a base da manipulação de dados no Backend e no Frontend.

// Controle de Fluxo: Você usou o contador++ corretamente para rastrear apenas os itens que passaram no seu filtro.

// Ponto de Atenção: Note que no final você imprimiu o contador, que mostra quantos itens são maiores que 40 (no caso, 2). O exercício também pedia para mostrar o total geral de itens no carrinho (3). Para isso, bastaria um console.log(carrinho.length).

// Subindo o Nível: Funções e Escopo
// Como nosso foco é Full Stack, você precisa aprender a encapsular sua lógica. No mundo real, você não escreve o código solto no arquivo; você cria Funções que podem ser chamadas várias vezes.

// Imagine que o sistema precisa calcular o imposto de vários produtos diferentes em momentos diferentes.

// Seu novo desafio (Rigor Máximo):

// Crie uma função chamada calcularImposto.

// Essa função deve receber um parâmetro chamado preco.

// Dentro da função, você deve retornar (return) o valor do preço com um acréscimo de 15%.

// O Desafio: Use o seu for do exercício anterior para percorrer o carrinho, mas agora, para cada produto, chame a função calcularImposto e mostre no console: "O produto [nome] com imposto custa: [valor retornado pela função]".

// Exemplo de como começar a função:

// JavaScript

// function calcularImposto(preco) {
//     return preco * 1.15;
// }
// Por que isso? Funções são os blocos de construção de qualquer sistema. Um desenvolvedor Full Stack Jr. precisa saber como passar um dado para uma função e receber o resultado de volta.

const carrinho = [
    { nome: "Teclado", preco: 150 },
    { nome: "Mouse", preco: 50 },
    { nome: "Cabo HDMI", preco: 30 }
];

let contador = 0

function calcularImposto(preco){
    return preco * 1.15
}

for (let i = 0; i < carrinho.length; i++) {
    if(carrinho[i].preco > 40){
        contador++
        const precoComImposto = calcularImposto(carrinho[i].preco)
        console.log(`O produto ${carrinho[i].nome} com imposto custa: R$ ${precoComImposto.toFixed(2)}`)
    }
}