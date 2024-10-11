//Usando o switch case, peça para o usuario inserir um numero
//caso o numero for 1, imprima "voce escolheu FC25"
//caso o numero for 2, imprima "voce escolheu FC24"
//caso o numero for 3, imprima "voce escolheu FIFA23"
//caso o numero for 1, imprima "NÃO ENCOTRAMOS O JOGO"

const readline = require ('readline-sync')

let jogo = readline.questionInt ("Escolha seu numero: ")


switch (jogo) {
     case 1:

     console.log("O seu jogo é FC25")
     break

     case 2:
     console.log(" seu jogo é FC24")
     break     

     case 3:
     console.log(" seu jogo é FIFA23")
     break  

  

     default:
        console.log("o seu jogo não foi reconhecido")
        break
}
