function nomeENascimento (nome:string, dataNasc:string): string {
    const separaData : string[] = dataNasc.split("/")
    if (separaData.length !== 3){
        return 'Formato de data inválido, deve seguir o formato dd/mm/aaaa'
    }
    let mes: string = ''
    switch (separaData[1]) {
        case '01':
            mes = 'janeiro'
            break;
        case '02':
            mes = 'fevereiro'
            break;
        case '03':
            mes = 'março'
            break;
        case '04':
            mes = 'abril'
            break;
        case '05':
            mes = 'maio'
            break;
        case '06':
            mes = 'junho'
            break;
        case '07':
            mes = 'julho'
            break;
        case '08':
            mes = 'agosto'
            break;
        case '09':
            mes = 'setembro'
            break;
        case '10':
            mes = 'outubro'
            break;
        case '11':
            mes = 'novembro'
            break;
        case '12':
            mes = 'dezembro'
            break;
        default:
            return 'Formato de data inválido, deve seguir o formato dd/mm/aaaa';
    }
    

    return `Olá me chamo ${nome}, nasci no dia ${separaData[0]} do mês de ${mes} do ano de ${separaData[2]}`
}

console.log(nomeENascimento('Jacque', '24/2/1995'))