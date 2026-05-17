// Exercício 4: Controle de Estoque de Loja
// Imagine que você trabalha no Mercado Livre e precisa de uma ferramenta simples para listar produtos que chegaram no galpão.

// Requisitos:

// Inputs: Nome do Produto, Quantidade e Categoria (Eletrônicos, Alimentos, etc).

// Objeto: Cada produto deve ter { nome, qtd, categoria }.

// Botão "Aumentar": Cada item na lista deve ter um botão + que aumenta a quantidade em 1.

// Botão "Remover": Um botão para excluir o produto da lista.

// Destaque: Se a quantidade for menor que 5, coloque o texto em laranja (aviso de estoque baixo).

const produtos = []
const nomeProduto = document.getElementById("nomeProduto")
const qtdProduto = document.getElementById("qtdProduto")
const categoriaProduto = document.getElementById("categoria")
const lista = document.getElementById("lista-produto")

function adicionar(){
    const nomeValor = nomeProduto.value.trim()
    const qtd = Number(qtdProduto.value)
    const categoria = categoriaProduto.value.trim()

    if(nomeValor === "" || qtd <= 0 || categoria === ""){
        alert("Preencha os Campos")
        return
    }

    const produto = {
        nome:nomeValor.toUpperCase(),
        quantidade:qtd,
        categoria:categoria.toUpperCase()
    }

    produtos.push(produto)
    nomeProduto.value = ""
    qtdProduto.value = ""
    categoriaProduto.value = ""

    desenhar()
}

function desenhar(){
    lista.innerHTML =""

    produtos.forEach((n,index) => {
        const li = document.createElement("li")

        if(n.quantidade < 5){
            li.innerHTML = `
            
            Nome:${n.nome} - Quantidade:${n.quantidade}(estoque Baixo) - Categoria:${n.categoria}
            <button onclick="adicionarUm(${index})">Adicionar +1</button>
            <button onclick="remover(${index})">Remover</button>
        `
        li.style.color = "orange"
        }
        else{
            li.innerHTML = `
            
            Nome:${n.nome} - Quantidade:${n.quantidade} (estoque Baixo) - Categoria:${n.categoria}
            <button onclick="adicionarUm(${index})">Adicionar +1</button>
            <button onclick="remover(${index})">Remover</button>
        `
        }
        lista.appendChild(li)
    })
}

function adicionarUm(index){
    produtos[index].quantidade++
    desenhar()
}

function remover(index){
    produtos.splice(index,1)
    desenhar()
}