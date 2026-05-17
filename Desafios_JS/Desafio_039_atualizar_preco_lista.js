const lista = [{nome: "Teclado", preco: 100}, {nome: "Mouse", preco: 50}]

function mudarPreco(index,novoPreco){
    lista[index].preco = novoPreco
}

mudarPreco(1, 200)

console.log(lista)