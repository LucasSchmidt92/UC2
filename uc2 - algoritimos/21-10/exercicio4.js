// faça um contador que va de 10 até 0
//quando o contador for zero, imprime BOOOOOM
//quando o contador for par imprime tac
//quando o contador for impar. imprime tic

for (let numero=10; numero >=0; numero--) {
if ( numero === 0) { 
    console.log ('BOOOM')
} else if (numero %2 === 0){
console.log ("tac")
} else {
    console.log ("tic")
}

}