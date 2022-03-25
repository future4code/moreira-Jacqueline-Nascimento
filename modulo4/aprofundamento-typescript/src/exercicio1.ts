// a)
const minhaString : string = ''

/*  Se atribuírmos um número a variável minhaString, o typescript acusa erro:
    Type 'number' is not assignable to type 'string'
 */

// b)
const meuNumero : number = 0
/*  Para que a varivél aceite mais de um tipo criamos uma Union type, por exemplo:
    let variavel: string | number
 */

// c) e d)

enum RainbowColors {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: RainbowColors
}

const pessoa1: Pessoa = {
    nome: "Jacqueline",
    idade: 27,
    corFavorita: RainbowColors.VIOLETA
}

const pessoa2: Pessoa = {
    nome: "Diego",
    idade: 30,
    corFavorita: RainbowColors.ANIL
}
const pessoa3: Pessoa = {
    nome: "Fernanda",
    idade: 28,
    corFavorita: RainbowColors.AMARELO
}