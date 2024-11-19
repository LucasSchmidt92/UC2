let pessoa = {
    nome: 'Lucas Schmidt Goncalves',
    apelidos: ['Schmidt', 'Negao', 'Gusch']
}

let novaPessoa = {
    ...pessoa,
    apelidos: ['Gerente', 'luquinhas', 92]
}
function mostrarPessoa(pessoa) {
    return `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`
}

console.log(mostrarPessoa(pessoa))
console.log(mostrarPessoa(novaPessoa))