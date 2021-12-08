// Aula Objetos

//----------------------- Exercícios de Interpretação de código ------------------------------
/*
1.
a) Mensagem impressa no console:
    "Matheus Nachtergaele"
    "Virginia Cavendish"
    {canal: "Globo", horario: "14h"}
2.
a) Mensagem impressa no console:
    {nome: "Juca", 
	idade: 3, 
	raca: "SRD"}
    {nome: "Juba", 
	idade: 3, 
	raca: "SRD"}
    {nome: "Jubo", 
	idade: 3, 
	raca: "SRD"}
b) Os três pontos é uma spread, realiza uma cópia do objeto que pode ser manipulada da maneira
que quisermos, que nesses casos o objeto copiado teve sua propriedade "nome" alterada.
3.
a) Mensagem impressa no console:
    false
    undefined
b) A função retorna o valor da propriedade dada do objeto, no primeiro caso vai retorna false,
pois é o valor atribuído a propriedade "backender", no segundo caso vai retornar undefined,
pois não existe nenhuma propriedade chamada "altura".
*/


//---------------------------- Exercícios de escrita de código -------------------------------

// 1.
const pessoa = {
    nome: "Mariana", 
    apelidos: ["Mari", "Ana", "Aninha"]
}
function imprimeApelidos(objeto){
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
}
const newPessoa = {
    ...pessoa,
    apelidos: ["Nana", "Marizinha", "Mar"]
}
imprimeApelidos(newPessoa)

// 2.
const individuo1 = {
    nome: "Michael",
    idade: 27,
    profissao: "Militar"
}
const individuo2 = {
    nome: "Carla",
    idade: 30,
    profissao: "Engenheira civil"
}
function objetoParaVetor(objeto) {
    return [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
}
console.log(objetoParaVetor(individuo1))
console.log(objetoParaVetor(individuo2))

// 3.
const carrinho = []
const fruta1 = {
    nome: 'Banana',
    disponibilidade: true
}
const fruta2 = {
    nome: 'Maçã',
    disponibilidade: true
}
const fruta3 = {
    nome: 'Laranja',
    disponibilidade: true
}
function colocaCarrinho(fruta){
    carrinho.push(fruta)
}
colocaCarrinho(fruta1)
colocaCarrinho(fruta2)
colocaCarrinho(fruta3)
console.log(carrinho)

//------------------------------------- Desafios -------------------------------------------

// 1.
function criaObjeto(){
    const nome = prompt("Qual seu nome?")
    const idade = prompt("Qual sua idade?")
    const profissao = prompt("Qual sua profissão?")
    const objeto = {
        nome: nome,
        idade: idade,
        profissao: profissao
    }
    console.log(objeto)
}
// criaObjeto()

// 2.
function comparaFilmes(filme1, filme2){
    console.log("O primeiro filme foi lançado antes do segundo?", filme1.ano_lancamento<filme2.ano_lancamento)
    console.log("O primeiro filme foi lançado no mesmo ano do segundo?", filme1.ano_lancamento===filme2.ano_lancamento)
}
const filme1 = {
    nome: "Frozen",
    ano_lancamento: 2013
}
const filme2 = {
    nome: "Moana",
    ano_lancamento: 2016
}
comparaFilmes(filme1, filme2)

// 3.
function alteraDisponibilidade(fruta){
    return fruta.disponibilidade = !fruta.disponibilidade
}

alteraDisponibilidade(fruta1)
console.log(fruta1)
alteraDisponibilidade(fruta1)
console.log(fruta1)
alteraDisponibilidade(fruta2)
console.log(fruta2)