async function filtrarUsuarios(){
    try{
        const resposta = await fetch ("https://jsonplaceholder.typicode.com/users")

        if(!resposta.ok){
            throw new Error(`Erro HTTP: ${resposta.status}`)
        }

        const dados = await resposta.json()
        const usuariosFiltrados = dados
            .filter(n => n.name.length > 10)
            .map(n => `O usuário ${n.name} tem um nome longo`)
            console.log(usuariosFiltrados)

    }
    catch (erro) {
        console.log("Ops, algo deu errado: " + erro);
    }
}

filtrarUsuarios()