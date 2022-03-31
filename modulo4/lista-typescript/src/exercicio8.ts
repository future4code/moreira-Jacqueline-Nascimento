function renovacaoCarteira (dataNasc:string, dataEmissao:string): string {
    const dataAtual: number = new Date().getTime()
    const separaDataNasc : string[] = dataNasc.split("/")
    const separaDataEmissao : string[] = dataEmissao.split("/")
    if (separaDataNasc.length !==3 || separaDataEmissao.length !==3){
        return "O formato das datas deve ser dd/mm/aaaa"
    }
    const dataNascAtt:number = new Date(separaDataNasc[2]+'-'+separaDataNasc[1]+'-'+separaDataNasc[0]).getTime()
    const dataEmissaoAtt:number = new Date(separaDataEmissao[2]+'-'+separaDataEmissao[1]+'-'+separaDataEmissao[0]).getTime()
    
    const idade: number = (dataAtual - dataNascAtt)*3.17098e-11
    const tempoEmss: number = (dataAtual - dataEmissaoAtt)*3.17098e-11

    if (idade<21 && tempoEmss>=5){
        return "A carteira precisa ser renovada"
    } else if (idade<51 && tempoEmss>=10){
        return "A carteira precisa ser renovada"
    } else if (tempoEmss>=15){
        return "A carteira precisa ser renovada"
    }else{
        return 'Não precisa de renovação'
    }
    
    
}

console.log(renovacaoCarteira('24/02/2005', '11/03/2015'))