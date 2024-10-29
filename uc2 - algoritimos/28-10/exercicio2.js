/* crie um array com pelo menos 5 pokemon's, peça ao usuario inseir u mnumero de 1 a 5, imprima no termina o Pokemon escolhido
*/


const readline = require ('readline-sync')
const listaDePokemon = ["Pikachu","squirtle", "Charmander", "Charizard", "Chikorita"]


let escolha = readline.question ("escolha um numero de 1 a 5? ")
console.log ( `${escolha}, Seu Pokemon é?`)

console.log (listaDePokemon[escolha-1])