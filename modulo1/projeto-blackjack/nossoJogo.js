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
let novaCarta = () => {
   function nome () {
      return comprarCarta().texto
   }
   function pontuacao () {
      return comprarCarta().valor
   }
   return [nome(), pontuacao()]
}


console.log(novaCarta())

// const blackjack = () => {
//    console.log("Boas vindas ao jogo de Blackjack!")
//    let usuario
//    let computador
//    if (confirm("Deseja iniciar uma rodada?")) {
//       function rodadaUsuario() {
//          let primeiraCarta = comprarCarta()
//          let segundaCarta = comprarCarta()
//          usuario = {
//             cartaUm: {
//                nome: primeiraCarta.texto,
//                pontuacao: primeiraCarta.valor               
//             },
//             cartaDois: {
//                nome: segundaCarta.texto,
//                pontuacao: segundaCarta.valor
//             }
//          }
//          console.log(`Usuário - cartas: ${usuario.cartaUm.nome, usuario.cartaDois.nome} - pontuação ${usuario.cartaUm.pontuacao+usuario.cartaDois.pontuacao}`) 
//        }
//       function rodadaComputador() {
//          let primeiraCarta = comprarCarta()
//          let segundaCarta = comprarCarta()
//          computador = {
//             cartaUm: {
//                nome: primeiraCarta.texto,
//                pontuacao: primeiraCarta.valor               
//             },
//             cartaDois: {
//                nome: segundaCarta.texto,
//                pontuacao: segundaCarta.valor
//             }
//          }
//        }
       

//        rodadaComputador()
//        rodadaUsuario()
//        console.log(`Usuário - cartas: ${usuario.cartaUm.nome, usuario.cartaDois.nome} - pontuação ${usuario.cartaUm.pontuacao+usuario.cartaDois.pontuacao}`)
   

//    } else {
//    console.log("O jogo acabou")
//        }
//       }



// blackjack()




// for (mao = 0; mao <= 2; mao++) {
//    maoUsuario = [comprarCarta()]
// }