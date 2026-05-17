

const buscarCep = async ( cep) => {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await resposta.json()
    console.log(dados)
}
buscarCep(`88106300`)