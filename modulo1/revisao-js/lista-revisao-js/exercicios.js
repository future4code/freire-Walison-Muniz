// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

    let arrayPares = []
    for (let i = 0; i < array.length; i++)
        if (array[i] % 2 === 0)
            arrayPares.push(array[i])

    return arrayPares
}
// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayPares = retornaNumerosParesElevadosADois(array)
    for (let i = 0; i < arrayPares.length; i++) {
        arrayPares[i] = arrayPares[i] * arrayPares[1]
    }
    return arrayPares
    let arrayElevado = arrayPares.map((item) => {
        return item * item
    })
    return arrayElevado
}
// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max.apply(null, array);
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let objeto = {
        maiorNumero: Math.max(num1, num2),
        maiorDivisvelPorMenor: Math.max(num1, num2) % Math.min(num1, num2) === 0,
        diferenca: Math.abs(num1, num2)
    }
    return objeto;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(1)
        }
    }
    return numerosPares;
}
retornaNPrimeirosPares();

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if ((ladoA===ladoB) && (ladoB===ladoC)){
        return "Equilátero"
    }else if ((ladoA !== ladoB) && (ladoA !== ladoC) && (ladoB !== ladoC)){
        return "Escaleno"
    }else{
      return "Isosceles"
    }
}
// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a, b) => a - b)
    let segundo = array[array.length - 2]
    let primeiro = array[1]

    return [segundo, primeiro]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return ` Venha assitir ao filme ${filme.nome}, de ${filme.ano}, dirigido por 
   ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]} `
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}
