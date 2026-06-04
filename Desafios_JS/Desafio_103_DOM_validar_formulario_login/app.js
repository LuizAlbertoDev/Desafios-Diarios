function formVerification(){
    const emailInput = document.getElementById("email")
    const passwordInput = document.getElementById("password")
    const form = document.getElementById("formLogin")
    const message = document.getElementById("message")

    if (!form || !emailInput || !passwordInput || !message) return

    form.addEventListener("submit", function(event){
        event.preventDefault()

        const email = emailInput.value
        const password = passwordInput.value

        if(email === "" || password === "") {
            message.classList.remove("message--success")
            message.classList.add("message--error")
            message.textContent = "Por favor, preencha todos os campos.❌"
        }
        else {
            message.classList.remove("message--error")
            message.classList.add("message--success")
            message.textContent = "Login realizado com sucesso!✅"
        }

    })
}

formVerification()


