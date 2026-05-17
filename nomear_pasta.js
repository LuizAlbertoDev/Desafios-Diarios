const fs = require('fs')
const path = require('path')

const pasta = './Desafios_JS'

// { pasta_atual: nome_novo_descritivo }
const pastas = {
  "projeto_007": "Desafio_007_injetor_dados_html",
  "projeto_008": "Desafio_008_lista_ul_li_html",
  "projeto_009": "Desafio_009_lista_botao_remover",
  "projeto_010": "Desafio_010_carrinho_total_dinamico",
  "projeto_023": "Desafio_023_alunos_aprovados_reprovados",
  "projeto_024": "Desafio_024_filtro_filmes_genero",
  "projeto_025": "Desafio_025_filtro_produtos_preco",
  "projeto_026": "Desafio_026_input_saudacao",
  "projeto_027": "Desafio_027_toggle_sinal_cores",
  "projeto_028": "Desafio_028_contador_botoes",
  "projeto_029": "Desafio_029_acumulador_historico",
  "projeto_030": "Desafio_030_verificador_idade",
  "projeto_031": "Desafio_031_lista_compras_preco",
  "projeto_032": "Desafio_032_historico_jogos_gols",
  "projeto_033": "Desafio_033_lista_filmes_assistir",
  "projeto_034": "Desafio_034_controle_estoque",
  "projeto_035": "Desafio_035_lista_convidados",
  "projeto_036": "Desafio_036_lista_nomes_cores",
  "projeto_041": "Desafio_041_tarefas_localStorage",
  "projeto_043": "Desafio_043_sem_acesso",
  "projeto_044": "Desafio_044_buscador_cep_trycatch",
  "projeto_051": "Desafio_051_tarefas_completadas_api"
}

let renomeados = 0
let erros = 0

for (const [nomeAtual, nomeNovo] of Object.entries(pastas)) {
  const caminhoPastaAtual = path.join(pasta, nomeAtual)
  const caminhoPastaNova = path.join(pasta, nomeNovo)

  try {
    // Renomeia a pasta
    fs.renameSync(caminhoPastaAtual, caminhoPastaNova)
    console.log(`📁 ${nomeAtual} → ${nomeNovo}`)
    renomeados++

    // Renomeia os arquivos dentro da pasta
    const arquivosDentro = fs.readdirSync(caminhoPastaNova)

    for (const arquivo of arquivosDentro) {
      const ext = path.extname(arquivo)
      if (ext === '.js' || ext === '.html') {
        const arquivoAtual = path.join(caminhoPastaNova, arquivo)
        const arquivoNovo = path.join(caminhoPastaNova, `${nomeNovo}${ext}`)
        fs.renameSync(arquivoAtual, arquivoNovo)
        console.log(`   ✅ ${arquivo} → ${nomeNovo}${ext}`)
      }
    }

  } catch (err) {
    console.log(`❌ Erro em ${nomeAtual}: ${err.message}`)
    erros++
  }
}

console.log(`\n🎉 Concluído! ${renomeados} pastas renomeadas, ${erros} erros.`)