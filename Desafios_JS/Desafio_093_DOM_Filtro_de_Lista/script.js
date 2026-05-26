const inputBusca = document.getElementById("input-buscar")
const nomes = document.querySelectorAll("#lista li")

inputBusca.addEventListener("input", function(){
    
    const valor = inputBusca.value.toLowerCase()

    nomes.forEach(nome => {
        const texto = nome.textContent.toLowerCase()

        if(texto.includes(valor)){
            nome.classList.remove("hidden")
        }else{
            nome.classList.add("hidden")
        }
    })
})

