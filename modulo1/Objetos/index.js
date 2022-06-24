//

//........Exercicio de interpretação.........//
/*
1 

A - O console ira imprimir ... Matehus Nachtergaele, Virginia Cavendish / Globo / 14:00

B - Primeiro imprimi o nome do cachorro como sendo (jubo 3 anos e SRD?)
Segunda ação, ele ira trocar o a letra a pela letra O. Significa qe o jub, se tornara Juba
simbolo de ... significa que o objeto esta sendo alterado, mesmo estando dentro de outro objeto.

2 

A - Primeirmente ele segue  logica quando no esboço ja di que a pessoa em questão não e backhender.
Logo após ele pede a altura, porém retorna a mensagem (undefind) porque a variave altura não possui valor.*/

//.........Exercicio de Escrita de Codigo..........//

//1 -

/*
const pessoa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
 }
 
 function pessoasApelido(apelidosNovos) {
     console.log(`Eu sou ${apelidosNovos.nome}, mas pode me chamar de: ${apelidosNovos.apelidos[0]}, ${apelidosNovos.apelidos[1]} ou ${apelidosNovos.apelidos[2]}`) 
    }
pessoasApelido(pessoa)

const novaPessoa = {
    ...pessoa,
    apelidos: ["Mandy", "Amandinhaa", "Mandinhaa"]
}
pessoasApelido(novaPessoa)
*/
 
//2

const pessoa = {
	nome: "Bruno", 
    idade: 23, 
	profissao: "Instrutor"
}

const pessoa2 = {
    nome: "Antony",
    idade: 12,
    profissao: "Estudante"
}

function minhaFuncao(pessoa, pessoa2) {
    const novaPessoa = {
        ...pessoa,
        ...pessoa2,
    
        }
        const arrpessoa = [novaPessoa.nome, novaPessoa.nome.length, novaPessoa.idade, novaPessoa.profissao, novaPessoa.profissao.length]
        return arrpessoa 
    }
console.log(minhaFuncao(pessoa))


//3


carrinho = []

const fruta1 = {
    nome: "banana",
    disponivel: true
}

const fruta2 = {
    nome: "Melancia",
    disponivel: true
}

const fruta3 = {
    nome: "Uva",
    disponivel: true
}

function sacolao(fruta){

const sacolaFrutas = {
    ...fruta1,
    ...fruta2,
    ...fruta3

}
carrinho = [fruta1, fruta2, fruta3]
 return carrinho 

}
console.log(sacolao(carrinho.fruta1))
