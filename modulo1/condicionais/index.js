/* EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO
1-
a) Com o uso do if/else ele imprimi "Passou no teste." para números pares e "Não passou no teste." para números ímpares.

b) Números pares.

c) Números ímpares.


2-
a) Server para identificar o preço da fruta.

b) O preço da fruta Maça é R$ 2.25

c) O preço da fruta Pêra é R$ 5


3-
a) Pede ao usuário para assumir valor a uma variável e já transforma o tipo dela em Number.

b) Sendo 10: Esse número passou no teste

   Sendo -10: Nada 
   
c) Vai dar erro no comando "console.log(mensagem)" pois a variável mensagem se encontra definida no escopo filho e não tem como usar no escopo pai.
*/


//EXERCÍCIOS DE ESCRITA DE CÓDIGO 
//1-
let idade = Number(prompt("Qual a sua idade"))

if (idade >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}


//2-
let turnoEstudo = (prompt("Qual turno você estuda? Responda, M(matutino), V(vespertino) ou N(noturno)")).toLowerCase()

if (turnoEstudo == "m") {
    console.log("Bom dia!")
} else if (turnoEstudo == "v") {
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}


//3-
switch (turnoEstudo) {
    case "m":
        console.log("Bom dia!")
        break
    case "v":
        console.log("Boa tarde!")
        break
    default:
        console.log("Boa noite!")
        break
}


//4-
let genero = (prompt("Qual gênero de filme quer assistir")).toLocaleLowerCase()
let preco = Number(prompt("Qual o valor do ingresso?"))

if ((genero == "fantasia") && (preco < 15)) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme:(")
}


//DESAFIOS
//1-
let generoDesafio = (prompt("Qual gênero de filme quer assistir")).toLocaleLowerCase()
let precoDesafio = Number(prompt("Qual o valor do ingresso?"))
let lanchinho = prompt("Qual lanchinho você vai comprar?")

if ((generoDesafio == "fantasia") && (precoDesafio < 15)) {
    console.log(`Bom filme! 
    Aproveite o seu ${lanchinho}`)
} else {
    console.log("Escolha outro filme:(")
}


//2-
let nomeCompleto = (prompt("Digite seu nome completo"))
let tipoDeJogo = (prompt("Qual tipo de jogo deseja? IN(internacional) ou DO(doméstico)")).toLowerCase()
let etapaDoJogo = (prompt("Qual a etapa do campeonato? SF(semi-final), DT(decisão de terceiro lugar) ou FI(final)")).toLowerCase()
let categoria = (prompt("Escolha uma categoria. 1,2,3 ou 4")).toLowerCase()
let quantidadeIngresso = (prompt("Quantos ingressos deseja?")).toLowerCase()


let valorIngresso
if ((tipoDeJogo == "do") && (etapaDoJogo == "sf") && (categoria == 1)) {
    valorIngresso = 1320
} else if ((tipoDeJogo == "do") && (etapaDoJogo == "sf") && (categoria == 2)) {
    valorIngresso = 880
} else if ((tipoDeJogo == "do") && (etapaDoJogo == "sf") && (categoria == 3)) {
    valorIngresso = 550
} else if ((tipoDeJogo == "do") && (etapaDoJogo == "sf") && (categoria == 4)) {
    valorIngresso = 220
} else if ((tipoDeJogo == "do") && (etapaDoJogo == "dt") && (categoria == 1)) {
    valorIngresso = 660
} else if ((tipoDeJogo == "do") && (etapaDoJogo == "dt") && (categoria == 2)) {
    valorIngresso = 440
} else if ((tipoDeJogo == "do") && (etapaDoJogo == "dt") && (categoria == 3)) {
    valorIngresso = 330
} else if ((tipoDeJogo == "do") && (etapaDoJogo == "dt") && (categoria == 4)) {
    valorIngresso = 170
} else if ((tipoDeJogo == "do") && (etapaDoJogo == "fi") && (categoria == 1)) {
    valorIngresso = 1980
} else if ((tipoDeJogo == "do") && (etapaDoJogo == "fi") && (categoria == 2)) {
    valorIngresso = 1320
} else if ((tipoDeJogo == "do") && (etapaDoJogo == "fi") && (categoria == 3)) {
    valorIngresso = 880
} else if ((tipoDeJogo == "do") && (etapaDoJogo == "fi") && (categoria == 4)) {
    valorIngresso = 330
} else if ((tipoDeJogo == "in") && (etapaDoJogo == "sf") && (categoria == 1)) {
    valorIngresso = 1320 / 4.1
} else if ((tipoDeJogo == "in") && (etapaDoJogo == "sf") && (categoria == 2)) {
    valorIngresso = 880 / 4.1
} else if ((tipoDeJogo == "in") && (etapaDoJogo == "sf") && (categoria == 3)) {
    valorIngresso = 550 / 4.1
} else if ((tipoDeJogo == "in") && (etapaDoJogo == "sf") && (categoria == 4)) {
    valorIngresso = 220 / 4.1
} else if ((tipoDeJogo == "in") && (etapaDoJogo == "dt") && (categoria == 1)) {
    valorIngresso = 660 / 4.1
} else if ((tipoDeJogo == "in") && (etapaDoJogo == "dt") && (categoria == 2)) {
    valorIngresso = 440 / 4.1
} else if ((tipoDeJogo == "in") && (etapaDoJogo == "dt") && (categoria == 3)) {
    valorIngresso = 330 / 4.1
} else if ((tipoDeJogo == "in") && (etapaDoJogo == "dt") && (categoria == 4)) {
    valorIngresso = 170 / 4.1
} else if ((tipoDeJogo == "in") && (etapaDoJogo == "fi") && (categoria == 1)) {
    valorIngresso = 1980 / 4.1
} else if ((tipoDeJogo == "in") && (etapaDoJogo == "fi") && (categoria == 2)) {
    valorIngresso = 1320 / 4.1
} else if ((tipoDeJogo == "in") && (etapaDoJogo == "fi") && (categoria == 3)) {
    valorIngresso = 880 / 4.1
} else if ((tipoDeJogo == "in") && (etapaDoJogo == "fi") && (categoria == 4)) {
    valorIngresso = 330 / 4.1
}

let formatoTipo
let formatoEtapa

if (tipoDeJogo == "in") {
    formatoTipo = "Internacional"
} else if (tipoDeJogo == "do") {
    formatoTipo = "Nacional"
}

if (etapaDoJogo == "sf") {
    formatoEtapa = "Semi-final"
} else if (etapaDoJogo == "dt") {
    formatoEtapa = "Decisão de terceiro lugar"
} else {
    formatoEtapa = "Final"
}




if (tipoDeJogo == "do") {
    console.log(`---Dados da Compra---
Nome do cliente: ${nomeCompleto}
Tipo do jogo: ${formatoTipo}
Etapa do jogo: ${formatoEtapa}
Categoria: ${categoria}
Quantidade de ingressos: ${quantidadeIngresso}
---Valores---
Valor do ingresso: ${valorIngresso}
Valor do total: ${valorIngresso * quantidadeIngresso}`)
} else {
    console.log(`---Dados da Compra---
Nome do cliente: ${nomeCompleto}
Tipo do jogo: ${formatoTipo}
Etapa do jogo: ${formatoEtapa}
Categoria: ${categoria}
Quantidade de ingressos: ${quantidadeIngresso}
---Valores---
Valor do ingresso: ${valorIngresso}
Valor do total: ${valorIngresso * quantidadeIngresso}`)
}





