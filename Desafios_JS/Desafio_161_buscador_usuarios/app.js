function init() {

    async function buscarID(id) {
        try {
            const resposta = await fetch(
                `https://jsonplaceholder.typicode.com/users/${id}`
            );

            if (!resposta.ok) {
                throw new Error("Usuário não encontrado");
            }

            return await resposta.json();

        } catch (erro) {
            console.error(erro);
            throw erro;
        }
    }

    const container = document.getElementById("container");

    const inputID = document.createElement("input");
    inputID.type = "number";
    inputID.placeholder = "Digite o ID do usuário";

    const botao = document.createElement("button");
    botao.textContent = "Buscar";

    const resultado = document.createElement("div");

    botao.addEventListener("click", async () => {
        try {
            const id = Number(inputID.value);

            if (!id) {
                resultado.textContent = "Digite um ID válido.";
                return;
            }

            const usuario = await buscarID(id);

            resultado.innerHTML = `
                <strong>Nome:</strong> ${usuario.name}<br>
                <strong>Email:</strong> ${usuario.email}<br>
                <strong>Telefone:</strong> ${usuario.phone}<br>
                <strong>Cidade:</strong> ${usuario.address.city}
            `;

        } catch (erro) {
            resultado.textContent = erro.message;
        }
    });

    container.appendChild(inputID);
    container.appendChild(botao);
    container.appendChild(resultado);
}

init();