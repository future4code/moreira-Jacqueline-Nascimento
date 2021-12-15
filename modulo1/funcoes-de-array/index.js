// Aula Callback e Funções de Array

//----------------------- Exercícios de Interpretação de código ------------------------------
/*
1. O código imprimirá cada índice (que vai de 0 a 2) seguido do objeto contido em cada índice,
seguido do vetor completo, ficando assim:
    0 { nome: "Amanda Rangel", apelido: "Mandi" } [{}, {}, {}]
    1 { nome: "Laís Petra", apelido: "Laura" } [{}, {}, {}]
    2 { nome: "Letícia Chijo", apelido: "Chijo" } [{}, {}, {}]
2. Um vetor apenas com os valores da propriedade nome:
    ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]
3. Um vetor apenas com os objetos que tem a propriedade apelido diferente de Chijo:
    [{ nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },]
*/


//---------------------------- Exercícios de escrita de código -------------------------------

// 1.
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]
// a)
const separaNomes = (item) => {
    return item.nome
}

const arrayDeNomes = pets.map(separaNomes)
console.log(arrayDeNomes)
// b)
const separaSalsichas = (item) => {
    return item.raca === "Salsicha"
}

const arrayDeSalsichas = pets.filter(separaSalsichas)
console.log(arrayDeSalsichas)
// c)
const separaPoodles = (item) => {
    return item.raca === "Poodle"
}
const escreveMesnsagens = (item) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
}

const mensagemParaPoodles = pets.filter(separaPoodles).map(escreveMesnsagens)
console.log(mensagemParaPoodles)

// 2.
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
// a)
const nomeDosProdutos = produtos.map(separaNomes)
console.log(nomeDosProdutos)

// b)
const nomePrecoComDesconto = (item) => {
    let objeto = {
       nome: item.nome,
       preco: item.preco*(1-0.05)
    }
    return objeto
}
const novosProdutos = produtos.map(nomePrecoComDesconto)
console.log(novosProdutos)

// c)
const separaBebidas = (item) => {
    return item.categoria === "Bebidas"
}
const listaDeBebidas = produtos.filter(separaBebidas)
console.log(listaDeBebidas)

// d)
const procuraYpe = (item) => {
    return item.nome.includes("Ypê")
}
const objetosComYpe = produtos.filter(procuraYpe)
console.log(objetosComYpe)

// e)
const comprePreco = (item) => {
    return `Compre ${item.nome} por ${item.preco}`
}
const precosDosYpes = objetosComYpe.map(comprePreco)
console.log(precosDosYpes)

//------------------------------------- Desafios -------------------------------------------

// 1.
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]
// a)
const pokemosEmOrdemAlfabetica = pokemons.map(separaNomes).sort()
console.log(pokemosEmOrdemAlfabetica)

// b)
const separaTipos = (item) => {
    return item.tipo
}
const eliminaRepetidos = (item, index, array) => {
    return array.indexOf(item) === index
}

const arrayDeTipos = pokemons.map(separaTipos).filter(eliminaRepetidos)
console.log(arrayDeTipos)

