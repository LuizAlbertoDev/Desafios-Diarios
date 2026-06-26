async function buscarComRetry(id, maxTentativa) {

    for (let tentativa = 1; tentativa <= maxTentativa; tentativa++) {
        try{

            console.log(`Tentativa ${tentativa}`)

            const resultado = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

            if(!resultado.ok){
                throw new Error(`Erro ${resultado.status}: usuário não encontrado`)
            }

            const dados = await resultado.json()

            console.log(dados.name)
                
            return
        }
        catch(erro){
            console.log(erro.message)

            if (tentativa === maxTentativa){
                console.log(`Numero maximo de tentativa atingido!`)
            }
        }
    }
}

buscarComRetry(199,5)