const buscadorPost = async () => {
    const resposta  = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const dados = await resposta.json()
    const resultado = dados
        .filter(post => post.userId === 3)
        .map(post => post.body)
        .reduce((acc,body) => acc + body.length,0)
    console.log(`Total de caracteres dos post do usuario 3 : ${resultado}`)
}
buscadorPost()