// O Desafio Final da Noite (Para fechar com chave de ouro)
// Já que você está tão avançado, vamos adicionar a última peça do quebra-cabeça de um sistema de vendas: O Total Dinâmico.

// Sua Missão:

// No seu HTML, abaixo da lista, adicione um elemento para o total:

// HTML

// <h3>Total: R$ <span id="valor-total">0.00</span></h3>
// O Desafio: Dentro da sua função renderizarLista(), você deve usar o .reduce() (que aprendemos antes do treino) para calcular a soma de todos os produtos que ainda estão no array carrinho.

// Injete esse valor total no span com id valor-total.

// O que vai acontecer: Quando você clicar em "Remover", o item sumirá da lista e o valor total lá embaixo vai atualizar sozinho!

// Por que isso?
// Isso é o que chamamos de Reatividade. É o que faz sites como o Mercado Livre funcionarem tão bem: você altera algo e o resto da página se ajusta instantaneamente.


// pedi pra ia gerar uma lista maior
const carrinho = [
    { nome: "Teclado Mecânico", preco: 250 },
    { nome: "Mouse Gamer", preco: 120 },
    { nome: "Cabo HDMI", preco: 30 },
    { nome: "Monitor 24 polegadas", preco: 900 },
    { nome: "Headset Gamer", preco: 180 },
    { nome: "Webcam Full HD", preco: 220 },
    { nome: "Mousepad XXL", preco: 80 },
    { nome: "Notebook", preco: 3500 },
    { nome: "Suporte para Notebook", preco: 70 },
    { nome: "Cadeira Gamer", preco: 1200 },
    { nome: "Mesa de Escritório", preco: 800 },
    { nome: "HD Externo 1TB", preco: 400 },
    { nome: "SSD 480GB", preco: 300 },
    { nome: "Pen Drive 64GB", preco: 60 },
    { nome: "Carregador Universal", preco: 90 },
    { nome: "Caixa de Som Bluetooth", preco: 150 },
    { nome: "Controle de Video Game", preco: 250 },
    { nome: "Smartphone", preco: 2000 },
    { nome: "Tablet", preco: 1500 },
    { nome: "Impressora", preco: 700 }
];

const lista = document.getElementById("lista-vendas")
const totalSpan = document.getElementById("valor-total")

function renderizarLista() {

    const listaParaSite = carrinho.map((produto,index) =>{
        return  `
            <li>
                ${produto.nome.toUpperCase()} - 
                R$ ${produto.preco.toFixed(2)}
            
                <button onclick="removerProduto(${index})">
                    Remover
                </button>
            </li>
            `
    }).join("")

    lista.innerHTML = listaParaSite

    const valorTotal = carrinho.reduce((acc,atual) => {
        return acc + atual.preco
    },0)

    //ajuda da IA nao sabia fazer
    totalSpan.textContent = valorTotal.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
})
}

function removerProduto(index){
    carrinho.splice(index,1)
    renderizarLista()
}
renderizarLista()