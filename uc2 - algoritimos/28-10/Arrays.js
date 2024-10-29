/*
//arrays são listas de elemntos

let listaDaVo = ["cacetinho","leite","negresco"]

console.log(listaDaVo)

listaDaVo.push ("7 bello") // aqui adiciono a balinha sem a vo saber
console.log (listaDaVo)

listaDaVo.pop() //tira o ultimo elemento da lista da vó
console.log (listaDaVo)

console.log (listaDaVo[1])  // imporime o item selecionado, sempre começa do zero 0


const listaDeCompra = []; // este é um array vazio

const listaDeNome = ["leo", "vitoria", "nala", "margot"]

const listaDeNumero = [10,20,30,40]

const listaDeBooleanas = [true,false]

//imprime tudo que tem dentro array
//console.log (listaDeNome)
//console.log (listaDeCompra)

//adicionar item ao final do array
listaDeCompra. push("Pão")
listaDeCompra. push("Nata")
listaDeCompra. push ("Leite")

console.log (listaDeCompra)

//remove o ultimo item do array, independe do que escrever remove o ultimo
listaDeCompra.pop ()
console.log (listaDeCompra)

//exibe apenas o item de acordo com a posição no array
console.log (listaDeNome [0]) //Leo
console.log (listaDeNumero [1]) //20
console.log (listaDeBooleanas[3])//underfined

//troca o valor dentro de um elemento do array, de acordo com a sua posição (indice)

console.log ("Array antes da troca:"(listaDeNumero))
listaDeNumero [3] = 100
console.log ("Array depois da troca:", (listaDeNumero))

//Propriedade length
//mostra otamnho da array
console.log (listaDeCompra.length) //mostra o tamanho do arrays

//metodo includes
// veriica se uma array tem algum elemento (retorna true ou false)
const seriesBoas = ["Supernatural", "The Walkind Dead", "Prison Break"]

console.log (seriesBoas.includes ("Supernatural")) //true
console.log (seriesBoas.includes ("La casa de papel")) //false
*/

//metodo splice
// remove elemntos e aparir da posição dp array

const letras = ["A","B","C","D","E"]

letras.splice (2,1, "z") // o primeiro elemento (2) mostra apartir de qual indice vai remover, o segundo (1) mostra a quantidade de indice que ira remover
//"Z" troca o item
console.log(letras)

