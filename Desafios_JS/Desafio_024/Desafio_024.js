const filmes = [
    { titulo: "Mad Max", genero: "Ação" },
    { titulo: "O Poderoso Chefão", genero: "Drama" },
    { titulo: "John Wick", genero: "Ação" },
    { titulo: "Para Sempre", genero: "Drama" }
];

const listaUl = document.getElementById("lista-filmes");

function desenharTela(listaDeFilmes) {
    listaUl.innerHTML = ""; 

    listaDeFilmes.forEach(filme => {
        listaUl.innerHTML += `<li>${filme.titulo}</li>`
    });
}

function filtrar(generoEscolhido) {
    if (generoEscolhido === 'Todos') {
        desenharTela(filmes);

    } else {
        const filtrados = filmes.filter(n => n.genero === generoEscolhido)
        desenharTela(filtrados)
    }
}

desenharTela(filmes);