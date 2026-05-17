const fs = require('fs')
const path = require('path')

const pasta = `./Desafios_JS`
const arquivos = fs.readdirSync(pasta)

for (const arquivo of arquivos) {
  const caminhoCompleto = path.join(pasta, arquivo)
  const ehPasta = fs.statSync(caminhoCompleto).isDirectory()

  if (ehPasta) {
    console.log(`📁 Pasta: ${arquivo}`)
  } else {
    const conteudo = fs.readFileSync(caminhoCompleto, 'utf8')
    console.log(`📄 Arquivo: ${arquivo}`)
    console.log(conteudo)
  }
}