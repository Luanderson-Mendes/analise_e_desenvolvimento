const dados = fetch('../data/dados.js')
const divTable = document.querySelector('.table') 

console.log(dados)

// //faz o tratamento dos dados para remover dias que estão sem faturamento
// const newData = dados.filter((item) => item.valor !== 0)
// //calcula o valor total de todos os faturamentos
// const total = newData.map((item) => item.valor).reduce((prev, curr) => prev + curr, 0)
// //realiza a media mensal do faturamento
// const mediaMensal = total / newData.length

// //retorna o maior valor de faturamento ocorrido em um dia do mês
// const maiorValor = newData.map((item) => item.valor).reduce((ini, end) => Math.max(ini, end))
// //retorna o menor valor de faturamento ocorrido em um dia do mês
// const menorValor = newData.map((item) => item.valor).reduce((ini, end) => Math.min(ini, end))
// //retorna o numero de dias no mês em que o valor de faturamento diário foi superior à média mensal
// const faturamentoMaiorMedia = newData.filter((item) => item.valor > mediaMensal).length

// const col = []

// for (let i = 0; i < newData.length; i++){
//     for (let key in newData[i]){
//         if (col.indexOf(key) === -1){
//             col.push(key)
//         }
//     }
// }

// for (let i = 0; i < col.length; i++){
//     let th = document.createElement('th')
//     th.innerHTML = col[i]
//     tr.appendChild(th)
// }

// for (let i = 0; i < newData.length; i++){
//     tr = table.insertRow()

//     for (let j = 0; j < col.length; i++){
//         let tabCell = tr.insertCell()
//         if (j !== 2) {
//             tabCell.appendChild(document.createTextNode(newData[i][col[j]]))
//         }else {
//             for (let x = 0; x < newData[i].length; x++){
//                 let dia = newData[i].dia, valor = newData[i].valor
//                 tabCell.appendChild(document.createTextNode(" " + dia + " " + valor))
//             }
//         }
//     }
// }

// const table = document.createElement('table')
// const tr = table.insertRow()

// divTable.innerHTML = ''
// divTable.appendChild(table)



