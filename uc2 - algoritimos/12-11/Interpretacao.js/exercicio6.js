let carrinho = []

const fruta1 = {
    nome: 'Bergamota',
    disponibilidade: true
}

const fruta2 = {
    nome: 'Laranja',
    disponibilidade: true
}

const fruta3 = {
    nome: 'Mamão',
    disponibilidade: true
}

function compra(fruta) {
    carrinho.push(fruta)
}

compra(fruta1)
compra(fruta2)
compra(fruta3)
console.log(carrinho)

// Desafio 3

function estoque(fruta) {
    fruta.disponibilidade = !fruta.disponibilidade

    return fruta
}

console.log(estoque(fruta1))
// console.log(estoque(fruta2))
// console.log(estoque(fruta3))