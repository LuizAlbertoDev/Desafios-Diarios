async function buscarDados(){
    try{
        const resposta = await fetch ('https://jsonplaceholder.typicode.com/posts/9999999')

        if(!resposta.ok){
            throw new Error(`Erro HTTP: ${resposta.status}`)
        }

        const dados = await resposta.json()
        console.log(dados)
    }
    catch(erro){
        console.log("Ops, algo deu errado: "+ erro)
    }
}

buscarDados()