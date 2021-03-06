// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let newArray = []
    const tamanhoArray = array.length
    for (let i=0; i<tamanhoArray;i++){
        newArray.push(array.pop())
    }
    return newArray
    // return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    // Algoritmo de ordenação BubbleSort
    const tamanho = array.length
    let aux
    for (let i=0;i<tamanho;i++){
        for (j=0; j<tamanho-i-1;j++){
            if (array[j]>array[j+1]){
                aux = array[j]
                array[j] = array[j+1]
                array[j+1] = aux
            }
        }
    }
    return array
    // return array.sort((a , b) => {return a-b})
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const newArray = []
    for (elemento of array){
        if (elemento % 2 === 0){
            newArray.push(elemento)
        }
    }
    return newArray
    // return array.filter((item) => {return item%2===0})
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return retornaNumerosPares(array).map((item)=>{return item**2})
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = array[0]
    for (elemento of array){
        if (elemento>maiorNumero){maiorNumero=elemento}
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero
    let menorNumero
    if (num1<num2){
        menorNumero = num1
        maiorNumero = num2
    }else{
        maiorNumero = num1
        menorNumero = num2
    }
    const objeto = {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorNumero%menorNumero===0,
        diferenca: maiorNumero-menorNumero
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let array = []
    for (let i=0;i<n;i++){
        array.push(i*2)
    }
    return array
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA===ladoB && ladoB===ladoC){
        return "Equilátero"
    } else if (ladoA===ladoB || ladoB===ladoC || ladoA==ladoC){
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a , b) => {return a-b})
    return [array[array.length -2], array[1]]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.toString().replaceAll(",",", ")}.`  
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return {...pessoa, nome:"ANÔNIMO"}
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    function validarCondicoes(item){
        return item.altura>=1.5 && item.idade>14 && item.idade<60
    }
    return pessoas.filter(validarCondicoes)
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    function validarCondicoes(item){
        return !(item.altura>=1.5 && item.idade>14 && item.idade<60)
    }
    return pessoas.filter(validarCondicoes)
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (item of contas) {
        if (item.compras.length !== 0){
            let valorTotal = item.compras.reduce((total, num) => {return total + num}, 0)
            item.saldoTotal -= valorTotal
            item.compras = []
        }
    }
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const vetorDeNomes = consultas.map((item) => {return item.nome})
    vetorDeNomes.sort()
    let arrayOrdenado = consultas
    for (let i=0;i<vetorDeNomes.length;i++){
        arrayOrdenado[i].nome = vetorDeNomes[i]
        for (let j=0;j<consultas.length;j++){
            if (vetorDeNomes[i] === consultas[j].nome){
                arrayOrdenado[i].dataDaConsulta = consultas[j].dataDaConsulta
            }
        }  
    }
    return arrayOrdenado
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    const vetorDeDatas = consultas.map((item) => {return item.dataDaConsulta})
    function ordenaAnos(a, b){
        arrayA = a.split("/")
        arrayB = b.split("/")
        if (arrayA[2]>arrayB[2]){
            return 1
        }
        else if (arrayA[2]<arrayB[2]){
            return -1
        } else {
            return 0
        }
    }
    function ordenaMeses(a, b){
        arrayA = a.split("/")
        arrayB = b.split("/")
        if (arrayA[1]>arrayB[1]){
            return 1
        }
        else if (arrayA[1]<arrayB[1]){
            return -1
        } else {
            return 0
        }
    }
    function ordenaDias(a, b){
        arrayA = a.split("/")
        arrayB = b.split("/")
        if (arrayA[0]>arrayB[0]){
            return 1
        }
        else if (arrayA[0]<arrayB[0]){
            return -1
        } else {
            return 0
        }
    }
    vetorDeDatas.sort(ordenaDias)
    vetorDeDatas.sort(ordenaMeses)
    vetorDeDatas.sort(ordenaAnos)
    let arrayOrdenado = consultas
    for (let i=0;i<vetorDeDatas.length;i++){
        arrayOrdenado[i].dataDaConsulta = vetorDeDatas[i]
        for (let j=0;j<consultas.length;j++){
            if (vetorDeDatas[i] === consultas[j].dataDaConsulta){
                arrayOrdenado[i].nome = consultas[j].nome
            }
        }  
    }
    return arrayOrdenado
}