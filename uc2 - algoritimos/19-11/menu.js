const readlineSync= require ('readline-sync');

function exibirMenu () {
    let opcao;

    //Enquanto a opção for 3 (sair), o loop continuara
    while (true) {
        //exibir o menu e capturar a entrada do usuario
        opcao = readlineSync.questionInt ("Escolha uma opcao:\n1 Ola\n2 como vai?\n3. Sair\n ")

        switch (opcao) {
            case 1:
                console.log ("ola!");
                break;
            case 2:
                console.log ("Como vai?")
                break;
            case 3:
                console.log ("saindo...")
                return; //encerra a funçao, saindo do loop

                default:
                    console.log("opção invalida");
                    break;
        }

    }

}

// chamar a função para exibir o menu
exibirMenu ();