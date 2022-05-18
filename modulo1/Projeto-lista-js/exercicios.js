// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  //implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura,largura) {
   altura = Number(prompt("Digite altura do retangulo"))
   largura = Number(prompt("Digite a largura do retangulo"))
   let resultado = altura * largura
   console.log(resultado)
}

// EXERCÍCIO 02
function imprimeIdade() {
   anoAtual = Number(prompt("Digite aqui o ano atual"))
   anoDenascimento = Number(prompt("Digite aqui o de nascimento"))
    let suaIdade = anoAtual - anoDenascimento
   console.log(suaIdade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura)
}
console.log(calculaIMC);

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Digite aqui seu nome")
  const idade = prompt("Digite aqui sua idade")
  const email = prompt("Digite aqui seu e-mail")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Digite aqui uma cor")
  const cor2 = prompt("Digite aqui outra cor")
  const cor3 = prompt("Digite aqui mais outra cor")

  console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array.pop()

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
 
  const ultimoItem = array[array.length - 1]
  const primeiroItem = array[0]
  array[0] = ultimoItem
  array[array.length -1] = primeiroItem

return array 
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}