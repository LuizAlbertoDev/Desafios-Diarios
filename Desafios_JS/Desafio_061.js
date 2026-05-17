const numeros = [
    {nome:"luiz",
    idade: 25
   }, 
   {nome:"maria",
    idade: 30
   }, 
   {nome:"joão",
    idade: 20
}
];

const maiorQue25 = numeros.find(n => n.idade > 25)

console.log(maiorQue25)