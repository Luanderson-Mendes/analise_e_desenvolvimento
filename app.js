const express = require('express')
const open = require('open')
const app = express()

app.use(express.static(__dirname + '/src'))

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/src/index.html')
})

app.get('/Fibonacci', function(req, res) {
    res.sendFile(__dirname + '/src/https/1_SequenciaFibonacci/fibonacci.html')
})

app.get('/Dados', function (req, res) {
    res.sendFile(__dirname + '/src/https/2_DadosDistribuidora/dados.html')    
})

app.get('/PercentualDeRepresentacao', function (req, res) {
    res.sendFile(__dirname + '/src/https/3_PercentualDeRepresentacao/percentualDeRepresentacao.html')    
})

app.get('/InversorDeString', function (req, res) {
    res.sendFile(__dirname + '/src/https/4_InversorDeString/inversorDeString.html')    
})

app.listen(3000)

open("http://localhost:3000")

