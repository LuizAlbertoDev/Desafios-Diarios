const idade = document.getElementById("idade-input")

const paragrafo = document.getElementById("resultado")

function verificar(){
    const valor = Number(idade.value)

    const aprovado = valor >= 18

    paragrafo.innerHTML = aprovado 
        ? "Entrada Liberada ✅" 
        : "Entrada Proibida ❌";

    paragrafo.className = aprovado 
        ? "aprovado" 
        : "reprovado";
        
}