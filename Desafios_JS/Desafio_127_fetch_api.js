async function buscarPost(){
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const dados = await resposta.json()
    console.log(dados.title)
}

buscarPost()