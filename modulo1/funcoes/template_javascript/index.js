/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO 
1-
a)
console.log(minhaFuncao(2))
10
console.log(minhaFuncao(10))
50

b)
Não iria aparecer nada no console pois dentro da função não tem nada que peça para imprimir os resultados.


2-
a)
Faz com que diferentes frases colocadas pelo prompt sejam transaformadas para todas letras minúsculas e que seja verificado se contém a palavra "cenoura".

b)
i. eu gosto de cenoura true 
ii. cenoura é bom pra vista true
iii. cenouras cresecm na terra false
*/

//EXECÍCIOS DE ESCRITA DE CÓDIGO 
//1-
//a)
function informacoes(){
    console.log(`Eu sou Leonardo, tenho 19 anos, moro em São Paulo e sou estudante.`)
} 

informacoes()

//b)
function informacoesFuncao(){
    let nome = prompt("Qual seu nome?")
    let idade = Number(prompt("Qual sua idade?"))
    let cidade = prompt("Qual cidade voce mora?")
    let profissao = prompt("Qual sua profissão?")
    let resultado = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
return resultado
}
console.log(informacoesFuncao())


//2-
//a) 
function numerosa(x,y){
    let soma = x+y
    return soma 
}

console.log(numerosa(10,5))

//b)
function numerosb(x,y){
    let maiorigual = x>=y
    return maiorigual
}

console.log(numerosb(21,21))

//c)
function numerosc(numero){
    let par = (numero%2===0)
    return par
}

console.log(numerosc(30))

//d)
function letrad(texto){
    console.log(texto.toUpperCase())
    console.log(texto.length)
}

letrad("Eu vou na padaria")


//3-
let x = Number(prompt("Escolha um numero x"))
let y = Number(prompt("Escolha um numero y"))  

function soma(x,y){   
    let resultado = x+y
    return `Soma: ${resultado}`
}

function subtracao(x,y){
    let resultado = x-y
    return `Diferença: ${resultado}`
}

function multiplicacao(x,y){
    let resultado = x*y
    return `Multiplicação: ${resultado}`
}

function divisao(x,y){
    let resultado = x/y
    return `Divisão: ${resultado}`
}

console.log(soma(x,y))
console.log(subtracao(x,y))
console.log(multiplicacao(x,y))
console.log(divisao(x,y))


//DESAFIOS 
//1-
//a)
let desafioa = (parametro) => {
    console.log(parametro)
}

desafioa("teste desafio")

//b)
let desafiob = (x,y) => {
    let soma = x+y
    console.log(soma)
}

desafioa(desafiob(5,6))


//2- 
function pitagoras(c1,c2){
    let quadradoc1 = c1*c1
    let quadradoc2 = c2*c2
    let hipotenusa = Math.sqrt(quadradoc1 + quadradoc2)
    return hipotenusa
}
 console.log(pitagoras(3,4))
 