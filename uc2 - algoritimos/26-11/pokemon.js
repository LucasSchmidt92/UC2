// Importa o readline-sync
const readlineSync = require('readline-sync');

// Pokémons disponíveis no banco de dados
let pokemonsDisponiveis = [
    {nome: 'Venusaur', tipo: 'Planta', nivel: 15},
    {nome: 'Charizard', tipo: 'Fogo', nivel: 65},
    {nome: 'Blastoise', tipo: 'Agua', nivel: 52},
    {nome: 'Alakazam', tipo: 'Psiquico', nivel: 25},
    {nome: 'Mr. Mime', tipo: 'Psiquico', nivel: 32},
    {nome: 'Gyarados', tipo: 'Agua', nivel: 45},
    {nome: 'Chikorita', tipo: 'Planta', nivel: 35},
    {nome: 'Totodile', tipo: 'Água', nivel: 50},
    {nome: 'Hoothoot', tipo: 'Normal', nivel: 42},
    {nome: 'Heracross', tipo: 'Inseto', nivel: 56},
    {nome: 'Houndoom', tipo: 'Fogo', nivel: 27}
];

// Mochila do treinador
let mochila = [];

// Função para mostrar o menu
function mostrarMenu() {
  let opcao = readlineSync.questionInt(
    "Escolha uma opcao:\n1. Adicionar Pokemon\n2. Ver Mochila\n3. Remover Pokemon\n4. Sair\nDigite sua opcao: "
  );
  
  if (opcao === 1) {
    adicionarPokemon();
  } else if (opcao === 2) {
    verMochila();
  } else if (opcao === 3) {
    removerPokemon();
  } else if (opcao === 4) {
    console.log("Saindo...");
    return;
  } else {
    console.log("Opcao invalida");
  }

  mostrarMenu(); // Chama o menu novamente
}

// Função para adicionar Pokémon à mochila
function adicionarPokemon() {
  if (mochila.length < 6) {
    let escolha = readlineSync.question(
      "Escolha um Pokemon para adicionar:\n1. Pikachu\n2. Charmander\n3. Bulbasaur\n4. Starly\n5. Eevee\n6. Chinchou\n7. Magnemite\n8. Chimchar\n9. Taillow\n"
      +
      "\nDigite o numero do Pokemon que deseja adicionar: "
    );
    let pokemonEscolhido = pokemonsDisponiveis[parseInt(escolha) - 1];
    if (pokemonEscolhido) {
      mochila.push(pokemonEscolhido);
      console.log(pokemonEscolhido.nome + " foi adicionado a sua mochila!");
    }
  } else {
    console.log("Sua mochila esta cheia!");
  }
}

// Função para ver os Pokémons na mochila
function verMochila() {
  if (mochila.length === 0) {
    console.log("Sua mochila esta vazia!");
  } else {
    for (let i=0; i < mochila.length; i++) {
      console.log(`${mochila[i].nome} - Tipo: ${mochila[i].tipo}, Nivel: ${mochila[i].nivel}`);
    };
  }
}

// Função para remover Pokémon da mochila
function removerPokemon() {
  if (mochila.length === 0) {
    console.log("Sua mochila esta vazia!");
  } else {
    console.log ("Escolha um Pokemon para remover:")
    for (let i=0; i < mochila.length; i++) {
        console.log(`${i+1}. ${mochila[i].nome} - Tipo: ${mochila[i].tipo}, Nivel: ${mochila[i].nivel}`)
    }
    let escolha = readlineSync.questionInt(
        "Digite o numero do Pokemon que deseja remover: "
    );
    let pokemonRemovido = mochila.splice(escolha - 1, 1);
    console.log(pokemonRemovido[0].nome + " foi removido da sua mochila!");
  }
}


mostrarMenu();
