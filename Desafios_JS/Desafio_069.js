const posts = async () => {
    const resposta = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const dados = await resposta.json()
    const resultado = dados
        .filter(post => post.userId === 1)
        .map(post => ({
            title: post.title,
            bodyLength: post.body.length
        }))
    console.log(resultado)
}
posts()