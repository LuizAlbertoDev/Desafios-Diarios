async function buscarDadosEmParalelo(){
    try{
        const [dados1, dados2] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts/1')
                .then(r => r.json()),
            fetch('https://jsonplaceholder.typicode.com/posts/2')
                .then(r => r.json())
        ])
        console.log(dados1)
        console.log(dados2)
    }

    catch(erro){
        console.log("Ops, algo deu errado: "+ erro)
    }
}

buscarDadosEmParalelo()