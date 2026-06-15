function executar (a,callback){
    return callback(a)
}

const dobrar = (a) => a * 2

const quadrado = (a) => a ** 2
    
console.log(`Dobro de 5: ${executar(5, dobrar)}`)
console.log(`Quadrado de 5: ${executar(5, quadrado)}`)
