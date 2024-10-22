// usando loop while e readline-sync, imprima toda a tabuada de um numero

const readline = require ('readline-sync')
let numero = readline.question("digite um numero?")
let multiplicador = 1
while (multiplicador <=10) {
    
    console.log (`${numero} x ${multiplicador} = ${numero*multiplicador}`)
    multiplicador ++
}