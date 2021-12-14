/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Boas vindas ao jogo de Blackjack!")

let cartasUsuario = []
let cartasComputador = []

let rodada = confirm("Quer iniciar uma nova rodada?")

while(rodada){
   cartasComputador.push(comprarCarta())
   let carta = comprarCarta()
   cartasUsuario.push(carta)
   console.log(`Carta ${carta.texto} com pontuação ${carta.valor}`)
   rodada = confirm("Quer iniciar uma nova rodada?")
}
console.log("O jogo acabou")

let pontuacaoUsuario = 0
let pontuacaoComputador = 0

cartasUsuario.forEach((item) => {return pontuacaoUsuario += item.valor})
cartasComputador.forEach((item) => {return pontuacaoComputador += item.valor})

let textoCartasUsuario = ""
let textoCartasComputador = ""

cartasUsuario.forEach((item) => {return textoCartasUsuario += ' '+ item.texto})
cartasComputador.forEach((item) => {return textoCartasComputador += ' '+ item.texto})

console.log(`Usuário - carta:${textoCartasUsuario} - pontuação ${pontuacaoUsuario}`)
console.log(`Computador - carta:${textoCartasComputador} - pontuação ${pontuacaoComputador}`)

if (pontuacaoUsuario === pontuacaoComputador){
   console.log("Empate!")
} else if ((pontuacaoUsuario > pontuacaoComputador && pontuacaoUsuario<=21) ||
            (pontuacaoComputador>21 && pontuacaoUsuario<=21)){
   console.log("O usuário ganhou!")
} else if ((pontuacaoUsuario < pontuacaoComputador && pontuacaoComputador <= 21) ||
            (pontuacaoComputador<=21 && pontuacaoUsuario>21)) {
   console.log("O computador ganhou!")
} else if (pontuacaoComputador>21 && pontuacaoUsuario>21){
   console.log("Ninguém ganhou!")
}