//operador E (AND)  simbolo:&&
// RETORNA TRUE APENAS SE TODOS OS ENVOLVIDOR FOREM TRUE, SE TIVER APENAS UM UNICO FALSE JÁ É SUFICIENTE PARA RETORNAR FALSE
//exemplo:
conseole.log (true && true && true) = //true
console.log (true && false) = //false


let idade = 18
let maioridade = idade >= 18
let temCarteira = true
let temCarro = true

console.log (maioridade && temCarteira && temCarro)

// operador OU (OR) - simbolo: ||

//retorna false apenas se todos os envolvidos forem false
//apenas u unico true é suficiente para retornar true

//exemplo:
conseole.log (true && true && true) = //true
console.log (true && false) = //false

let temTrabalho = true
let economizar = true
let investe = true


console.log (temTrabalho && economizar && investe)

//ou

let temTrabalho = true
let economizar = true
let investe = true
let herdeito = true


console.log ((temTrabalho && economizar && investe)|| herdeiro)// true






// operador Não/Negação (NOT)  - SIMBOLO !
// inverte o estado - true ele transforma em false e vice-versa
let ligado = true
 console. log (!ligado)