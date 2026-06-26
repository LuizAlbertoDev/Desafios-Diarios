async function buscarUsuario(id) {
    try{

        const resultado = await fetch (`https://jsonplaceholder.typicode.com/users/${id}`)

        if(!resultado.ok){
            throw new Error (`Usuário com ID ${id} não encontrado`)
        }

        const dados = await resultado.json()
        console.log(dados.name)

    }
    catch(erro){
        console.log(erro.message)
    }
}
buscarUsuario(99)