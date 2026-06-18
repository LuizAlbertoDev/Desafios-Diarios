const buscarUsuario = new Promise((resolve, reject) => {
    setTimeout(() => {
        const usuarioExiste = true
        
        if (usuarioExiste) {
            resolve("Usuário encontrado!")
        } else {
            reject("Usuário não encontrado")
        }
    }, 2000)
})

buscarUsuario
    .then((resultado) => {
        console.log(resultado)
    })
    .catch((erro) => {
        console.log(erro)
    })