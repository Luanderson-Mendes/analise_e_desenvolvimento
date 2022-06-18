
function calculaPercentual(){
    let faturamento = [
        {estado: 'sp', valor: 67836.43},
        {estado: 'rj', valor: 36678.66},
        {estado: 'mg', valor: 29229.88},
        {estado: 'es', valor: 27165.48},
        {estado: 'outros', valor: 19849.53},]

    const total = faturamento.map(item => item.valor).reduce((prev, curr) => prev + curr, 0)
    faturamento.push({estado: 'total', valor: total})
    // console.log(faturamento)
    const percentual = faturamento.map(e => e.valor / total * 100)
    for (let i = 0; i < percentual.length; i++){
        faturamento[i]['percentual'] = percentual[i].toFixed()
    }
    console.log(faturamento)

    let col = []

    for (let i = 0; i < faturamento.length; i++){
        for (let key in faturamento[i]){
            if(col.indexOf(key) === -1){
                col.push(key)
            }
        }
    }

    let table = document.createElement('table')

    let tr = table.insertRow()

    for(let i = 0; i < col.length; i++){
        let th = document.createElement('th')
        th.innerHTML = col[i]
        tr.appendChild(th)
    }

    for (let i = 0; i < faturamento.length; i++){
        tr = table.insertRow()
        let tabDia = document.createElement('td')
        let tabValor = document.createElement('td')
        let tabPercent = document.createElement('td')
        let dia = faturamento[i].estado, valor = faturamento[i].valor, percent = faturamento[i].percentual
        tabDia.innerHTML = dia
        tabValor.innerHTML = valor
        tabPercent.innerHTML = `${percent}%`
        tr.appendChild(tabDia)
        tr.appendChild(tabValor)      
        tr.appendChild(tabPercent)
        
    }

    let divTable = document.querySelector('.table')
    divTable.innerHTML = ''
    divTable.appendChild(table)
}

calculaPercentual()