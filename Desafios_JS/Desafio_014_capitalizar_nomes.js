const alunos = ["luiz", "ana", "carlos", "beatriz"];

const alunosFormados = alunos.map(n => n[0].toUpperCase() + n.slice(1))
console.log(alunosFormados)