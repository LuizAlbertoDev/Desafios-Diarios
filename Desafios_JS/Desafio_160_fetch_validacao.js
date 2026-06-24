async function buscarPost() {
    try{
        const resposta = await fetch("https://jsonplaceholder.typicode.com/posts/99999")

        if(!resposta.ok){
            throw new Error(`Erro ${resposta.status}: Post não encontrado!`)
        }

        const dados = await resposta.json()
        console.log(dados)

    }catch(erro){

        console.log(erro.message)

    }
    
}

buscarPost()