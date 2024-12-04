const readline = require('readline-sync')  

const professorCarvalho = [
    {nome: 'Venusaur', tipo: 'Planta', nivel: 15, Geracao: 1},
    {nome: 'Charizard', tipo: 'Fogo', nivel: 65, Geracao: 1},
    {nome: 'Blastoise', tipo: 'Agua', nivel: 52, Geracao: 1},
    {nome: 'Alakazam', tipo: 'Psiquico', nivel: 25, Geracao: 1},
    {nome: 'Mr. Mime', tipo: 'Psiquico', nivel: 32, Geracao: 1},
    {nome: 'Gyarados', tipo: 'Agua', nivel: 45, Geracao: 1},
    {nome: 'Chikorita', tipo: 'Planta', nivel: 35, Geracao: 2},
    {nome: 'Totodile', tipo: 'Água', nivel: 50, Geracao: 2},
    {nome: 'Hoothoot', tipo: 'Normal', nivel: 42, Geracao: 2},
    {nome: 'Heracross', tipo: 'Inseto', nivel: 56, Geracao: 2},
    {nome: 'Houndoom', tipo: 'Fogo', nivel: 27, Geracao: 2}
]

const mestrePokemon = [
    {nome: 'Psyduck', tipo: 'Agua', nivel: 7}
]

function mochila() {
    for (let i = 0; i < mestrePokemon.length; i++) {
        ind = i
        console.log(`${ind+1} - ${mestrePokemon[i].nome} - Tipo: ${mestrePokemon[i].tipo} - Nível: ${mestrePokemon[i].nivel}.`)
    }

}

function guardarPokemon() {
    for (let i = 0; i < mestrePokemon.length; i++) {
        ind = i
        console.log(`${ind+1} - ${mestrePokemon[i].nome} - Tipo: ${mestrePokemon[i].tipo} - Nível: ${mestrePokemon[i].nivel}.`)
    }
    let guardarPokemon = readline.questionInt('Escolha um deles para enviar para o professor Carvalho: ')
    professorCarvalho.push(mestrePokemon[guardarPokemon-1])
    mestrePokemon.splice(guardarPokemon-1, 1)

}

function computador() {
    for (let i = 0; i < professorCarvalho.length; i++) {
       ind = i
           console.log(`${ind+1} - ${professorCarvalho[i].nome} - Tipo: ${professorCarvalho[i].tipo}.`)
       }
}
// function resgatar() {
//      for (let i = 0; i < professorCarvalho.length; i++) {
//         ind = i
//             console.log(`${ind+1} - ${professorCarvalho[i].nome} - Tipo: ${professorCarvalho[i].tipo}.`)
//         }
//         let resgatarPokemon = readline.questionInt('Escolha um deles para adicionar a sua Equipe: ')
//         let pokemonResgatado = professorCarvalho[resgatarPokemon-1]
//         mestrePokemon.push(pokemonResgatado)
//         professorCarvalho.splice(resgatarPoke-1, 1)
// }

 function resgatar() {
     let tipo = readline.questionInt(`
         1 - Normal.
         2 - Fogo.
         3 - Agua.
         4 - Planta.
         5 - Dragao.
         6 - Psiquico.  
         7 - Inseto.
         Escolha uma opcao: 
         `) 

         switch (tipo) {
            case 1:
               Tipo = 'Normal' 
                break;
            case 2:
                Tipo = 'Fogo' 
                break;
            case 3:
                Tipo = 'Agua' 
                break;
            case 4:
                Tipo = 'Planta' 
                break;
            case 5:
                Tipo = 'Dragao' 
                 break;
            case 6:
                Tipo = 'Psiquico' 
                break;
            case 7:
                Tipo = 'Inseto' 
            case 8:
                console.log('Saindo...')
                condicao = false
                break;
            return; 
            default:
                console.log('Opção inválida!')
                break;

         }

    let geracao = readline.questionInt(`
    1 - Geracao 1.
    2 - Geracao 2.
  
    Escolha uma opcao: 
    `)
     for (let i = 0; i < professorCarvalho.length; i++) {
            console.log(`${[i+1]} - ${professorCarvalho[i].nome} - Tipo: ${professorCarvalho[i].tipo}.`)
        }
        let resgatarPokemon = readline.questionInt('Escolha um deles para adicionar a sua Equipe: ')
        let pokemonResgatado = professorCarvalho[resgatarPokemon-1]
        mestrePokemon.push(pokemonResgatado)
        professorCarvalho.splice(resgatarPokemon-1, 1)
 }


function exibirMenu() {
    let opcao 
    let condicao = true
    while (condicao) {
        opcao = readline.questionInt(`
        1 - Mostrar Mochila.
        2 - Mostrar  Laboratorio do Professor Carvalho.
        3 - Resgatar Pokemon.
        4 - Guardar Pokemon.
        5 - Fechar.
        Escolha uma opcao: 
        `)

        switch (opcao) {
            case 1:
                mochila()
                break;
            case 2:
                if (mestrePokemon.length<6) {
                    computador() } else {
                    console.log('Você não pode carregar mais de 6 Pokémon de uma vez só!')
                }            
                break;
            case 3:
                resgatar()
                break;
            case 4:
                guardarPokemon();
                break;
            case 5:
                console.log('Saindo...')
                condicao = false
                break;
            return; 
            default:
                console.log('Opção inválida!')
                break;
        }
    }
}

exibirMenu()