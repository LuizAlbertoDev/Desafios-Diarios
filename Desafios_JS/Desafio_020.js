const compras = [
    { produto: "Monitor", data: "2026-05-01" },
    { produto: "Teclado", data: "2026-03-15" },
    { produto: "Mouse", data: "2026-04-20" }
];

compras.sort((a,b) => new Date(a.data) - new Date(b.data))

const comprasFormatadas = compras
    .sort((a,b) => new Date(a.data) - new Date(b.data))
    .map(n => 
        `Produto: ${n.produto} - Data: ${n.data.split("-").reverse().join("/")}`
    )

console.log(comprasFormatadas)