async function buscarPagina(pagina) {
    try{
        const resultado = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pagina}&_limit=5`)

        if(!resultado.ok){
            throw new Error(`Erro: ${resultado.status}`)
        }
        const post = await resultado.json()

        console.log(`Pagina: ${pagina}`)

        post.forEach(post => {
            console.log(post.title)
        })
    }
    catch(erro){
        console.log(erro.message)
    }
}
buscarPagina(1)
buscarPagina(2)