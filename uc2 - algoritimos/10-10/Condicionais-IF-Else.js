let termCarteira = false
let maioridade = 32 >= 18

//IF Vai condição "()" - Else não vai condição

//SE -- IF
if (termCarteira === true && maioridade === true){
//executa o codigo
console.log ('voce tem cateira e é maior de 18, pode dirigir')
} else if (maioridade === true){
    console.log ("Voce é de maior, porem não tem carteira, vai trabalhar")
}

//SE NÂO - ELSE

else{
    console.log("Voce não tem carteira, que pena vai a pé")
}
