let idade = 18;
let temConviteVip = false;

if (idade < 18) {
    console.log("Acesso negado. Menor de idade.");

} else if (!temConviteVip) {
    console.log("Acesso à pista liberado.");
    
} else {
    console.log("Acesso VIP liberado!");
}