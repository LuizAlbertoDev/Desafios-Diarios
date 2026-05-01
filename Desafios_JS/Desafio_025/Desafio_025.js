const produtos = [
    { nome: "Fone Bluetooth", preco: 150 },
    { nome: "Smartwatch", preco: 400 },
    { nome: "Teclado Mecânico", preco: 600 },
    { nome: "Mouse Gamer", preco: 250 },
    { nome: "Monitor 4K", preco: 2000 }
];

const listaUl = document.getElementById("lista-produtos");
const campoPreco = document.getElementById("campo-preco");

function desenhar(lista) {
    listaUl.innerHTML = "";
    lista.forEach(p => {
        listaUl.innerHTML += `<li>${p.nome} - R$ ${p.preco}</li>`;
    });
}

function filtrarPorPreço() {
    const valorDigitado = Number(campoPreco.value);

    if(!valorDigitado){
        desenhar(produtos)
        return
    }

    const filtrados = produtos.filter( p => p.preco <= valorDigitado)
    
    desenhar(filtrados);
}