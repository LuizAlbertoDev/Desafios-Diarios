const pokemons = [
  "pikachu",
  "charizard",
  "bulbasaur",
  "gengar",
  "lucario"
];

const pokemonEscolhido = async (pokemon) =>{
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const dados = await resposta.json()
    console.log("--------------------------------------------------")
    console.log(dados.name)
    console.log(dados.base_experience)
}

const listarPokemons = async() => {
    for(const pokemon of pokemons){
        await pokemonEscolhido(pokemon)
    }
}

listarPokemons()