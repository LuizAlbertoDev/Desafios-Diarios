async function buscador(id1,id2,id3) {
    
    try{

        const resultados = await Promise.allSettled([
            fetch(`https://jsonplaceholder.typicode.com/users/${id1}`),
            fetch(`https://jsonplaceholder.typicode.com/users/${id2}`),
            fetch(`https://jsonplaceholder.typicode.com/users/${id3}`)
        ])

        for ( const r of resultados ){
            if(r.status === "fulfilled") {

                if(!r.value.ok){
                    console.log(`Erro HTTP: ${r.value.status}`)
                    continue
                }
                
                const dados = await r.value.json()
                console.log("Sucesso:", dados.name)
            }
            else{
                console.log("Erro:", r.reason)
            } 
        }

    }
    catch(erro){
        console.log(erro.message)
    }

}

buscador(1,2,999)