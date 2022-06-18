

const fibo = document.querySelector('.fibonacci')
const dados = document.querySelector('.data')
const percentual = document.querySelector('.percentual')
const string = document.querySelector('.string')

fibo.addEventListener('click', function(e) {
    window.location.assign('../../https/Fibonacci/fibonacci.html') 
})

dados.addEventListener('click', function(e) {
    window.location.assign('../../https/AnaliseDeDados/dados.html') 
})

percentual.addEventListener('click', function(e) {
    window.location.assign('../../https/PercentualDeRepresentacao/percentualDeRepresentacao.html') 
})

string.addEventListener('click', function(e) {
    window.location.assign('../../https/InversorDeString/inversorDeString.html') 
})