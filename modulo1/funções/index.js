/*Exercicios de interpretação*/


//1 -

// A -  Resultado 10,50 //

/*
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
*/

//B -  Resultado sera em branco, uma vez que sera multiplicado tal valor, porém nada sera imprimidono console.

/*
function minhaFuncao(variavel) {
	return variavel * 5
}

minhaFuncao(2)
minhaFuncao(10)*/

//2

//A - Ela retorna a resposta em texto minuscula. E lhe informa se é TRUE ou FALSE em relaçao a inclusao da palavra cenoura.

/*let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

con0st resposta = outraFuncao(textoDoUsuario)
console.log(resposta)*/

//B - True / True mudando a palavra cenoura para minusculo / True

/* let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)*/





/*Exercicios de escrita de codigo*/


//1 -

//A -

const quemSouEu = () => {

        console.log("Eu sou Walison, tenho 33 anos, moro em Minas Gerais e sou estudante.")
}

quemSouEu()

//B -

function quemSouEuNovamente(nome, idade, cidade, profissao) {

    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade}, e sou ${profissao}`

}   
     const informacoesAlteradas = quemSouEuNovamente ("walison", 33, "Belo Horizonte", "Estudante")
     console.log(informacoesAlteradas)

//2

//A -

const num1 = 5
const num2 =10

const soma = (num1, num2) => {

    return num1 + num2

}

console.log(`A soma dos numeros é ${soma (num1, num2)}`)

//B - 

function maiorOuIgual(num1, num2) {

    return num1 >= num2

}

console.log(maiorOuIgual (num1, num2))

//C -


function somar(numero1, numero2) {
    return numero1 + numero2

    }
function subtrair(numero1, numero2) {
        return numero1 - numero2
        
    }

function multiplicar(numero1, numero2) {
        return numero1 * numero2
    }
    
function divisao(numero1, numero2) {
        return numero1 / numero2 
    }
    let numero1 = +prompt ("insira o numero aqui")
    let numero2 = +prompt ("insira outro numero")

console.log(`Numeros inseridos ${somar(numero1, numero2)} 
${subtrair(numero1, numero2)}
${multiplicar(numero1, numero2)}
${divisao(numero1, numero2)}`)

