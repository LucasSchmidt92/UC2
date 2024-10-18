// criar uma função que gere uma saudação personalizada e retorne o resultado.

function saudacao (nome) {
    return (`olá ${nome}, como voce esta?`)
 }

console.log (saudacao ("Lucas"))





//Criar uma função que recebe uma temperatura em graus Celsius e retorna ela em fahrenheit

function temperatura (graus) {
    

    const fahrenheit = graus *1.8 + 32
    return {fahrenheit, graus}
}

const {graus,fahrenheit} =  temperatura (35)

console.log (``)
    

