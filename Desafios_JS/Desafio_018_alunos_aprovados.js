const alunos = [
    { nome: "Luiz", nota: 8.5 },
    { nome: "Ana", nota: 4.0 },
    { nome: "Carlos", nota: 7.0 },
    { nome: "Beatriz", nota: 5.5 }
];

const aprovados = alunos
    .filter(n => n.nota > 6.0)
    .map(n => n.nome.toUpperCase())

const alunoDestaque = alunos.some(n => n.nota > 9.0)

console.log(aprovados)
console.log(alunoDestaque)