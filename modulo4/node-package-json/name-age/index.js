// Exercício 1

// a) Acessamos os parâmetro através do process.argv[]

const name = process.argv[2]
const age = Number(process.argv[3])

// b)
// console.log(`Olá, ${name}! Você tem ${age} anos.`)

// c)
if (name && age){
    console.log("\033[34m Olá,"+ name + "\033[34m! Você tem " +age+"\033[34m anos. Em sete anos você terá "+ age+7)}
else {
    console.log("\033[31m Alguns dos parâmetros estão faltando")
}