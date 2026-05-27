const botaoTema = document.querySelector("#btn-theme");
const corpoDaPagina = document.body; 

botaoTema.addEventListener('click', () => {
    corpoDaPagina.classList.toggle("dark-theme");

    botaoTema.textContent = corpoDaPagina.classList.contains("dark-theme") 
        ? "Mudar para Light Mode" 
        : "Mudar para Dark Mode";
});