// O Desafio Final da Noite (Full Stack Mindset)
// Agora vamos misturar tudo o que aprendemos hoje. Um desenvolvedor Full Stack precisa saber filtrar e depois transformar.

// Sua última missão:

// Use o mesmo array carrinho.

// Passo 1: Primeiro, use o método .filter() para criar um novo array apenas com os produtos que custam menos de 100 reais.

// Passo 2: Depois, pegue esse novo array filtrado e use o .map() para criar a string formatada (igual você fez acima).

// Exiba o resultado final no console.

// A lógica é: "Filtre os baratos e depois formate apenas eles para o site".

// Dica de rigor: Tente fazer um depois do outro. Você pode salvar o resultado do filtro em uma variável e depois usar o map nela.


const carrinho = [
    { nome: "Teclado", preco: 150 },
    { nome: "Mouse", preco: 50 },
    { nome: "Cabo HDMI", preco: 30 }
];

const carrinhoMenorQue100 = carrinho
    .filter( n => n.preco < 100 )
    .map(n =>{
        return `${n.nome.toUpperCase()} - R$ ${n.preco.toFixed(2)}`
    })

console.log(carrinhoMenorQue100)
