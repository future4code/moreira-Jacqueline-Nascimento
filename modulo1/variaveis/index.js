// Exercícios de interpretação de código

/*
1. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

Resposta:
10
10 5

2. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

Resposta: Seria 10 10 10, mas dará erro, pois a variável não foi declarada.
Obs.: Fazendo o teste de execução do programa não deu erro, a resposta é 10 10 10.

3.Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis.
Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase.
Alem disso, os nomes não podem começar com números ou caracteres especiais.

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

Resposta:
p será hrTrabalhadaDia
t será salarioDia 
*/

// Exercícios de escrita de código

// 1.
let nome, idade
console.log(typeof nome, typeof idade) //tipo undefined, pois não foi atribuído nenhum valor a essas variáveis
nome = prompt("Qual é o seu nome?")
idade = prompt("Quantos anos você tem?")
console.log(typeof nome, typeof idade) //os tipos agora são strings, pois prompt sempre retorna uma string
console.log("Olá", nome, "você tem", idade, "anos")

// 2.
const estudanteLabenu = prompt("Você é estudante da Labenu? (SIM/NÃO)")
const roupaAzul = prompt("Você está usando uma roupa azul hoje? (SIM/NÃO)")
const usaOculos = prompt("Você usa óculos? (SIM/NÃO)")
console.log("Você é estudante da Labenu?", estudanteLabenu)
console.log("Você está usando uma roupa azul hoje?", roupaAzul)
console.log("Você usa óculos?", usaOculos)

// 3.
let a = 10
let b = 25

c = a
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

// Desafio
const numero1 = Number(prompt("Digite um número"))
const numero2 = Number(prompt("Digite outro número"))

const soma = numero1 + numero2
const multiplica = numero1 * numero2

console.log("O primeiro número somado ao segundo número resulta em:", soma)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", multiplica)