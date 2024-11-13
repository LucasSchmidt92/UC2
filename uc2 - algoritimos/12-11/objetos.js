/*
const donoDoPet = {
    nome: "Lucas",
    idade: 32,
    pet: {
        nome:"Rowena",
        raça: "Chow-Chow",
        idade: 10
    }
}

console.log (donoDoPet.pet.nome)

const curso = {
    nome: "front",
    linguagens: ["Java","html"]
}

console.log (curso.linguagens)


const professoresTDS = [
{nome:"Leonardo", uc:"2"}, 
{nome:"Lucas", uc:"3"}, 
{nome:"Maria", uc:"5"}

]

console.log (professoresTDS[0].uc)
*/

const professor = {
    nome: "Leo",
    idade: 29,
    disciplinas: ["algoritimos", "banco de dados"]
}


const novoProfessor = {
    ...professor,
    nome: "Lucas",
    idade: 30,
    carro: "veiculo",
    
}
console.log (professor)
console.log (novoProfessor)