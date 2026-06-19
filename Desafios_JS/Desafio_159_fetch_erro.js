async function buscarUsuarioInvalido() {
    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users/9999")
        
        if (!resposta.ok) {
            throw new Error(`Erro ${resposta.status}: usuário não encontrado`)
        }
        
        const dados = await resposta.json()
        console.log(dados)
    } catch (erro) {
        console.log(erro.message)
    }
}

buscarUsuarioInvalido()