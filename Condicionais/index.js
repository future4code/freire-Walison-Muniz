/*
1. Leia o código abaixo:
    

    const respostaDoUsuario = prompt("Digite o número que você quer testar")
    const numero = Number(respostaDoUsuario)
    
    if (numero % 2 === 0) {
      console.log("Passou no teste.")
    } else {
      console.log("Não passou no teste.")
}
    
    a) Explique o que o código faz. Qual o teste que ele realiza? 
    Ele descobre se o resto da dvisao de numero sendo par, sempre dará zero. 
    b) Para que tipos de números ele imprime no console "Passou no teste"? 
    Numeros pares
    c) Para que tipos de números a mensagem é "Não passou no teste"? 
    Numeros impares
2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
    
    
    let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        break;
      case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
    ```
    
    a) Para que serve o código acima?
    Para descobrir o valor da fruta em questão.
    b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
    O preço da fruta maça e 2,50
    c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
    O preço da fruta Per, seria $5,00

3. Leia o código abaixo:
    
    
    const numero = Number(prompt("Digite o primeiro número."))
    
    if(numero > 0) {
      console.log("Esse número passou no teste")
    	let mensagem = "Essa mensagem é secreta!!!"
    }
    
    console.log(mensagem)
    ```
    
    a) O que a primeira linha está fazendo?
    Pedindo ao usuario para digitar um numero e mesmo o usuario digitando string, seria convertido a Number
    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
    Esse numero passou no teste. Caso seja -10 não terá mensagem.
    c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
    O bloco de codigo if tem um erro, onde a mensagem deveria etar entre parenteses.

............................................//.................................................

1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
 

const idade = Number(prompt("Digite aqui sua idade"))

if (idade>=18){
    console.log("Você pode digirir!")
} else if (idade<18)
{
    console.log("Você não pode dirigir")
}


/*
2.Agora faça um programa que verifica que turno do dia um aluno estuda. 
Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else 

const horarioAula = prompt("Qual horario você estuda ?  M (matutino) ou V (Vespertino) ou N (Noturno)")

if (horarioAula === "M") {

console.log("Bom Dia")

    } else if (horarioAula === "V") {

   console.log("Boa Tarde!")

   } else {

    console.log("Boa Noite")
   } 



3.Repita o exercício anterior, mas utilizando a estrutura de switch case agora.


let horaAula = prompt("Qual horario você estuda ?  M (matutino) ou V (Vespertino) ou N (Noturno)").toLocaleUpperCase()

    switch (horaAula){

        case "m":
        console.log("Bom Dia")
        break 

    case "v":
        console.log("Boa tarde")
        break

    case "n":
        console.log("Boa noite")
   
    } 
/*
4. Considere a situação: 
você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. 
Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

*/

const genero = prompt("Qual genero do filme escolhido?")
const valorDoIngresso = Number(prompt("Qual valor do ingresso?"))

if (genero === "Fantasia" && valorDoIngresso >=15 ) {
    console.log("Bom filme")
  } else if (genero !== "Fantasia" && valorDoIngresso < 15 ){
        console.log("Escolha outro filme")    
}
