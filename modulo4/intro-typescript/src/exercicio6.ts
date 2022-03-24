export function operacoesEntreDoisNumeros (num1: number, num2: number): void {
    const soma: number = num1 + num2
    const sub: number = num1 - num2
    const mult: number = num1 * num2
    const maior: number = num1>num2? num1 : num2
    console.log("A soma é: "+soma)
    console.log("A subtração é: "+sub)
    console.log("A multiplicação é: "+mult)
    console.log("O maior número é: "+maior)
}