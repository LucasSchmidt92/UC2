/* para essse exercicios, comece criando um array com valos 1,2,3,4,5,6, determina o tamanho array
adicione o numero 7, remova o numero 4 e 5, determine o novo tamnho da array
*/

const numero = [1,2,3,4,5,6]
console.log (numero.length)

numero.push (7)
numero.splice (3,2)
console.log (numero.length)
console.log (numero)