const postID = [1, 2, 3, 4, 5]

const buscarPost = async (id) => {
    const resposta = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const dados = await resposta.json() 
    return dados 
}

const listarPosts = async() => {
    for ( const id of postID){
        const dados = await buscarPost(id)
        console.log("--------------------------------------------------")
    
        console.log(`Post Title: ${dados.title.toUpperCase()}`)

        if(dados.userId > 3){
            console.log("👑 Autor VIP")
        }
        else{
            console.log("👤 Autor comum")
        }
        console.log(`Total de caracteres: ${dados.body.length}`)
    }
}

listarPosts()