// Aula Laços

//----------------------- Exercícios de Interpretação de código ------------------------------
/*
1.
O código está rodando um laço que vai de 0 até 4, que é o inteiro menor q 5, de 1 em 1, e a cada
iteração atribuindo o valor de 'i' a variavel 'valor'. No final imprimirá o valor 10.
2.
a)
19
21
23
25
27
30
b) Poderia acessar o índice utilizando o método indexOf
3.
*
**
***
****
*/


//---------------------------- Exercícios de escrita de código -------------------------------

// 1.
const quantidadePets = Number(prompt("Qual a sua quantidade de bichinhos de estimação?"))

if (quantidadePets === 0){
    console.log("Que pena! Você pode adotar um pet!")
} else{
    const nomePets = []
    for(let i=0; i<quantidadePets; i++){
        nomePets.push(prompt("Digite um dos nomes deles"))
    }
    console.log(nomePets)
}

// 2.
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// a)
function imprimeValor(arrayOriginal){
    for (let valor of arrayOriginal){
        console.log(valor)
    }
}
imprimeValor(arrayOriginal)
// b)
function imprimeValorDivPor10(arrayOriginal){
    for (let valor of arrayOriginal){
        console.log(valor/10)
    }
}
imprimeValorDivPor10(arrayOriginal)
// c)
function imprimeNumerosPares(arrayOriginal){
    const numerosPares = []
    for (let valor of arrayOriginal){
        if (valor%2 === 0){
            numerosPares.push(valor)
        }
    }
    console.log(numerosPares)
}
imprimeNumerosPares(arrayOriginal)
// d)
function imprimeStrings(arrayOriginal){
    const strings = []
    for (let i=0; i<arrayOriginal.length; i++){
        strings.push(`O elemento do índex ${i} é: ${arrayOriginal[i]}`)
    }
    console.log(strings)
}
imprimeStrings(arrayOriginal)
// e)
function imprimeMaiorMenorNumero(arrayOriginal){
    let maiorNumero = arrayOriginal[0]
    let menorNumero = arrayOriginal[0]
    for (let valor of arrayOriginal){
        if (valor < menorNumero) {
            menorNumero = valor
        }
        if (valor > maiorNumero) {
            maiorNumero = valor
        }
    }
    console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`)
}
imprimeMaiorMenorNumero(arrayOriginal)

//------------------------------------- Desafios -------------------------------------------

// 1.
// const numeroEscolhido = Number(prompt("Primeiro jogador, escolha um número!"))
// console.log("Vamos jogar!")
// let numeroChute
// let numeroTentativas = 0
// while (numeroChute !== numeroEscolhido) {
//     numeroTentativas++
//     numeroChute = Number(prompt("Segundo jogador, chute um número!"))
//     console.log(`O número chutado foi: ${numeroChute}`)
//     if (numeroEscolhido < numeroChute){
//         console.log("Errou. O número escolhido é menor")
//     } else {
//         console.log("Errou. O número escolhido é maior")
//     }
// }
// console.log("Acertou!")
// console.log("O número de tentativas foi:", numeroTentativas)

// 2.
// const numeroAleatorio = Math.floor((Math.random() * 100) + 1)
// console.log("Vamos jogar!")
// let numeroChute
// let numeroTentativas = 0
// while (numeroChute !== numeroAleatorio) {
//     numeroTentativas++
//     numeroChute = Number(prompt("Usuário, chute um número!"))
//     console.log(`O número chutado foi: ${numeroChute}`)
//     if (numeroAleatorio < numeroChute){
//         console.log("Errou. O número escolhido é menor")
//     } else {
//         console.log("Errou. O número escolhido é maior")
//     }
// }
// console.log("Acertou!")
// console.log("O número de tentativas foi:", numeroTentativas)

/* Como já programo em outras linguagens, quando foi pedido para o computador dizer algum número
aleatório, a primeira coisa que pensei foi usar a função random. Só precisei descobrir se essa
função existia em JavaScript e como usá-la, o que encontrei no site da W3Schools, que inclusive
estava na dica.
*/