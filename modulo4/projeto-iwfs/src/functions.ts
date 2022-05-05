export function calculateAge (birthDate:string): number | string {
    const currentDate: number = new Date().getTime()
    const partbirthDate : string[] = birthDate.split("/")
    if (partbirthDate.length !==3){
        return "O formato da data de nascimento deve ser dd/mm/aaaa"
    }
    const birthDateAtt:number = new Date(partbirthDate[2]+'-'+partbirthDate[1]+'-'+partbirthDate[0]).getTime()
    
    const age: number = (currentDate - birthDateAtt)*3.17098e-11
    return age  
}

export function validateCPF (CPF:number):boolean{
    const cpfString = CPF.toString()
    const array: string[] = cpfString.split("")
    if (array.length !==11){
        return false
    }
    const num1: number = Number(array[0])
    const num2: number = Number(array[1])
    const num3: number = Number(array[2])
    const num4: number = Number(array[3])
    const num5: number = Number(array[4])
    const num6: number = Number(array[5])
    const num7: number = Number(array[6])
    const num8: number = Number(array[7])
    const num9: number = Number(array[8])
    const num10: number = Number(array[9])
    const num11: number = Number(array[10])

    const penult: number = num1*10 + num2*9 + num3*8 + num4*7 + num5*6 + num6*5 + num7*4 + num8*3 + num9*2
    const modPenult: number = 11 - penult % 11
    const checkPenult: number = modPenult<10?modPenult:0

    const last: number = num1*11 + num2*10 + num3*9 + num4*8 + num5*7 + num6*6 + num7*5 + num8*4 + num9*3 + checkPenult*2
    const modLast: number = 11 - last % 11
    const checkLast: number = modLast<10?modLast:0

    if (checkPenult===num10 && checkLast===num11){
        return true
    } else {
        return false
    }
}