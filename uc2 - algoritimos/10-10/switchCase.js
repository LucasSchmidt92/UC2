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

//SWITCH CASE


let: time = readline.question ("Qual seu time?")

switch (time.toLocaleLowerCase()) {
     case "Gremio":

     console.log("O seu time é o Gremio")
     break

     case "Inter":
     console.log("O seu time é o Gremio")
     break     

     default:
        console.log("o time não foi reconhecido")
        break
}
