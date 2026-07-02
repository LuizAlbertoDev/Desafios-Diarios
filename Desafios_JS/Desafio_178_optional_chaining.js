const usuario1 = { nome: "Ana", endereco: { cidade: "Curitiba" } };
const usuario2 = { nome: "Beto" };

const cidadeUsuario1 = usuario1.endereco?.cidade
const cidadeUsuario2 = usuario2.endereco?.cidade

console.log(cidadeUsuario1)
console.log(cidadeUsuario2)