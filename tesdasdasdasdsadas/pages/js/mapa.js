const prateleiras =
document.querySelectorAll(".prateleira")

prateleiras.forEach(prateleira => {

    prateleira.addEventListener("click", () => {

        document
        .querySelectorAll(".prateleira")
        .forEach(item => {
            item.classList.remove("ativa")
        })

        prateleira.classList.add("ativa")

    })

})