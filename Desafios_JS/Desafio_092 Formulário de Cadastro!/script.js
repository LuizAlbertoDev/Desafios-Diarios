const inputNome = document.getElementById("input-nome")
const inputEmail = document.getElementById("input-email")
const inputIdade = document.getElementById("input-idade")

const erroNome = document.getElementById("erro-nome")
const erroEmail = document.getElementById("erro-email")
const erroIdade = document.getElementById("erro-idade")

const botao = document.getElementById("btn-cadastrar")
const resultado = document.getElementById("resultado")




botao.addEventListener("click", function(){

    let formularioValido = true

    erroNome.textContent = ""
    erroEmail.textContent = ""
    erroIdade.textContent = ""

    resultado.innerHTML = ""

    const nome = inputNome.value.trim()
    const email = inputEmail.value.trim()
    const idade = Number(inputIdade.value)

    if (nome === "") {

        erroNome.textContent = "Nome obrigatório"

        formularioValido = false

    } else if (/\d/.test(nome)) {

        erroNome.textContent = "O nome não pode conter números"

        formularioValido = false
    }

    if(!email.includes("@")){
        erroEmail.textContent = `Email Invalido!`
        formularioValido = false
    }
    if(idade < 1 || idade > 120 || isNaN(idade)){
        erroIdade.textContent = `Idade Invalida!`
        formularioValido = false
    }

    if(formularioValido){
        resultado.innerHTML = `
            <div class="card">
                <h3>Cadastro realizado!</h3>

                <p><strong>Nome:</strong> ${nome}</p>

                <p><strong>Email:</strong> ${email}</p>

                <p><strong>Idade:</strong> ${idade}</p>
            </div>
        `
    }
})