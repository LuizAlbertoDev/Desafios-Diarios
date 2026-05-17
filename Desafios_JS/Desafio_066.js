const filmesID = [1, 2, 3, 4, 5]

const buscarFilmes = async(id) => {
    const resposta = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const dados = await resposta.json()
    console.log("--------------------------------------------------")
    console.log(dados.title)
    if(dados.body.length > 100){
        console.log("Descrição Muito Longa")
    }
    else{
        console.log("Descrição Curta")
    }
}

const listarFilmes = async() => {
    for(const filme of filmesID){
        await buscarFilmes(filme)
    }
}

listarFilmes()