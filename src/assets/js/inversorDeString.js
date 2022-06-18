const form = document.querySelector("#formulario")

form.addEventListener('submit', function(e){
    e.preventDefault()
    const inputString = e.target.querySelector('#string')

    const text = inputString.value

    if (!text){
        setResultado('Campo não pode estar vázio', false)
        return
    }

    const msg = reverseString(text)
    
    setResultado(msg, true)
})


function criaP () {
    const p = document.createElement('p')
    return p
}
function criaH4() {
    const h4 = document.createElement('h4')
    return h4
}


function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''

    const p = criaP()
    const h4 = criaH4()

    if (isValid) {
        h4.innerHTML = "Texto Invertido"
        resultado.appendChild(h4)
        h4.classList.add('string')
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p)
}

function reverseString(text) {
    let normalString = [...text]
    let reversedString = []
    for (let i = normalString.length; i > 0; i--){
        reversedString.push(normalString[i-1])
    }
    return reversedString.join('')
}

