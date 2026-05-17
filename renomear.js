const fs = require('fs')
const path = require('path')

const pasta = './Desafios_JS'

const arquivos = {
  "carrinho_desconto.js":          "Desafio_001_carrinho_desconto.js",
  "filtro_carrinho_preco.js":      "Desafio_002_filtro_carrinho_preco.js",
  "calcular_imposto.js":           "Desafio_003_calcular_imposto.js",
  "map_formatacao_produtos.js":    "Desafio_004_map_formatacao_produtos.js",
  "filter_map_baratos.js":         "Desafio_005_filter_map_baratos.js",
  "filter_reduce_total.js":        "Desafio_006_filter_reduce_total.js",
  "relatorio_estoque.js":          "Desafio_011_relatorio_estoque.js",
  "conversao_dolar_real.js":       "Desafio_012_conversao_dolar_real.js",
  "calcular_idades.js":            "Desafio_013_calcular_idades.js",
  "capitalizar_nomes.js":          "Desafio_014_capitalizar_nomes.js",
  "filtrar_nomes_letra.js":        "Desafio_015_filtrar_nomes_letra.js",
  "produtos_desconto_10.js":       "Desafio_016_produtos_desconto_10.js",
  "buscar_usuarios_banidos.js":    "Desafio_017_buscar_usuarios_banidos.js",
  "alunos_aprovados.js":           "Desafio_018_alunos_aprovados.js",
  "estoque_sem_duplicados.js":     "Desafio_019_estoque_sem_duplicados.js",
  "compras_ordenadas_data.js":     "Desafio_020_compras_ordenadas_data.js",
  "total_vendas_eletronicos.js":   "Desafio_021_total_vendas_eletronicos.js",
  "aumento_preco_alimentos.js":    "Desafio_022_aumento_preco_alimentos.js",
  "soma_precos_forEach.js":        "Desafio_037_soma_precos_forEach.js",
  "estoque_baixo_quantidade.js":   "Desafio_038_estoque_baixo_quantidade.js",
  "atualizar_preco_lista.js":      "Desafio_039_atualizar_preco_lista.js",
  "toggle_lampada.js":             "Desafio_040_toggle_lampada.js",
  "consultar_cep_viacep.js":       "Desafio_042_consultar_cep_viacep.js",
  "parse_json_produto.js":         "Desafio_045_parse_json_produto.js",
  "buscar_usuario_api.js":         "Desafio_046_buscar_usuario_api.js",
  "analise_produtos.js":           "Desafio_047_analise_produtos.js",
  "total_eletronicos.js":          "Desafio_048_total_eletronicos.js",
  "faturamento_vendas_pagas.js":   "Desafio_049_faturamento_vendas_pagas.js",
  "contar_tarefas_completas.js":   "Desafio_050_contar_tarefas_completas.js",
  "verificar_disponibilidade.js":  "Desafio_052_verificar_disponibilidade.js",
  "relatorio_valor_estoque.js":    "Desafio_053_relatorio_valor_estoque.js",
  "media_turma_aprovados.js":      "Desafio_054_media_turma_aprovados.js",
  "switch_dia_semana.js":          "Desafio_055_switch_dia_semana.js",
  "while_contador.js":             "Desafio_056_while_contador.js",
  "forof_frutas.js":               "Desafio_057_forof_frutas.js",
  "funcoes_matematicas.js":        "Desafio_058_funcoes_matematicas.js",
  "arrow_functions_matematicas.js":"Desafio_059_arrow_functions_matematicas.js",
  "callback_operacoes.js":         "Desafio_060_callback_operacoes.js",
  "find_maior_idade.js":           "Desafio_061_find_maior_idade.js",
  "buscar_cep_parametro.js":       "Desafio_062_buscar_cep_parametro.js",
  "listar_ceps_viacep.js":         "Desafio_063_listar_ceps_viacep.js",
  "listar_pokemons_api.js":        "Desafio_064_listar_pokemons_api.js",
  "listar_usuarios_empresa.js":    "Desafio_065_listar_usuarios_empresa.js",
  "posts_tamanho_descricao.js":    "Desafio_066_posts_tamanho_descricao.js",
  "tarefas_status.js":             "Desafio_067_tarefas_status.js",
  "posts_autor_vip.js":            "Desafio_068_posts_autor_vip.js",
  "posts_usuario_filtrado.js":     "Desafio_069_posts_usuario_filtrado.js",
  "pessoas_maiores_25.js":         "Desafio_070_pessoas_maiores_25.js",
  "total_caracteres_posts.js":     "Desafio_071_total_caracteres_posts.js"
}

let renomeados = 0
let erros = 0

for (const [nomeAtual, nomeNovo] of Object.entries(arquivos)) {
  const caminhoAtual = path.join(pasta, nomeAtual)
  const caminhoNovo = path.join(pasta, nomeNovo)

  try {
    fs.renameSync(caminhoAtual, caminhoNovo)
    console.log(`✅ ${nomeAtual} → ${nomeNovo}`)
    renomeados++
  } catch (err) {
    console.log(`❌ Erro ao renomear ${nomeAtual}: ${err.message}`)
    erros++
  }
}

console.log(`\n🎉 Concluído! ${renomeados} renomeados, ${erros} erros.`)