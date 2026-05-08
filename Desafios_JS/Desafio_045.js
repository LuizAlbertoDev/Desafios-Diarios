const textoDoServidor = '{"produto": "Teclado Mecânico", "preco": 250, "emEstoque": true}';

const objetoProduto = JSON.parse(textoDoServidor)

console.log(objetoProduto)