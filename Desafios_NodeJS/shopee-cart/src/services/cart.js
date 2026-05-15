// quais acoes meu carrinho deve ter ?

// adicionar um item
async function additem(userCart,item){
    userCart.push(item)
}

// remover um item - diminuir a quantidade do item ou remover completamente do carrinho
async function removeitem(userCart,index){
    if(index >= 0 && index < userCart.length)
}

async function displayCart(userCart){

    console.log(`\n🛒 Shopee Cart List: `)
    userCart.forEach((item, index) => {
        console.log(`item ${index + 1}: ${item.name}, valor unitario R$ ${item.price}, quantidade: ${item.quantity}, subtotal: R$ ${item.subtotal()}`)
    })
}

// deletar um item do carrinho
async function deleteitem(userCart,name){
    
    const index = userCart.findIndex(item => item.name === name)
    if(index !== -1){
        userCart.splice(index,1)
    }

}

// listar os itens do carrinho
async function listItems(userCart){

}

// limpar o carrinho
async function clearCart(userCart){

}

// calcular o valor total do carrinho
async function calculateTotal(userCart){
     const result = userCart.reduce((total, item) => total + item.subtotal(),0)
     console.log(`\n💰 Shopee Cart Total: R$ ${result.toFixed(2)}`)
}


export {
    additem,
    calculateTotal,
    listItems,
    clearCart,
    removeitem,
    deleteitem,
    displayCart
}
