const readline = require ('readline-sync')
let time = readline.question("qual o seu time?")

console.log (time)
console.log (time.toUpperCase) //transforma a string em maiuscula
console.log (time.toLowerCase) //transforma a string em minuscula

 if (time.toLowerCase() === "gremio") {
    console.log ('Filho do Internacional!')
} else if (time.toLowerCase() === "internacional") {
console.log ('Maior do estado')
} else if ( time.toLowerCase() === "juventude") {
console.log ('filial do gremio')
}
else if (time. toLowerCase() === "corinthians"){
console.log ('maior ladrão')
}

else {
console.log ('Pessoa infeliz')
}