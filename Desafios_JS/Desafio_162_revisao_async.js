async function buscar() {
    try{
        const resultado = await fetch("https://jsonplaceholder.typicode.com/users/99999")

        if(!resultado.ok){
            throw new Error(`Erro ${resultado.status}: Post não encontrado!`)
        }

        const dados = await resultado.json()
        console.log(dados)
    }
    catch(erro){
        console.log(erro.message)
    }
}

buscar()