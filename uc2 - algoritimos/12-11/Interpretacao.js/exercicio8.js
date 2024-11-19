function filmes() {
    let filme1 = {
        nome: 'Harry Potter e a Pedra Filosofal',
        anoEstreia: 2001
    }
    let filme2 = {
        nome: 'Tubarão',
        anoEstreia: 1975
    }

    console.log(`
O primeiro filme foi lançado antes do segundo? ${filme1.anoEstreia<filme2.anoEstreia}
O primeiro filme foi lançado depois do segundo? ${filme1.anoEstreia>filme2.anoEstreia}
O primeiro filme foi lançado no mesmo ano do segundo? ${filme1.anoEstreia===filme2.anoEstreia}`)
}

filmes()