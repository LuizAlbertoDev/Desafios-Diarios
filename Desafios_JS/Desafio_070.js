const pessoas = [
  {
    nome: "Luiz",
    idade: 25,
    profissao: "Desenvolvedor"
  },
  {
    nome: "Maria",
    idade: 30,
    profissao: "Designer"
  },
  {
    nome: "João",
    idade: 22,
    profissao: "Professor"
  },
  {
    nome: "Ana",
    idade: 28,
    profissao: "Nutricionista"
  },
  {
    nome: "Carlos",
    idade: 35,
    profissao: "Mecânico"
  }
];

const maioresDe25 = pessoas
    .filter(pessoas => pessoas.idade > 25)
    .map(pessoas => ({ nome: pessoas.nome, profissao: pessoas.profissao }));

console.log(maioresDe25);