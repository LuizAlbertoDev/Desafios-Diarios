function calcularDesconto(preco, porcentagem) {

    let desconto = preco * (porcentagem/100)
    return preco - desconto

}

let precoFinal =  calcularDesconto(100,10)

console.log(precoFinal)