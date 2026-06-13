// O objetivo é buscar um usuário e exibir o nome dele
async function buscarUsuario() {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const dados = await resposta.json();
    console.log(dados.name);
}

buscarUsuario();