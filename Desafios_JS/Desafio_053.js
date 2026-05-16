const estoque = [
  { nome: "Teclado Mecânico", preco: 180, qtd: 15 },
  { nome: "Mouse Gamer", preco: 120, qtd: 0 },
  { nome: "Monitor 24'", preco: 900, qtd: 8 },
  { nome: "Fone de Ouvido", preco: 75, qtd: 3 }
];

function verificarDisponibilidade(estoque) {
    const produtosDisponiveis = estoque.filter(item => item.qtd > 0);
    return produtosDisponiveis;
}

function somarValorTotalEstoque(estoque) {

    const total = estoque.reduce((acc, produto) => {
        return acc + (produto.preco * produto.qtd);
    }, 0);

    console.log(
        `Valor total do estoque: ${total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })}`
    );
}

function somarPrecosProdutosDisponiveis(estoque) {
    const soma = estoque
        .filter(item => item.qtd > 0)
        .reduce((acc, item) => {
            return acc + item.preco;
        }, 0);
    console.log(
        `Soma dos preços dos produtos disponíveis: ${soma.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })}`
    );
    return soma;
}

console.log(verificarDisponibilidade(estoque));


somarValorTotalEstoque(estoque)


somarPrecosProdutosDisponiveis(estoque)
