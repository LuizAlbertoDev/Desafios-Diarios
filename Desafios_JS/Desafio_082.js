const produtos = [
    {nome:"Notebook", preco: 3500, emEstoque: true},    
    {nome:"Mouse", preco: 200, emEstoque: false},    
    {nome:"Teclado", preco: 500, emEstoque: true},
    {nome:"Monitor", preco: 4000, emEstoque: true}
]

produtos.forEach(produto => {
    if(produto.emEstoque === true)
        console.log(`${produto.nome} - R$ ${produto.preco}`)
})

function totalEmEstoque(produtos){
    const total = produtos
        .filter(produto => produto.emEstoque)
        .reduce((acc,atual)=>acc + atual.preco,0)

    return total
}

console.log(totalEmEstoque(produtos))