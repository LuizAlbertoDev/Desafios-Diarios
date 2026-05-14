// quais acoes meu carrinho deve ter ?

// adicionar um item
async function additem(userCart,item){
    userCart.push(item)
}

// remover um item - diminuir a quantidade do item ou remover completamente do carrinho
async function removeitem(userCart,index){
    userCart.splice(index, 1)
}

// deletar um item do carrinho
async function deleteitem(userCart,name){

}

// listar os itens do carrinho
async function listitems(userCart){

}

// limpar o carrinho
async function clearCart(userCart){

}

// calcular o valor total do carrinho
async function calculateTotal(userCart){

}

