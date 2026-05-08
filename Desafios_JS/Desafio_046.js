async function pegarUsuario() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const dados = await resposta.json();
    
    // Agora use o console.log para mostrar o name e o email que estão dentro de 'dados'
}

console.log()