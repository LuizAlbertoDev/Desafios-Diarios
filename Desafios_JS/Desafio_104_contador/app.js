function init() {  
    const contador = document.getElementById('contador');
    const incrementarBtn = document.getElementById('incrementar');
    const decrementarBtn = document.getElementById('decrementar');
    const resetarBtn = document.getElementById('resetar');

    if(!contador || !incrementarBtn || !decrementarBtn || !resetarBtn) {
    console.error("Elementos do DOM não encontrados. Verifique os IDs dos elementos.");
    return;
    }

    let valorContador = 0;

    function contadorMaiorQueZero() {
        return valorContador > 0;
    }

    incrementarBtn.addEventListener("click",() => {
        valorContador++;
        contador.textContent = `Contador: ${valorContador}`;
        if(contadorMaiorQueZero()) {
            decrementarBtn.disabled = false;
        }
    })

    decrementarBtn.addEventListener("click",() => {
        valorContador--;
        contador.textContent = `Contador: ${valorContador}`;
        if(!contadorMaiorQueZero()) {
            decrementarBtn.disabled = true;
        }
    })

    resetarBtn.addEventListener("click",() => {
        valorContador = 0;
        contador.textContent = `Contador: ${valorContador}`;
        decrementarBtn.disabled = true;
    })
}

init()

