// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = Number(prompt("Digite a altura do retângulo"))
  let largura = Number(prompt("Digite a largura do retângulo"))
  let area = altura*largura
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o ano atual"))
  let anoNascimento = Number(prompt("Digite o ano de nascimento"))
  let idade = anoAtual - anoNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let imc = peso/(altura**2)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  let nome = prompt("Digite seu nome")
  let idade = prompt("Digite sua idade")
  let email = prompt("Digite seu email")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cores = []
  let cor = prompt("Digite sua cor favorita")
  cores.push(cor)
  cor = prompt("Digite sua segunda cor favorita")
  cores.push(cor)
  cor = prompt("Digite sua terceira cor favorita")
  cores.push(cor)
  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let primeiroElemento = retornaPrimeiroElemento(array)
  let ultimoElemento = retornaUltimoElemento(array)
  array[0] = ultimoElemento
  array[array.length - 1] = primeiroElemento
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o ano atual"))
  let anoNascimento = Number(prompt("Digite o ano de nascimento"))
  let anoEmissaoRg = Number(prompt("Digite o ano que seu RG foi emitido"))
  let idade = anoAtual - anoNascimento
  let anoRenovacao = anoAtual - anoEmissaoRg
  let opcao1 = idade <= 20 && anoRenovacao >= 5
  let opcao2 = idade > 20 && idade <= 50 && anoRenovacao >= 10
  let opcao3 = idade > 50 && anoRenovacao >= 15
  console.log(opcao1||opcao2||opcao3)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let multiplo400 = ano%400 === 0
  let multiplo4 = ano%4 === 0 && !(ano%100 === 0 && !(ano%400 === 0))
  return multiplo400||multiplo4
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let resposta1 = prompt("Você tem mais de 18 anos? (sim/nao")
  let resposta2 = prompt("Você possui ensino médio completo? (sim/nao")
  let resposta3 = prompt("Você possui disponibilidade exclusiva durante os horários do curso? (sim/nao")
  let opcao1 = resposta1.trim().toLowerCase() === "sim"
  let opcao2 = resposta2.trim().toLowerCase() === "sim"
  let opcao3 = resposta3.trim().toLowerCase() === "sim"
  console.log(opcao1&&opcao2&&opcao3)
}