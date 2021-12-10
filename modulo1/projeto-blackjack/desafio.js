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
    

let cartasUsuario = []
let cartasComputador = []

if(confirm("Boas vindas ao jogo de Blackjack!"+ "\n" + "Quer iniciar uma nova rodada?")){
   cartasComputador.push(comprarCarta())
   cartasUsuario.push(comprarCarta())
   cartasComputador.push(comprarCarta())
   cartasUsuario.push(comprarCarta())

   let cartasUsuarioAs = cartasUsuario.filter((item) => {return item.texto.includes('A')})
   let cartasComputadorAs = cartasComputador.filter((item) => {return item.texto.includes('A')})
   while ((cartasUsuarioAs.length === 2) || (cartasComputadorAs.length === 2)){
      cartasComputador.push(comprarCarta())
      cartasUsuario.push(comprarCarta())
      cartasComputador.push(comprarCarta())
      cartasUsuario.push(comprarCarta())

      cartasUsuarioAs = cartasUsuario.filter((item) => {return item.texto.includes('A')})
      cartasComputadorAs = cartasComputador.filter((item) => {return item.texto.includes('A')})
   }
}

let pontuacaoUsuario = 0
let pontuacaoComputador = 0
let textoCartasUsuario = ""
let textoCartasComputador = ""

cartasUsuario.forEach((item) => {return pontuacaoUsuario += item.valor})
cartasComputador.forEach((item) => {return pontuacaoComputador += item.valor})

cartasUsuario.forEach((item) => {return textoCartasUsuario += ' '+ item.texto})
cartasComputador.forEach((item) => {return textoCartasComputador += ' '+ item.texto})

let rodada = confirm(`Suas cartas são ${textoCartasUsuario}. A carta revelada do computador é ${cartasComputador[0].texto}.`
+ "\n"+  // \n faz pular a linha
"Deseja comprar mais uma carta?")

while(rodada){
   let carta = comprarCarta()
   cartasUsuario.push(carta)
   textoCartasUsuario += " " + carta.texto 
   pontuacaoUsuario += carta.valor
   
   if (pontuacaoUsuario > 21){
      break;
   }

   rodada = confirm(`Suas cartas são ${textoCartasUsuario}. A carta revelada do computador é ${cartasComputador[0].texto}.`
      + "\n"+  // \n faz pular a linha
      "Deseja comprar mais uma carta?")
}

if (pontuacaoUsuario <= 21){
   while(pontuacaoComputador < pontuacaoUsuario){
      let carta = comprarCarta()
      cartasComputador.push(carta)
      textoCartasComputador += " " + carta.texto 
      pontuacaoComputador += carta.valor
   }
}

function verificaVencedor(pontuacaoUsuario, pontuacaoComputador) {
   if (pontuacaoUsuario === pontuacaoComputador){
      return "Empate!"
   } else if ((pontuacaoUsuario > pontuacaoComputador && pontuacaoUsuario<=21) ||
               (pontuacaoComputador>21 && pontuacaoUsuario<=21)){
      return "O usuário ganhou!"
   } else if ((pontuacaoUsuario < pontuacaoComputador && pontuacaoComputador <= 21) ||
               (pontuacaoComputador<=21 && pontuacaoUsuario>21)) {
      return "O computador ganhou!"
   }
}

const fraseFinal = verificaVencedor(pontuacaoUsuario, pontuacaoComputador)

alert(`Suas cartas são ${textoCartasUsuario} . Sua pontuação é ${pontuacaoUsuario}.`+
"\n"+ `As cartas do computador são ${textoCartasComputador}. A pontuação do computador é ${pontuacaoComputador}.`
+ "\n"+ fraseFinal
)