/////////////////////////////////Exercícios de interpretação de código///////////////////////////////////////


// 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
/*       
        let valor = 0
        for(let i = 0; i < 5; i++) {
          valor += i
        }
        console.log(valor)
       
    Ele esta pedindo para enquanto nao chegar no 5, ir acrescentando +1 toda vez que a ação acontecer.
    No final ele chaao valor da variavel, mais  quantidade de repetição de ações e acrescenta mais 1.
    o console retorna 10 

// 2. Leia o código abaixo:
            
        const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
        for (let numero of lista) {
          if (numero > 18) {
        		console.log(numero)
        	}
        }
        
        a) O que vai ser impresso no console?

    Este codigo esta percorrendo o array ate a posicao que anteceda o numero 18 e vai imprimir na tela,
    todos os numeros que antecedam o 18    
        
        b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
        
// 3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?

    const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
    while(quantidadeAtual < quantidadeTotal){
    let linha = ""
    for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
    }
   console.log(linha)
   quantidadeAtual++
} 

A variavel linha esta declarada apenas como um *
a impressão sera uma sequencia de *** mais um ela inclusao na hora de chamar a memsa no console.
*/



/*
1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, 
    e guarde esses nomes em um array
    c) Por fim, imprima o array com os nomes dos bichinhos no console


   let quantidaDeAnimais = +prompt("Quantos Pets você possui ?")
   let quantidadeAtual = 0
   let nomeDosPets = []

        if (quantidaDeAnimais === 0){
        console.log("Que pena, você pode adotar um Pet")
          } else { 
              (quantidaDePets<quantidadeAtual)
              let nomes = prompt("Digite qui o nome dos Pets")
              quantidadeAtual=quantidaDeAnimais+1
              nomeDosPets.push()
          }
          console.log(nomeDosPets)

    
2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. 
Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
    
    a) Escreva um programa que **imprime** cada um dos valores do array original.
    
    b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
    
    c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
    
    d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
    
    e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
    
 */

let listaDeNumeros = [10, 25, 78, 96, 34, 14]
function lista(listaDeNumeros) {
    for(let i of listaDeNumeros){
        console.log[i]
    }
}
lista(listaDeNumeros)
console.log(listaDeNumeros)

