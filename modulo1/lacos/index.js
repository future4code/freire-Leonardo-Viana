/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDGIO
1-
O resultado impresso no console será 10,o código aplica o mesmo comportamento de forma que o atual i e valor sejam somados  


2-
a) Imprime todos os números maiores que 18.

b) Após o for(let numero of lista) pode ser usado o "console.log(lista.indexOf(numero))"


3-
*
**
***
****
*/


// EXERCÍCIOS DE ESCRITA DE CÓDIGO 
//1-
let bichinhos = Number(prompt("Quantos animais de estimação você tem?"))
let nomes
let array = []
if (bichinhos === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else {
    for (let i = 0; i < bichinhos; i++) {
        nomes = prompt("Qual o nome dos animais?")
        array.push(nomes)
    }
    console.log(array)
}


//2-
//a)
let arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let letraA = ""
for (let i of arrayOriginal) {
    letraA = `${letraA} ${i}`
}
console.log(letraA)

//b)
let letraB = ""
for (let i of arrayOriginal) {
    letraB = `${letraB} ${i / 10}`
}
console.log(letraB)

//c)
let letraC = ""
for (let i of arrayOriginal) {
    if (i % 2 == 0) {
        letraC = `${letraC} ${i}`
    }

}
console.log(letraC)

//d)
let letraD = []
let formato = ""
for (let i of arrayOriginal) {
    formato = `O elemento do índex ${arrayOriginal.indexOf(i)} é: ${i}`
    letraD[i] = formato
}
console.log(letraD)

//e)
let valorMaximo = 9.5
let valorMinimo = 1.5
let maiorArray
let menorArray

for (let i of arrayOriginal) {
    if (i > valorMaximo) {
        maiorArray = i
    } else if (i < valorMinimo) {
        menorArray = i
    }
}
console.log(`O maior número é ${maiorArray} e o menor número é ${menorArray} `)


// DESAFIOS
//1-
function brincadeira(numeroSurpresa) {
    let numero = Number(prompt("Escolha um número"))
    console.log("Vamos jogar!")
    for (numero; numero !== numeroSurpresa; numero = Number(prompt("Escolha outro número"))) {
        if (numero > numeroSurpresa) {
            console.log("Errou. O número escolhido é maior")
        } else if (numero < numeroSurpresa) {
            console.log("Errou. O número escolhido é menor")
        }
    }
    console.log("Acertou!")
}


brincadeira(15)


//2- 
let numeroAleatorio = Math.floor(Math.random() * 100) + 1
console.log(numeroAleatorio)
let tentativas = 1
function brincadeiraDois(numeroSurpresa) {
    let numeroDois = Number(prompt("Escolha um número"))
    console.log("Vamos jogar!")
    for (numeroDois; numeroDois !== numeroSurpresa; numeroDois = Number(prompt("Escolha outro número"))) {
        tentativas++
        if (numeroDois > numeroSurpresa) {
            console.log("Errou. O número escolhido é maior")
        } else if (numeroDois < numeroSurpresa) {
            console.log("Errou. O número escolhido é menor")
        }
    }
    console.log("Acertou!")
    console.log(`O número de tentativas foi ${tentativas}`)
}

brincadeiraDois(numeroAleatorio)   
