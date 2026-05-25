const botao = document.getElementById("btn-tema")

botao.addEventListener("click", function(){
    document.body.classList.toggle("dark")
})

const dev = {
    nome:"Luiz", 
    idade:31, 
    cidade:"São José", 
    tecnologia:["HTML","CSS","JavaScript","React"]
}


dev.tecnologia.forEach(tec => {
    console.log(tec)
});

function apresentar(pessoa){
    return `Olá, Me chamo ${pessoa.nome}, tenho ${pessoa.idade} anos e moro em ${pessoa.cidade}`
}


console.log(apresentar(dev));