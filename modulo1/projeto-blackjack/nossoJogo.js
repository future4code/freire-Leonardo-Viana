/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 */

// const blackjack = () => {
//    console.log("Boas vindas ao jogo de Blackjack!")
//    let usuario = []
//    let computador = []
//    if (confirm("Deseja iniciar uma rodada?")) {
//       function rodadas() {
//          usuario.push(comprarCarta())
//          usuario.push(comprarCarta())

//          computador.push(comprarCarta())
//          computador.push(comprarCarta())
//          console.log(`Usuário - cartas: ${usuario[0].texto}${usuario[1].texto} - pontuação ${usuario[0].valor + usuario[1].valor}`)
//          console.log(`Computador - cartas: ${computador[0].texto}${computador[1].texto} - pontuação ${computador[0].valor + computador[1].valor}`)
//          return usuario, computador

//       }
//       function resultadoRodada() {
//          if (usuario[0].valor + usuario[1].valor > computador[0].valor + computador[1].valor) {
//             console.log("O usuário ganhou")
//          } else if (usuario[0].valor + usuario[1].valor < computador[0].valor + computador[1].valor) {
//             console.log("O computador ganhou")
//          } else {
//             console.log("Empate!")
//          }
//       }

//       rodadas()
//       resultadoRodada()


//    }

//    else {
//       console.log("O jogo acabou")
//    }
// }
// blackjack()


let mao = [1,2,3,4,5,6]



let somaMao = 0 
for (i=0; i < mao.length; i++) {
   somaMao += mao[i]
}

console.log(somaMao)








