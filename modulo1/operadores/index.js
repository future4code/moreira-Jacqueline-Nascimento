// Aula Operadores e Lógica de Programação

//----------------------- Exercícios de Interpretação de código ------------------------------
/*
1. Mensagens impressas no console:
a. false
b. false
c. true
d. boolean

2. Resposta: O prompt retorna uma string, então quando fizer a operação de soma estará
concatenando duas strings e, por exemplo, se for dados os números 5 e 2, será impresso 52.

3. Resposta: Para de fato realizar a operação de soma algébrica, deve-se transformar as
variáveis em number usando a função Number().
*/


//---------------------------- Exercícios de escrita de código -------------------------------

// 1.
const idadeUsuario = Number(prompt("Qual a sua idade?"))
const idadeMelhorAmigo = Number(prompt("Qual a idade do seu melhor amig@?"))
console.log("Sua idade é maior do que a do seu melhor amigo?", idadeUsuario>idadeMelhorAmigo)
console.log("A diferença de idade é:", idadeMelhorAmigo-idadeUsuario, "anos")

//2.
const numPar = Number(prompt("Escreva um número par?"))
console.log("O resto da divião por 2 é:", numPar%2)
/* O resto da divisão sempre será 0, mas caso coloque um número ímpar esse resto passará
a ser 1*/

//3.
const idadeAnos = Number(prompt("Qual a sua idade em anos?"))
console.log("Sua idade em meses é:", idadeAnos*12)
console.log("Sua idade em dias é:", idadeAnos*12*30)
console.log("Sua idade em horas é:", idadeAnos*12*30*24)

//4.
const num1 = Number(prompt("Digite um número"))
const num2 = Number(prompt("Digite outro número"))
console.log("O primeiro numero é maior que segundo?", num1>num2)
console.log("O primeiro numero é igual ao segundo?", num1===num2)
console.log("O primeiro numero é divisível pelo segundo?", num1%num2===0)
console.log("O segundo numero é divisível pelo primeiro?", num2%num1===0)

//------------------------------------- Desafios -------------------------------------------

// 1.
let kelvin, fahrenheit, celsius
//a)
fahrenheit = 77
kelvin = (fahrenheit - 32)*(5/9) + 273.15
console.log("77°F equivale a",kelvin+"K")
//b)
celsius = 80
fahrenheit = celsius*(9/5) + 32
console.log("80°C equivale a",fahrenheit+"°F")
//c)
celsius = 30
fahrenheit = celsius*(9/5) + 32
kelvin = (fahrenheit - 32)*(5/9) + 273.15
console.log("30°C equivale a",fahrenheit+"°F e",kelvin+"K")
//d)
celsius = Number(prompt("Digite a temperatura em °C"))
fahrenheit = celsius*(9/5) + 32
kelvin = (fahrenheit - 32)*(5/9) + 273.15
console.log(celsius+"°C equivale a",fahrenheit+"°F e",kelvin+"K")

// 2.
const quiloWattHr = Number(prompt("Digite a quantidade de quilowatts consumida na residência"))
console.log("Você pagará R$"+quiloWattHr*0.05)
const porcentagemDesconto = Number(prompt("Digite a porcentagem de desconto"))
const valorConta = (quiloWattHr*0.05)*(1-(porcentagemDesconto/100))
console.log("Você pagará R$"+valorConta, "com o desconto")

// 3.
//a)
let libras = 20
let quilos = libras*0.45359
console.log(libras.toString(),"lb equivalem a", quilos, "kg")
//b)
let oncas = 10.5
quilos = oncas*0.0283495
console.log(oncas.toString(),"oz equivalem a", quilos, "kg")
//c)
let milhas = 100
let metros = milhas*1609.34
console.log(milhas.toString(),"mi equivalem a", metros, "m")
//d)
let pes = 50
metros = pes*0.3048
console.log(pes.toString(),"ft equivalem a", metros, "m")
//e)
let galao = 103.56
let litros = pes*3.78541
console.log(galao.toString(),"gl equivalem a", litros, "l")
//f)
let xicara = 450
litros = xicara*6/25
console.log(xicara.toString(),"xic equivalem a", litros, "l")
//g)
xicara = Number(prompt("Digite a quantidade de xícaras"))
litros = xicara*6/25
console.log(xicara.toString(),"xic equivalem a", litros, "l")