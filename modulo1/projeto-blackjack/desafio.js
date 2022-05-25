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



const blackjack = () => {
   console.log("Boas vindas ao jogo de Blackjack!")
   let usuario = []
   let computador = []
   let somaComputador
   let somaUsuario

   if (confirm("Deseja iniciar uma rodada?")) {
      function rodadas() {
         usuario.push(comprarCarta())
         usuario.push(comprarCarta())

         computador.push(comprarCarta())
         computador.push(comprarCarta())

         if ((usuario[0].texto == "A" && usuario[1].texto == "A") || (computador[0].texto == "A" && computador[1].texto == "A")) {
            usuario.splice(0, 2)
            computador.splice(0, 2)

            usuario.push(comprarCarta())
            usuario.push(comprarCarta())

            computador.push(comprarCarta())
            computador.push(comprarCarta())
         }



         function mao(array) {
            componentes = array.map((a) => {
               return a.texto
            })
            return componentes
         }
         function pontos(array) {
            componentes = array.map((a) => {
               return a.valor
            })
            return componentes
         }

         let somaUsuario = 0
         for (let i = 0; i < pontos(usuario).length; i++) {
            somaUsuario = somaUsuario + pontos(usuario)[i]
         }


         if (confirm(
            `Suas cartas são ${mao(usuario)}. A carta revelada do computador é ${computador[0].texto}.` +
            "\n" +
            "Deseja comprar mais uma carta?"
         )) {
            usuario.push(comprarCarta())

            if (somaUsuario < 21) {
               for (m = 0; m <= 4; m++) {
                  if (confirm(`Suas cartas são ${mao(usuario)}. Deseja comprar outra carta?`)) {
                     usuario.push(comprarCarta())
                  } else {
                     break
                  }
               }
            }
         }

         somaUsuario = 0
         for (let i = 0; i < pontos(usuario).length; i++) {
            somaUsuario = somaUsuario + pontos(usuario)[i]
         }

         let somaComputador = 0
         for (let i = 0; i < pontos(computador).length; i++) {
            somaComputador = somaComputador + pontos(computador)[i]
         }


         for (m = 2; somaComputador < somaUsuario && somaComputador < 21; m++) {
            computador.push(comprarCarta())
            somaComputador += pontos(computador)[m]
         }




         console.log(`Usuário - cartas: ${mao(usuario)} - pontuação ${somaUsuario}`)
         console.log(`Computador - cartas: ${mao(computador)} - pontuação ${somaComputador}`)


         if (somaComputador > 21 || (somaComputador < 21 && somaComputador < somaUsuario)) {
            console.log("O usuário ganhou")
         } else if (somaUsuario > 21 || (somaUsuario < 21 && somaComputador > somaUsuario)) {
            console.log("O computador ganhou")
         } else if (somaComputador == somaUsuario) {
            console.log("Empate!")
         }

      }


      rodadas()



   }

   else {
      console.log("O jogo acabou")
   }
}
blackjack()


