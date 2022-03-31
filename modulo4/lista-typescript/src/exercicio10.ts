function validaCPF (CPF:string):boolean{
    const array: string[] = CPF.split("")
    if (array.length !==14){
        return false
    }
    const num1: number = Number(array[0])
    const num2: number = Number(array[1])
    const num3: number = Number(array[2])
    const num4: number = Number(array[4])
    const num5: number = Number(array[5])
    const num6: number = Number(array[6])
    const num7: number = Number(array[8])
    const num8: number = Number(array[9])
    const num9: number = Number(array[10])
    const num10: number = Number(array[12])
    const num11: number = Number(array[13])

    const penultimo: number = num1*10 + num2*9 + num3*8 + num4*7 + num5*6 + num6*5 + num7*4 + num8*3 + num9*2
    const modPenultimo: number = 11 - penultimo % 11
    const verificaPenultimo: number = modPenultimo<10?modPenultimo:0

    const ultimo: number = num1*11 + num2*10 + num3*9 + num4*8 + num5*7 + num6*6 + num7*5 + num8*4 + num9*3 + verificaPenultimo*2
    const modUltimo: number = 11 - ultimo % 11
    const verificaUltimo: number = modUltimo<10?modUltimo:0

    if (verificaPenultimo===num10 && verificaUltimo===num11){
        return true
    } else {
        return false
    }
}

console.log(validaCPF('102.915.404-06'))