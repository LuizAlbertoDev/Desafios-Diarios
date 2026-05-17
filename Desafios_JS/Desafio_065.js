const usuarioID = [1, 2, 3, 4, 5]

const buscarUsuario = async(id) =>{
    const resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const dados = await resposta.json()
    console.log("--------------------------------------------------")
    console.log(dados.name)
    console.log(dados.email)
    console.log(dados.company.name)
}

const listarUsuarios = async() => {
    for(const usuario of usuarioID){
        await buscarUsuario(usuario)
    }
}

listarUsuarios()