
function calculaPercentual(){
    let faturamento = [
        {estado: 'sp', valor: 67836.43},
        {estado: 'rj', valor: 36678.66},
        {estado: 'mg', valor: 29229.88},
        {estado: 'es', valor: 27165.48},
        {estado: 'outros', valor: 19849.53},]

    const total = faturamento.map(item => item.valor).reduce((prev, curr) => prev + curr, 0)
    const percentual = faturamento.map(e => e.valor / total * 100)
    for (let i = 0; i < percentual.length; i++){
        console.log(parseInt(percentual[i]).toFixed())
    } 
}

calculaPercentual()