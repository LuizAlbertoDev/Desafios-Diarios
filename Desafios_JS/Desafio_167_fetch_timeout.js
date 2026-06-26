async function buscarComTimeout(id) {

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(),5000)

    try{
        const resultado = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{ signal: controller.signal })
        clearTimeout(timeout)

        const dados = await resultado.json()

        console.log(dados.name)
    }
    catch(erro){
        if (erro.name === "AbortError"){
            console.log("Tempo Esgotado!")
        }
        else{
            console.log(erro.message)
        }
    }
    
}

buscarComTimeout(1)