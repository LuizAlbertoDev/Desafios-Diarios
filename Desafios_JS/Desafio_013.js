const anosNascimento = [1990, 1998, 2005, 2010];
const anoAtual = 2026;

const idades = anosNascimento.map( n => anoAtual - n)

console.log(idades)