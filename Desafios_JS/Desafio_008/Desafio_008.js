// Subindo o Nível: Criando Elementos Reais
// No desenvolvimento profissional, raramente injetamos apenas texto com <br>. Nós criamos estruturas HTML completas (como listas ou cards) para podermos estilizar com CSS depois.

// Seu novo desafio (Rigor Máximo):

// Em vez de apenas "colar" o texto com <br>, vamos criar uma lista oficial (<ul> e <li>).

// Mude o seu HTML para:

// HTML

// <div id="container-produtos">
//     <ul id="lista-vendas"></ul>
// </div>
// No seu JavaScript, o seu .map() deve retornar o nome e o preço dentro de uma tag <li>. Exemplo: return "<li>PRODUTO - PREÇO</li>"

// Use o .join("") (vazio) para transformar o array em uma string única de tags.

// Selecione o elemento lista-vendas e injete o resultado.

// Por que isso?
// Porque agora cada item do seu carrinho é um elemento HTML independente. Isso permite que amanhã você use o CSS para colocar uma borda, mudar a cor do preço ou colocar um ícone ao lado de cada produto.


const carrinho = [
    { nome: "Teclado", preco: 150 },
    { nome: "Mouse", preco: 50 },
    { nome: "Cabo HDMI", preco: 30 }
];

const listaParaSite = carrinho.map(produto =>{
    return  `
        <li>
            ${produto.nome.toUpperCase()} - 
            R$ ${produto.preco.toFixed(2)}
        </li>`
}).join("")

const lista = document.getElementById("lista-vendas")

lista.innerHTML = listaParaSite