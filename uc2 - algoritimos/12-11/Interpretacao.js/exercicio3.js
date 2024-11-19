function minhaFuncao(objeto, propriedade) {
    return objeto[propriedade]
}

const pessoa = {
    nome: "Caio", 
    idade: 23, 
    backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))


 //false
 //undefined

 //Vai retornar false, pois foi pré definido que o atributo backender é false. 
 //E irá retornar undefined pois o atributo altura não existe.
