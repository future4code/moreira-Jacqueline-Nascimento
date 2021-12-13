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
    
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
      
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}