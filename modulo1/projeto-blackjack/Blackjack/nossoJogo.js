/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


console.log("Boas vindas ao jogo de Blackjack!")

let cartaUsuario = comprarCarta()
let cartaUsuario2 = comprarCarta();
let cartaMaquina = comprarCarta();
let cartaMaquina2 = comprarCarta();

if (confirm("Quer iniciar uma nova rodada?")) {

   let totalUsuario = cartaUsuario.valor + cartaUsuario2.valor
   let totalMaquina = cartaMaquina.valor + cartaMaquina2.valor

   console.log(` Usuário - cartas: ${cartaUsuario.texto} ${cartaUsuario2.texto}, pontuação ${totalUsuario}`)
   console.log(` Computador - cartas: ${cartaMaquina.texto} ${cartaMaquina2.texto}, pontuação ${totalMaquina}`)

   if (totalUsuario === totalMaquina) {
      console.log("Empate");
   }
   else if (totalUsuario > totalMaquina) {
      console.log("O usuário ganhou");
   } else if (totalUsuario < totalMaquina)
      console.log("O computador ganhou!");
   }else {
      console.log("O jogo acabou");
   }
   
