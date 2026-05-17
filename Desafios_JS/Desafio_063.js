const ceps = [
  "01001000",
  "01310930",
  "30140071",
  "22250040",
  "88106300"
];

const buscarCep = async (cep) => {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await resposta.json()
    console.log("--------------------------------------------------")
    console.log(dados.logradouro)
    console.log(dados.localidade)
}

const listarCeps = async()=>{
    for(const cep of ceps){
        await buscarCep(cep)
    }
}

listarCeps()