const estoque = [
  { nome: "Teclado Mecânico", preco: 180, qtd: 15 },
  { nome: "Mouse Gamer", preco: 120, qtd: 0 },
  { nome: "Monitor 24'", preco: 900, qtd: 8 },
  { nome: "Fone de Ouvido", preco: 75, qtd: 3 }
];

function verificarDisponibilidade(produto){
    const item = estoque.find(item => item.nome === produto)
    if(item){
        if(item.qtd > 0){
            console.log(`O produto ${item.nome} esta disponivel. Preço: R$${item.preco},00. Quantidade em estoque: ${item.qtd}.`)
        }
        else{
            console.log(`O produto ${item.nome} esta indisponivel no momento.`)
        }
    }
}

verificarDisponibilidade("Teclado Mecânico")