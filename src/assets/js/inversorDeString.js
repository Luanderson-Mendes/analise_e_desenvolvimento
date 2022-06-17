function reverseString(text) {
    let normalString = [...text]
    let reversedString = []
    for (let i = normalString.length; i > 0; i--){
        reversedString.push(normalString[i-1])
    }
    console.log(reversedString.join(''))  
}

reverseString('Luanderson Mendes')