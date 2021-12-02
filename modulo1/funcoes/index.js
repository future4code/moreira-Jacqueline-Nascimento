// Aula Funções

//----------------------- Exercícios de Interpretação de código ------------------------------
/*
1.
a) Mensagem impressa no console:
    10
    50
b) Se retirasse o console.log nada apareceria no console, pois a minhaFuncao não imprime nada
2.
a) A função recebe um texto que é uma variável string, coloca todo ele em letras minúsculas e
depois procura se existe os caracteres "cenoura" nesse texto. Caso no texto tenha a palavra
cenoura, a função retornará true, senão retorna false.
b) Saídas:
    i) true
    ii) true
    iii) true
*/


//---------------------------- Exercícios de escrita de código -------------------------------

// 1.
function mensagemA(){
    console.log("Eu sou Jacqueline, tenho 26 anos, moro em Recife e sou estudante")
}

function mensagemB(nome, idade, cidade, profissão){
    frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}`
    return frase
}

mensagemA()
console.log(mensagemB("Cristine", 27, "Paulista", "Desenvolvedora"))

// 2.
//a)
function somaDois(num1, num2){
    return num1+num2
}
console.log(somaDois(2, 3))
// b)
function compararDois(num1, num2){
    return num1>=num2
}
// c)
function ehPar(num){
    return num%2===0
}
// d)
function formatar(texto){
    console.log("Tamanho da mensagem:", texto.length)
    console.log(texto.toUpperCase())
}

console.log(compararDois(2,3))
console.log(ehPar(5))
formatar("oi tudo bem")

// 3.
function soma(num1, num2){
    return num1+num2
}
function subtracao(num1, num2){
    return num1-num2
}
function multiplicacao(num1, num2){
    return num1*num2
}
function divisao(num1, num2){
    return num1/num2
}

const numero1 = Number(prompt("Escreva um número"))
const numero2 = Number(prompt("Escreva outro número"))
const resultadoSoma = soma(numero1,numero2)
const resultadoSubtracao = subtracao(numero1,numero2)
const resultadoMultiplicacao = multiplicacao(numero1,numero2)
const resultadoDivisao = divisao(numero1,numero2)
console.log(`Números inseridos: ${numero1} e ${numero2}
Soma: ${resultadoSoma}
Subtração: ${resultadoSubtracao}
Multiplicação: ${resultadoMultiplicacao}
Divisão: ${resultadoDivisao}`)

//------------------------------------- Desafios -------------------------------------------

// 1.
let imprimeParametro = (parametro) => {console.log(parametro)}
let somaDesafio = (num1, num2) => {imprimeParametro(num1+num2)}

somaDesafio(10 , 7)


// 2
function teoremaPitagoras(cateto1, cateto2){
    let hipotenusa = ((cateto1**2)+(cateto2**2))**(1/2)
    return hipotenusa
}

console.log(teoremaPitagoras(3, 4))