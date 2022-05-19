/*

 Exercícios de interpretação de código

 1 - Tras um mapeamento geral dos arrays, juntamente com a quantidades dos mesmo e sequencial.
 2 - Ela ira imprimir todos nomes quando ele chama a variavel novoArrayB que vem do return.
 item.nome.
 3 -  Ele cria um novo array, bucando os nomes e indices que nao tenham  chijo.
 */

                        //   Exercícios de escrita de código
/*
// 1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
// realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**

a) Crie um novo array que contenha apenas o nome dos doguinhos

b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)

c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser:
 "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"
*/

   const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//A
const nomeDogs = pets.map((item) => {
    console.log(item.nome);
})
//B
const nomeRacas = pets.filter((item)=>{
    return item.raca == "Salsicha"
})
console.log(nomeRacas);
//C
const nomePoodles = pets.filter((item) =>{
    return item.raca == "Poodle"
})
console.log(nomePoodles)


// 2. Dado o seguinte array de produtos, 
// realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

// a) Crie um novo array que contenha apenas o nome de cada item

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"


const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]


//A
 const nomeItens = produtos.map((item) => {
    console.log(item.nome);
 })

const nomeBebidas = produtos.filter((item) => {
    return item.categoria == "Bebidas"
})
console.log(nomeBebidas)

const nomeYpe = produtos.filter((item) => {
   return item.nome == "Ypê"
})
console.log(nomeYpe)