const dados = require('../data/dados.json')

//faz o tratamento dos dados para remover dias que estão sem faturamento
const newData = dados.filter((item) => item.valor !== 0)
//calcula o valor total de todos os faturamentos
const total = newData.map((item) => item.valor).reduce((prev, curr) => prev + curr, 0)
//realiza a media mensal do faturamento
const mediaMensal = total / newData.length

//retorna o maior valor de faturamento ocorrido em um dia do mês
const maiorValor = newData.map((item) => item.valor).reduce((ini, end) => Math.max(ini, end))
//retorna o menor valor de faturamento ocorrido em um dia do mês
const menorValor = newData.map((item) => item.valor).reduce((ini, end) => Math.min(ini, end))
//retorna o numero de dias no mês em que o valor de faturamento diário foi superior à média mensal
const faturamentoMaiorMedia = newData.filter((item) => item.valor > mediaMensal).length



