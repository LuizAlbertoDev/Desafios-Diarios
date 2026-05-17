const usuariosBanidos = [
    { id: 101, user: "shadow_hunter", motivo: "spam" },
    { id: 102, user: "megatron2026", motivo: "toxicidade" },
    { id: 103, user: "junior_dev", motivo: "tentativa de hack" }
];

const buscadorDeNome = usuariosBanidos
    .find(n => n.user === "megatron2026")

const buscadorDeHack = usuariosBanidos
    .some(n => n.motivo === "tentativa de hack")

const buscadorDeSpam = usuariosBanidos
    .filter(n => n.motivo === "spam")
    .map(n => n.user)

console.log(buscadorDeNome)
console.log(buscadorDeHack)
console.log(buscadorDeSpam)    