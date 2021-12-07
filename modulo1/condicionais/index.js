// Aula Condicionais

//----------------------- Exercícios de Interpretação de código ------------------------------
/*
1.
a) O código pede um número ao usuário e verifica se o resto da divisão desse número por 2 é
igual a zero, ou seja, verifica se esse número é par.
b) Números pares
c) Números ímpares
2.
a) O código serve para dizer o preço de cada fruta, dentre as opções Laranja, Maçã, Uva e Pêra.
b) "O preço da fruta Maçã é R$ 2.25"
c) Não imprimirá nenhuma mensagem, pois ficará preso no switch case, e não passaria para as
linhas de baixo onde está o console.log
3.
a) Recebendo um número do usuário e transformando do tipo string para o tipo number para guardar
na variável numero
b) Se digitar 10 aparecerá no console: "Esse número passou no teste". Se fosse -10 nada
apareceria
c) Haverá erro no console, pois a variável mensagem foi criada dentro de um escopo filho, 
portanto ela não pode ser chamada no escopo pai
*/


//---------------------------- Exercícios de escrita de código -------------------------------

// 1.
let idade = Number(prompt("Digite sua idade"))

if (idade>=18){
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}

// 2.
const turno = prompt("Que turno você estuda? (M (matutino) ou V (Vespertino) ou N (Noturno))").toUpperCase(0)

if (turno === 'M'){
    console.log("Bom dia!")
} else if (turno == 'V'){
    console.log("Boa tarde!")
} else  if (turno=== 'N'){
    console.log("Boa noite!")
} else {
    console.log("Turno não identificado")
}

// 3.
switch(turno){
    case 'M':
        console.log("Bom dia!")
        break
    case 'V':
        console.log("Boa tarde!")
        break
    case 'N':
        console.log("Boa noite!")
        break
    default:
        console.log("Turno não identificado")
        break
}

// 4.
const generoFilme = prompt("Qual o gênero do filme?")
const valorDoIngresso = Number(prompt("Qual o valor do ingresso?"))

if (generoFilme.toLowerCase() === "fantasia" && valorDoIngresso < 15){
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}

//------------------------------------- Desafios -------------------------------------------

// 1.
if (generoFilme.toLowerCase() === "fantasia" && valorDoIngresso < 15){
    let lanchinho = prompt("Qual snack que você quer comprar?")
    console.log("Bom filme!")
    console.log("Aproveite seu", lanchinho)
} else {
    console.log("Escolha outro filme :(")
}

// 2.
const nomeCliente = prompt("Digite seu nome completo")
const tipoDeJogo = prompt("Qual tipo do jogo? IN indica internacional e DO indica doméstico").toUpperCase()
const etapaDoJogo = prompt("Qual etapa do jogo? SF indica semi-final, DT indica decisão de terceiro lugar e FI indica final").toUpperCase()
const categoria = Number(prompt("Qual a categoria? 1, 2, 3 ou 4"))
const quantidadeIngressos = Number(prompt("Qual a quantidade de ingressos?"))

let valorIngresso
let realDolar
let simbolo

console.log("---Dados da Compra---")
console.log("Nome do cliente:", nomeCliente)
if (tipoDeJogo === "DO"){
    console.log("Tipo do jogo: Nacional")
    realDolar = 1
    simbolo = 'R$'
} else if(tipoDeJogo === "IN"){
    console.log("Tipo do jogo: Internacional")
    realDolar = 4.1
    simbolo = 'U$'
} else{
    console.log('Tipo do jogo não encontrado')
}
switch (etapaDoJogo) {
    case 'SF':
        console.log("Etapa do jogo: Semi-final")
        switch (categoria) {
            case 1:
                console.log("Categoria: 1")
                valorIngresso = 1320
                break;
            case 2:
                console.log("Categoria: 2")
                valorIngresso = 880
                break;
            case 3:
                console.log("Categoria: 3")
                valorIngresso = 550
                break;
            case 4:
                console.log("Categoria: 4")
                valorIngresso = 220
                break;
            default:
                console.log("Categoria não encontrada")
                break;
        }
        break
    case 'DT':
        console.log("Etapa do jogo: Decisão de Terceiro lugar")
        switch (categoria) {
            case 1:
                console.log("Categoria: 1")
                valorIngresso = 660
                break;
            case 2:
                console.log("Categoria: 2")
                valorIngresso = 440
                break;
            case 3:
                console.log("Categoria: 3")
                valorIngresso = 330
                break;
            case 4:
                console.log("Categoria: 4")
                valorIngresso = 170
                break;
            default:
                console.log("Categoria não encontrada")
                break;
        }
        break
    case 'FI':
        console.log("Etapa do jogo: Final")
        switch (categoria) {
            case 1:
                console.log("Categoria: 1")
                valorIngresso = 1980
                break;
            case 2:
                console.log("Categoria: 2")
                valorIngresso = 1320
                break;
            case 3:
                console.log("Categoria: 3")
                valorIngresso = 880
                break;
            case 4:
                console.log("Categoria: 4")
                valorIngresso = 330
                break;
            default:
                console.log("Categoria não encontrada")
                break;
        }
        break
    default:
        console.log("Etapa do jogo não encontrada")
        break
}
console.log(`Quantidade de ingressos: ${quantidadeIngressos} ingressos`)
const valorUnitario = realDolar*valorIngresso
const valorTotal = quantidadeIngressos*valorUnitario
console.log('---Valores---')
console.log(`Valor do ingresso: ${simbolo} ${valorUnitario}`)
console.log(`Valor total: ${simbolo} ${valorTotal}`)
