const abas = document.querySelectorAll(".aba")
const conteudos = document.querySelectorAll(".conteudo")

abas.forEach(aba => {

    aba.addEventListener("click", function(){

        abas.forEach(botao => {
            botao.classList.remove("ativa")
        })

        conteudos.forEach(conteudo => {
            conteudo.classList.remove("ativo")
        })

        aba.classList.add("ativa")

        const id = aba.dataset.aba
        
        document.getElementById(id)
            .classList.add("ativo")
    })
})