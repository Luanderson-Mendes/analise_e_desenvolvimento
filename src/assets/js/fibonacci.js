const fibo = document.querySelector('#formulario')

fibo.addEventListener('submit', function(e){
    e.preventDefault()
    const inputValor = e.target.querySelector('#numero')
    const valor = Number(inputValor.value)

    if(!valor){
        setResultado('Insira um numero válido!', false)
        return
    }

    const valorFibo = fibonacci(valor)

    if (valorFibo){
        setResultado(`${valor} pertence a sequência de Fibonacci`, true)
    }else {
        setResultado(`${valor} não pertence a sequência de Fibonacci`, false)
    }  

    criaH3(valor)

})

function fibonacci(number) {

    //verifica se o numero pertence a sequência de Fibonacci
    function isFibonacci(number) {
        function isPerfectSquare(x) {
            let square = parseInt(Math.sqrt(x))
            return (square * square === x)
        }
        return isPerfectSquare (5 * number * number + 4) || isPerfectSquare(5 * number * number - 4)     
    }

    let isFibo
    isFibonacci(number) ? isFibo = true : isFibo = false
    return isFibo
}

function criaP () {
    const p = document.createElement('p')
    return p
}

function criaH3(number){
    const sequenciaFibo = document.querySelector('#sequencia-fibo')
    sequenciaFibo.innerHTML = ''
    const h3 = document.createElement('h3')
    const fib = [0,1]
    for (let i = 2; i <= number+1; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }


    h3.innerHTML = fib.join(' ')
    sequenciaFibo.appendChild(h3)
}

function setResultado (msg, isValid) {
    
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''

    const p = criaP()
    

    if (isValid) {
        p.classList.add('paragrafo-resultado')
    }else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p)
    
}

