enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}
type Filme = {
    nome: string,
    anoLancamento: number,
    genero: GENERO,
    pontuacao?: number
}

function tipoDeFilme (nome:string,
                    anoLancamento:number,
                    genero: GENERO,
                    pontuacao?:number):Filme{
    let filme: Filme
    if (pontuacao){
        filme = {
            nome: nome,
            anoLancamento: anoLancamento,
            genero: genero,
            pontuacao: pontuacao
        }
    }else{
        filme = {
            nome: nome,
            anoLancamento: anoLancamento,
            genero: genero
        }
    }
    return filme
}

console.log(tipoDeFilme('Divertidamento', 2015, GENERO.COMEDIA, 10))

