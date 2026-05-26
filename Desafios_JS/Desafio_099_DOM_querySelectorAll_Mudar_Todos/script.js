const itens = document.querySelectorAll("li")

itens.forEach(item => {
    item.style.color = "green"
    item.classList.add("destaque")
    item.textContent="Item Modificado"
})