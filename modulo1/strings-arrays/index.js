/* 
1 -
A - Undefined porque a variavel não tem valor.
B - Null porque ja foi declarado diretamente desta forma/sem valor.
C - Array com 11 posições 
D - 3   
E - Ele trocara posição incrementando o numero 19 na segunda posição
F - Ele assume a posição 7 do array
*/

/*
2- 

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)*/

// "SUBI NUM ÔNIBUS EM MIRROCOS"*/




const emailDoUsuario = prompt ("Digite aqui seu e-mail")
const nomeDoUsuario = prompt ("Digite aqui seu nome")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}`)




const listaDePratos = ["Tropeiro", "Churrasco", "Lasanha", "Salada", "Canjica"] 
const i = 0
let outroPrato = prompt ("Digite um prato")

console.log(listaDePratos)

console.log(`Essas são as minhas comidas preferidas
${listaDePratos[0]}
${listaDePratos[1]}
${listaDePratos[2]}
${listaDePratos[3]}
${listaDePratos[4]}
`)

listaDePratos [i+1] = outroPrato.toLowerCase()
console.log(`Essas são as minhas comidas preferidas
${listaDePratos[0]}
${listaDePratos[1]}
${listaDePratos[2]}
${listaDePratos[3]}
${listaDePratos[4]}
`)




let listaDeTarefas = []

let taf1 = prompt ("Digite uma tarefa diaria")
let taf2 = prompt ("Digite mais uma tarefa diaria")
let taf3 = prompt ("Digite uma terceira tarefa diaria")

listaDeTarefas.push(taf1, taf2, taf3)

console.log(listaDeTarefas)
