const form = document.querySelector('#formulario')

form.addEventListener('submit', function(e){
    e.preventDefault()
})

const dados = fetch('../../assets/data/dados.json')
.then(function(res) {
    return res.json()
}).then(function(dados){
    const newData = dados.filter((item) => item.valor !== 0)
    const total = newData.map((item) => item.valor).reduce((prev, curr) => prev + curr, 0)
    const mediaMensal = total / newData.length
    
    const maiorValor = newData.map((item) => item.valor).reduce((ini, end) => Math.max(ini, end))
    const menorValor = newData.map((item) => item.valor).reduce((ini, end) => Math.min(ini, end))
    const faturamentoMaiorMedia = newData.filter((item) => item.valor > mediaMensal).length

    let col = []

    for (let i = 0; i < newData.length; i++){
        for (let key in newData[i]){
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

    for (let i = 0; i < newData.length; i++){
        tr = table.insertRow()
        let tabDia = document.createElement('td')
        let tabValor = document.createElement('td')
        let dia = newData[i].dia, valor = newData[i].valor
        tabDia.innerHTML = dia
        tabValor.innerHTML = valor
        tr.appendChild(tabDia)
        tr.appendChild(tabValor)      
        
    }

    let divTable = document.querySelector('.table')
    divTable.innerHTML = ''
    divTable.appendChild(table)
})