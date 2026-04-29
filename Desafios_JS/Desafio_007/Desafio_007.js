// O Próximo Nível: JavaScript + HTML
// Imagine que seu array de produtos não vai mais ser apenas texto no console, mas sim cards ou uma lista real na tela.

// Para isso, você precisa de duas coisas:

// Selecionar o elemento HTML (ex: uma div ou ul).

// Injetar o conteúdo lá dentro.

// Desafio 1: O Injetor de Dados
// Vamos começar simples. Imagine que você tem um HTML básico:

// HTML

// <div id="container-produtos">
//     </div>
// Sua Missão:

// Use o seu array carrinho (pode usar o mesmo de antes).

// Use o .map() para criar as strings formatadas (ex: "TECLADO - R$ 150.00").

// Agora, a parte nova: Pesquise como usar o comando document.getElementById para selecionar a div acima e o comando .innerHTML para colocar sua listaParaSite dentro dela.

// Dica de Rigor:
// Como o map devolve um array, e o HTML precisa de uma string única, você vai precisar "colar" os itens do array. Pesquise sobre o método .join('<br>') para usar logo após o seu .map().

// Por que isso?
// No Full Stack, o seu JavaScript vai receber dados da internet e você terá que "montar" a página na hora para o cliente ver.

const carrinho = [
    { nome: "Teclado", preco: 150 },
    { nome: "Mouse", preco: 50 },
    { nome: "Cabo HDMI", preco: 30 }
];

const listaParaSite = carrinho.map( produto => {
    return `${produto.nome.toUpperCase()} - R$ ${produto.preco.toFixed(2)}`
})

const listFinal = listaParaSite.join("<br>")

const container = document.getElementById("container-produtos")

container.innerHTML = listFinal