function init() {
    const container = document.getElementById("container");

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const coluna1 = document.createElement("div");
    const coluna2 = document.createElement("div");
    const coluna3 = document.createElement("div");

    coluna1.classList.add("coluna");
    coluna2.classList.add("coluna");
    coluna3.classList.add("coluna");

    const titulo1 = document.createElement("h2");
    titulo1.textContent = "Originais";

    const titulo2 = document.createElement("h2");
    titulo2.textContent = "Dobrados";

    const titulo3 = document.createElement("h2");
    titulo3.textContent = "Pares";

    const ulPrincipal = document.createElement("ul");
    const ulDobrados = document.createElement("ul");
    const ulFiltrados = document.createElement("ul");

    const botao = document.createElement("button");
    botao.textContent = "Embaralhar";
    botao.classList.add("botao");

    function renderizar() {
        ulPrincipal.innerHTML = "";
        ulDobrados.innerHTML = "";
        ulFiltrados.innerHTML = "";

        numeros.forEach((n) => {
            const li = document.createElement("li");
            li.textContent = n;
            ulPrincipal.appendChild(li);
        });

        numeros
            .map((n) => n * 2)
            .forEach((n) => {
                const li = document.createElement("li");
                li.textContent = n;
                ulDobrados.appendChild(li);
            });

        numeros
            .filter((n) => n % 2 === 0)
            .forEach((n) => {
                const li = document.createElement("li");
                li.textContent = n;
                ulFiltrados.appendChild(li);
            });
    }

    botao.addEventListener("click", () => {
        numeros.sort(() => Math.random() - 0.5);
        renderizar();
    });

    coluna1.appendChild(titulo1);
    coluna1.appendChild(ulPrincipal);

    coluna2.appendChild(titulo2);
    coluna2.appendChild(ulDobrados);

    coluna3.appendChild(titulo3);
    coluna3.appendChild(ulFiltrados);

    container.appendChild(coluna1);
    container.appendChild(coluna2);
    container.appendChild(coluna3);
    container.appendChild(botao);

    renderizar();
}

init();