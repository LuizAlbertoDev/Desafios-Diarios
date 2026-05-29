const itens = document.querySelectorAll(".item")

itens.forEach((item,index) => {
    
    if(index % 2 === 0) {
        item.style.backgroundColor = "blue"
    }else{
        item.style.backgroundColor = "orange"
    }
    
})