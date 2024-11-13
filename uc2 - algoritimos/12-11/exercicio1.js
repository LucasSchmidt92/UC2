/*
crie um objeto que represente uma pessoa, essa pessoa precisa ter nome, idade, genero, 
musica preferida
*/

const pessoa = {
    nome: "Lucas",
    idade: 32,
    generoMusical: "Pagode"
}

function novoObjeto (pessoa){
   const pessoaNova = {
    ... pessoa,
        comidaPreferida: ["Churrasco", "Pizza", "hamburguer"],
        
        melhorAmigo: {
            nome:"Eduardo",
            idade: 28
        }
    }


console.log (`o nome da pessoa é ${pessoaNova.nome} e suas comidas preferidas são ${pessoaNova.comidaPreferida [0]}, ${pessoaNova.comidaPreferida[1]}, seu melhor amigo se chama ${pessoaNova.melhorAmigo.nome} e tem ${pessoaNova.melhorAmigo.idade} anos.`)
}
novoObjeto (pessoa)