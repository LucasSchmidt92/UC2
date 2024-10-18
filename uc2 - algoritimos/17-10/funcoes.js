/*
const base1 = 10
const altura1 = 3
const area1 = base1 * altura1
console.log (area1)

const base2 = 5
const altura2 = 2
const area2 = base2 * altura2
console.log (area2)

*/

//funções executam uma determinada tarefa que criamos ela para fazer
// primeiro precisamos criar a função, e depois de criada, precisamos executa-la/chama-la
//para criar uma função usamos a palavra reservada "function"
//depois dela precisamos dar um nome para a função. o melhor é que seja um nome bem descritivo, segunti o padrão camelcase
//depois do nome, abrimos e fechamos parenteses, é aquie que colocamos as "variaveis" que vamos usar dentro do nosso codigo da função, chamaos ela de parametro/argumento
//depois do parenteses, abrimos e fechamos chaves. DICA: de um enter entre as chaves. dentro das chaves é onde vamos criar o codigo que a funçao vai executar

function calculaAreaRetangulo (base,altura) {


const area1 = base * altura
console.log (area1)
}

calculaAreaRetangulo (9,6)


// quer ocriar uma função que retonr a seguinte frase: Olá [nome], voce tem [idade] anos
 //e tem [altura] de altura.

 function frase (nome, idade, altura) {
    console.log (`olá ${nome}, voce tem ${idade} anos e tem ${altura} de altura`)
 }

 frase ("Lucas", 32, 1.80)



