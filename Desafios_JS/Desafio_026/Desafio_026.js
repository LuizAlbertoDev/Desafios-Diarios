function executar() {
    // 1. Pegue o input (Dica: chame de 'input')
    const input = document.getElementById("campo-nome")
    
    // 2. Pegue o parágrafo (Dica: chame de 'saida')
    const saida = document.getElementById("mensagem-saida")

    // 3. Mude o texto da saída:
    saida.innerHTML = `Olá, ${input.value}`
    saida.style.color ="red"
    saida.style.fontSize = "30px"
}