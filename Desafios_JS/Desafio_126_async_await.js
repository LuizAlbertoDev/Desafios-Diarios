async function buscarDados(){
    await new Promise(resolve => setTimeout(resolve,2000))
    console.log("Dados recebidos com sucesso!")
}
buscarDados()