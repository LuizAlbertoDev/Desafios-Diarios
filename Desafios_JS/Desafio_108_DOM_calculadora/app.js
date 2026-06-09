let primeiroNumero = ""
let segundoNumero = ""
let operacao = ""
let resultado = 0
let visor

function init() {
    const app = document.getElementById("app")

    const botoes = [
        "7", "8", "9", "/",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        "0", "C", "=", "+"
    ]

    app.innerHTML = `
        <h1>Calculadora</h1>
        <div id="visor">0</div>
    `

    visor = document.getElementById("visor")

    botoes.forEach(texto => {
        const botao = document.createElement("button")
        botao.textContent = texto
        app.appendChild(botao)

        botao.addEventListener("click", () => {

            if (!isNaN(texto)) {
                if (operacao === "") {
                    primeiroNumero += texto
                    visor.textContent = primeiroNumero
                } else {
                    segundoNumero += texto
                    visor.textContent = `${primeiroNumero} ${operacao} ${segundoNumero}`
                }
            }

            else if (["+", "-", "*", "/"].includes(texto)) {
                if (primeiroNumero !== "" && segundoNumero === "") {
                    operacao = texto
                    visor.textContent = `${primeiroNumero} ${operacao}`
                }
            }

            else if (texto === "=") {
                if (
                    primeiroNumero !== "" &&
                    segundoNumero !== "" &&
                    operacao !== ""
                ) {
                    calcular()
                }
            }

            else if (texto === "C") {
                limpar()
            }
        })
    })
}

function calcular() {
    const n1 = Number(primeiroNumero)
    const n2 = Number(segundoNumero)

    switch (operacao) {
        case "+":
            resultado = n1 + n2
            break

        case "-":
            resultado = n1 - n2
            break

        case "*":
            resultado = n1 * n2
            break

        case "/":
            resultado = n2 !== 0 ? n1 / n2 : "Erro"
            break

        default:
            return
    }

    visor.textContent = resultado

    primeiroNumero = resultado.toString()
    segundoNumero = ""
    operacao = ""
}

function limpar() {
    primeiroNumero = ""
    segundoNumero = ""
    operacao = ""
    resultado = 0
    visor.textContent = "0"
}

init()