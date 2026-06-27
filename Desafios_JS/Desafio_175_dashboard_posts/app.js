function init(){
    let pagina = 1

        const container = document.getElementById("container")
        const paginaAtual = document.getElementById("paginaAtual")
        const listaPost = document.getElementById("listaPost")
        const btnAnterior = document.getElementById("btn-anterior")
        const btnProximo = document.getElementById("btn-proximo")
        const inputBuscar = document.getElementById("input-buscar")
        const barraStatus = document.getElementById("status")
        const buscar = document.getElementById("buscar")
        const loading = document.getElementById("loading")

        async function buscador(pagina) {

            try{
                loading.style.display = "block";
                loading.textContent = "Carregando...";

                const resultado = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pagina}&_limit=5`)
            
                if(!resultado.ok){
                    throw new Error(`Erro: ${resultado.status}`)
                }

                barraStatus.textContent = "";

                const post = await resultado.json()

                listaPost.innerHTML = ""

                post.forEach(post => {
                    const li = document.createElement("li")
                    li.textContent = `${post.title}`
                    listaPost.appendChild(li)
                })

                paginaAtual.textContent = `Pagina: ${pagina}`

            }
            catch(erro){
                barraStatus.textContent = erro.message
            }
            finally {
                loading.style.display = "none";
            }
        }

        function atualizarBotoes() {
            btnAnterior.disabled = pagina === 1;
        }

        buscar.addEventListener("click", () => {

            pagina = Number(inputBuscar.value)

            if(!pagina){
                barraStatus.textContent = "Digite uma pagina Valida!"
                return
            }

            buscador(pagina)

            atualizarBotoes();

            inputBuscar.value = ``
        })

        btnAnterior.addEventListener("click",() => {
            if (pagina > 1) {
                pagina--;
                buscador(pagina);
                atualizarBotoes()
            }
        })

        btnProximo.addEventListener("click", () => {
            pagina++
            buscador(pagina)
            atualizarBotoes()
        })

        atualizarBotoes();
    }
init()