const alunos = [
    { nome: "Luiz", nota: 8.5 },
    { nome: "Ana", nota: 4.0 },
    { nome: "Carlos", nota: 7.0 },
    { nome: "Beatriz", nota: 5.5 }
];

const listaUl = document.getElementById("lista-alunos");

alunos.forEach(aluno =>{
    const classe = aluno.nota >= 6 ? "aprovado" : "reprovado"

    listaUl.innerHTML += `
        <li class="${classe}">
            ${aluno.nome} - Nota: ${aluno.nota}
        </li>
    `
})

