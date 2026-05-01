const vendas = [
    { item: "Camisa", preco: 50, categoria: "Vestuario" },
    { item: "Mouse", preco: 100, categoria: "Eletronicos" },
    { item: "Calça", preco: 150, categoria: "Vestuario" },
    { item: "Teclado", preco: 200, categoria: "Eletronicos" }
];

const filtro = vendas   
    .filter(n => n.categoria === "Eletronicos")
    .reduce((acc,atual) => acc + atual.preco,0)

    console.log(`O total de vendas em Eletrônicos foi: R$ ${filtro}`)