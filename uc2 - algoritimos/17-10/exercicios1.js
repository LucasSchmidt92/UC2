//exercicio
//crie uma função que recebe um valor em horas e passa ele para segundos

function segundoHora (hora) {
    

    const segundo = hora * 3600  //60(minuto)*60(segundos) =3600
    console.log (segundo)
    }
    
    segundoHora (2)


//crie uma função que recebe 3 notas e calcula a media deles

function mediaNota (nota1, nota2, nota3) {
    

    const totalNotas = nota1+nota2+nota3
    const mediaNotas = totalNotas / 3
    console.log (mediaNotas)
    }
    
    mediaNota (10,20,30)


//crie uma função que recebe um numero e mostre se ele é par ou impar

function parOuImpar (numero){
    if (numero === 0) {
        console.log ("O numero é 0.")
    } else if (numero % 2 === 0) {
        console.log (`o numero ${numero} é par.`)
}        else {
            console.log (`o numero ${numero} é impar.`)
        }
    }

    parOuImpar (45)