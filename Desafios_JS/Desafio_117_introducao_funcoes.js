function verificarAcesso (cargo) {
    switch(cargo){
        case "admin":
            console.log("Acesso total ao sistema.")
            break

        case "editor":
            console.log("Acesso apenas para editar conteúdos.")
            break

        case "visitante":
            console.log("Acesso apenas para leitura.")
            break

        default:
            console.log("Tipo de usuário inválido.")
    }
}

verificarAcesso("admin")
verificarAcesso("editor")
verificarAcesso("visitante")
verificarAcesso("ss")