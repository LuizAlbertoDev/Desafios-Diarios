// O .map() é uma das ferramentas mais poderosas do JavaScript. Ele não apenas "passa" pelos itens como o for, ele gera algo novo a partir de cada um deles.

// Vou te dar apenas o conceito, e você vai escrever o código do zero:

// A Missão:
// Imagine que você recebeu os dados brutos do banco de dados e precisa preparar esses dados para serem exibidos em uma lista no site.

// Use o seu array carrinho.

// Crie a variável listaParaSite.

// Use o .map().

// A Regra: Dentro do .map(), você deve retornar uma string que combine o nome do produto em letras maiúsculas (procure como fazer isso em JS) e o preço formatado com R$.

// O Desafio Extra: Não use o for. Use apenas a estrutura do map.

// Dica de lógica (sem código):
// O map funciona como uma linha de montagem. O array entra de um lado, cada item passa por uma transformação que você define, e um novo array sai do outro lado com os resultados.

const carrinho = [
    { nome: "Teclado", preco: 150 },
    { nome: "Mouse", preco: 50 },
    { nome: "Cabo HDMI", preco: 30 }
];

const listaParaSite = carrinho.map(produto => {
    return (`${produto.nome.toUpperCase()} - R$ ${produto.preco.toFixed(2)}`)
})
console.log(listaParaSite)
