async function buscador(id) {
    try{

        const [resultado1,resultado2] = await Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`),
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        ])

        if (!resultado1.ok) {
            throw new Error(`Erro ao buscar usuário: ${resultado1.status}`);
        }

        if (!resultado2.ok) {
            throw new Error(`Erro ao buscar post: ${resultado2.status}`);
        }

        const dados1 = await resultado1.json()
        const dados2 = await resultado2.json()
        

        console.log(dados1.name)
        console.log(dados2.title)

    }
    catch(erro){

        console.log(erro.message)

    }
}

buscador(999)