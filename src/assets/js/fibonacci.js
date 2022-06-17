function fibonacci(number) {

    //verifica se o numero pertence a sequência de Fibonacci
    function isFibonacci(number) {
        function isPerfectSquare(x) {
            let square = parseInt(Math.sqrt(x))
            return (square * square === x)
        }
        return isPerfectSquare (5 * number * number + 4) || isPerfectSquare(5 * number * number - 4)     
    }

    // calcula e cria a sequência de Fibonacci 
    const fib = [0,1]
    for (let i = 2; i <= number+1; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }

    console.log(fib)
    isFibonacci(number) ? console.log(number + ' pertence a sequência de fibonacci') : console.log(number + ' não pertence a sequência fibonacci')
}

fibonacci(4)