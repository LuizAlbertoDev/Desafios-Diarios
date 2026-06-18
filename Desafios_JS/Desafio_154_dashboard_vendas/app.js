function init(){
    const vendas = [
    { produto: "Notebook", valor: 3500, categoria: "eletrônicos" },
    { produto: "Mouse", valor: 80, categoria: "eletrônicos" },
    { produto: "Cadeira", valor: 600, categoria: "móveis" },
    { produto: "Mesa", valor: 900, categoria: "móveis" },
    { produto: "Monitor", valor: 1200, categoria: "eletrônicos" },
    { produto: "Sofá", valor: 2200, categoria: "móveis" }
    ]

    const container = document.getElementById("container")
    const coluna1 = document.createElement("div")
    const coluna2 = document.createElement("div")
    const coluna3 = document.createElement("div")
    const coluna4 = document.createElement("div")

    coluna1.classList.add("coluna")
    coluna2.classList.add("coluna")
    coluna3.classList.add("coluna")
    coluna4.classList.add("coluna")

    const titulo1 = document.createElement("h2")
    titulo1.textContent = "Lista de Vendas"

    const titulo2 = document.createElement("h2")
    titulo2.textContent = "Total geral de vendas"

    const titulo3 = document.createElement("h2")
    titulo3.textContent = "Produtos Eletronicos"

    const titulo4 = document.createElement("h2")
    titulo4.textContent = "Desconto de 10%"

    const ulVendasEmGeral = document.createElement("ul")
    const ulTotalVendas = document.createElement("ul")
    const ulFiltro = document.createElement("ul")
    const ulDesconto = document.createElement("ul")

    function renderizar() {
        
        function vendasGeral(){
            vendas.forEach(n => {
            const lista = document.createElement("li")
            lista.textContent = `Produto: ${n.produto} - Preço: ${(n.valor).toFixed(2)} - Categoria: ${n.categoria}`
            ulVendasEmGeral.appendChild(lista)
            }) 
        }

        
        function vendasTotal(){
            const total = vendas.reduce((acc,atua) => {
            return acc + atua.valor
            },0)

            const listaGeralVendas = document.createElement("li")
            listaGeralVendas.textContent = `R$ ${(total).toFixed(2)}`
            ulTotalVendas.appendChild(listaGeralVendas)
        }
        
        function vendasFiltradas(){
            const filtrados = vendas.filter(n => n.categoria === "eletrônicos")
            filtrados.forEach(n => {
                const lista = document.createElement("li")
                lista.textContent = `${n.produto} - R$ ${(n.valor).toFixed(2)}`
                ulFiltro.appendChild(lista)
            })
        }

        function vendasDesconto(){
            const descontoVendas = vendas.map(n => ({produto: n.produto,valor: (n.valor * 0.90).toFixed(2)}))
            descontoVendas.forEach(n => {
                const lista = document.createElement("li")
                lista.textContent = `${n.produto} - R$ ${n.valor}`
                ulDesconto.appendChild(lista)
            })
        }

        

        vendasDesconto()
        vendasFiltradas()
        vendasGeral()
        vendasTotal()
    }

    renderizar()

    coluna1.appendChild(titulo1)
    coluna1.appendChild(ulVendasEmGeral)

    coluna2.appendChild(titulo2)
    coluna2.appendChild(ulTotalVendas)

    coluna3.appendChild(titulo3)
    coluna3.appendChild(ulFiltro)

    coluna4.appendChild(titulo4)
    coluna4.appendChild(ulDesconto)

    container.appendChild(coluna1);
    container.appendChild(coluna2);
    container.appendChild(coluna3);
    container.appendChild(coluna4);}

init()