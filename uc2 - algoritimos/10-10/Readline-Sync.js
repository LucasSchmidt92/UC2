const readline = require ('readline-sync');

//exemplo pedir ao usuario o nome dele
let nome = readline.question("Qual o seu nome? ")
let sobrenome = readline.question ("Qual seu sobrenome? ")
console.log (`olá, ${nome} ${sobrenome}. Tudo bem com você?`)
