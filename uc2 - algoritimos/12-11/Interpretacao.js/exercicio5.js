let pessoa = {
    nome: 'Lucas',
    idade: 32,
    profissao: 'Gerente'
}

let outraPessoa = {
    nome: 'Gilnei',
    idade: 38,
    profissao: 'Representante'
}

function operacao(objeto) {
    const resultado = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
    return resultado
}

console.log(operacao(pessoa))
console.log(operacao(outraPessoa))