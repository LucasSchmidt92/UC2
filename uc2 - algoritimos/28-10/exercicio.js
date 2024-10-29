/*Crie um array com varias tarefas,
Liste todas tarefas dentro desse array.
Adicione uma nova tarefa ao array (usando o metodo correspondente).
Substitua uma tarefa da lista ao especificador o indice dela
*/

const listaDeTarefas = ["acordar", "banho", "escovar os dentes", "tomar cafe", "ir ao trabalho"]

console.log (listaDeTarefas)

listaDeTarefas.push ("sair do trabalho")

listaDeTarefas [1] = ("abrir os olhos")

console.log (listaDeTarefas)

console.log (`
    ${listaDeTarefas[0]}
    ${listaDeTarefas[1]}
    ${listaDeTarefas[2]}
    ${listaDeTarefas[3]}
    ${listaDeTarefas[4]}
    ${listaDeTarefas[5]}
    `

    )