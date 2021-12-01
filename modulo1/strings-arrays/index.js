// Aula Strings e Arrays

//----------------------- Exercícios de Interpretação de código ------------------------------
/*
1. Mensagens impressas no console:
a. undefined
b. null
c. 11
d. 3
e. (11) [3 19 5 6 7 8 9 10 11 12 13]
f. 9
2. SUBI NUM ÔNIBUS EM MIRROCOS 27
*/


//---------------------------- Exercícios de escrita de código -------------------------------

// 1.
const nomeUsuario = prompt("Escreva seu nome")
const emailUsuario = prompt("Escreva seu email")

console.log(`O email ${emailUsuario} foi cadastrado com sucesso. Seja bem-vindo(a) ${nomeUsuario}`)

// 2.
const comidasFavoritas = ["Pizza","Chocolate","Hamburguer","Camarão","Lasanha"]
console.log(comidasFavoritas)
console.log("Essas são as minhas comidas preferidas: ")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])
const comidaUsuario = prompt("Escreva sua comida favorita")
comidasFavoritas[1] = comidaUsuario
console.log(comidasFavoritas)

// 3.
const listaDeTarefas = []
let tarefa = prompt("Escreva uma tarefa do seu dia-a-dia")
listaDeTarefas.push(tarefa)
tarefa = prompt("Escreva outra tarefa do seu dia-a-dia")
listaDeTarefas.push(tarefa)
tarefa = prompt("Escreva mais uma tarefa do seu dia-a-dia")
listaDeTarefas.push(tarefa)
console.log(listaDeTarefas)
const index = Number(prompt("Digite o índice de uma tarefa que você já realizou: 0, 1 ou 2"))
listaDeTarefas.splice(index, 1)
console.log(listaDeTarefas)

//------------------------------------- Desafios -------------------------------------------

// 1.
const frase = prompt("Escreva uma frase")
console.log(frase)
const array = frase.split(" ")
console.log(array)

// 2.
const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
const indiceAbacaxi = frutas.indexOf("Abacaxi")
console.log("Índice de Abacaxi:",indiceAbacaxi,"Tamanho do array:", frutas.length)