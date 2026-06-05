function init() {
    const filtro = document.getElementById('filtro');
    const lista = document.getElementById('lista');
    const message = document.getElementById('message');
    const frutas = ['Maçã', 'Banana', 'Laranja', 'Abacaxi', 'Uva', 'Melancia'];

    if (!filtro || !lista ||!message) {
        console.error('Elementos não encontrados no DOM');
        return
    }

        function renderizarLista(frutasExibir) {
            lista.innerHTML = '';

            frutasExibir.forEach(fruta => {
                const li = document.createElement('li');
                li.textContent = fruta;
                lista.appendChild(li);
            });
        }

        // Mostra todas ao carregar
        renderizarLista(frutas);

        filtro.addEventListener('input', (e) => {
            const valorFiltro = e.target.value.trim().toLowerCase();

            const frutasFiltradas = frutas.filter(fruta =>
                fruta.toLowerCase().includes(valorFiltro)
            );

            if (frutasFiltradas.length === 0) {
                lista.innerHTML = '';
                message.textContent = 'Nenhuma fruta encontrada';
                return;
            }

            message.textContent = '';
            renderizarLista(frutasFiltradas);
        });

    
}

init()