async function buscarTarefas() {
    // 1. O Pedido: O caminhão vai buscar os dados
    const resposta = await fetch("https://jsonplaceholder.typicode.com/todos");

    // 2. A Tradução: Transformamos o que chegou em uma lista de objetos JS
    const tarefas = await resposta.json();

    // 3. A Manipulação: Aqui entra o que você acabou de treinar!
    // Queremos apenas o nome de cada usuário da lista
    const completo = tarefas
        .filter(u => u.completed ===true);


    // 4. O Resultado
    console.log(completo.length);
}

buscarTarefas();