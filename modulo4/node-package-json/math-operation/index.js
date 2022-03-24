const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

let resultado

switch (operacao) {
    case 'add':
        resultado = num1+num2
        break;
    case 'sub':
        resultado = num1-num2
        break;
    case 'mult':
        resultado = num1*num2
        break;
    case 'div':
        resultado = num1/num2
        break;
    default:
        console.log("\033[31m Tipo de operação inválida")
        break;
}

if (resultado){
    console.log("\033[34m Resposta: "+resultado)}
else {
    console.log("\033[31m Alguns dos parâmetros estão faltando")
}