const dados = fetch('../../assets/data/dados.json')
.then(function(res) {
    return res.json()
}).then(function(dados){
    const form = document.querySelector('#formulario')

    form.addEventListener('submit', function(e){
        e.preventDefault()

        let divTable = document.querySelector('.table')
        let newData = dados.filter((item) => item.valor !== 0)
        const total = newData.map((item) => item.valor).reduce((prev, curr) => prev + curr, 0)
        const mediaMensal = total / newData.length
            
        const maiorValor = newData.map((item) => item.valor).reduce((ini, end) => Math.max(ini, end))
        const menorValor = newData.map((item) => item.valor).reduce((ini, end) => Math.min(ini, end))

        const faturamentoMaiorMedia = newData.filter((item) => item.valor > mediaMensal)
        const qntfaturamentoMaiorMedia = newData.filter((item) => item.valor > mediaMensal).length
        const valorMaior = newData.filter((item) => item.valor === maiorValor)
        const valorMenor = newData.filter((item) => item.valor === menorValor)
 

        for(let i = 0; i < form.length; i++){
            if(form[i].checked){
                switch (form[i].value) {
                    case 'total-table':
                        tabela(newData)
                        break;
                    case 'max-value':
                        tabela(valorMaior)
                        break;
                    case 'min-value':
                        tabela(valorMenor)
                        break;
                    case 'higher-media':
                        tabela(faturamentoMaiorMedia)
                        let h4 = document.createElement('h4')
                        h4.innerHTML = `
                            Total de dias: ${qntfaturamentoMaiorMedia} </br>
                            Média Mensal: ${mediaMensal.toFixed(4)}
                        `
                        divTable.appendChild(h4)
                        break;
                    default:
                        break;
                }
            }
        }

        

        function tabela(dados){
            let col = []
    
            for (let i = 0; i < dados.length; i++){
                for (let key in dados[i]){
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
    
            for (let i = 0; i < dados.length; i++){
                tr = table.insertRow()
                let tabDia = document.createElement('td')
                let tabValor = document.createElement('td')
                let dia = dados[i].dia, valor = dados[i].valor
                tabDia.innerHTML = dia
                tabValor.innerHTML = valor
                tr.appendChild(tabDia)
                tr.appendChild(tabValor)      
                
            }
    
            let divTable = document.querySelector('.table')
            divTable.innerHTML = ''
            divTable.appendChild(table)
        }
    })

})