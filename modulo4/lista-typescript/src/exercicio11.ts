function converteParaRomano (numero:number):string {
    const objetos:{letra: string, valor: number}[]= [
        {letra: 'M', valor: 1000},
        {letra: 'CM', valor: 900},
        {letra: 'D', valor: 500},
        {letra: 'CD', valor: 400},
        {letra: 'C', valor: 100},
        {letra: 'XC', valor: 90},
        {letra: 'L', valor: 50},
        {letra: 'XL', valor: 40},
        {letra: 'X', valor: 10},
        {letra: 'IX', valor: 9},
        {letra: 'V', valor: 5},
        {letra: 'IV', valor: 4},
        {letra: 'I', valor: 1}
    ]
    let numReal = numero
    let numRomano:string = ''
    for (let i=0; i<objetos.length-1;i++){
        while((numReal-objetos[i].valor)>=0){
            numRomano+=objetos[i].letra
            numReal -= objetos[i].valor
        }
    }
    return numRomano
}

console.log(converteParaRomano(180))