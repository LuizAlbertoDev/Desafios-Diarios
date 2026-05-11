const vendas = [
    { id: 1, valor: 100, status: "pago" },
    { id: 2, valor: 50, status: "pendente" },
    { id: 3, valor: 200, status: "pago" },
    { id: 4, valor: 80, status: "pago" },
    { id: 5, valor: 120, status: "pendente" }
];

const faturamentoTotal = vendas
    .filter(p => p.status ==="pago")
    .map(p => p.valor)
    .reduce((acc,atual) => acc + atual,0)

    console.log(faturamentoTotal)