// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO 
/* 
1- 
10
10, 5 

2-
10, 10, 10 

3-
O programa usa as horas trabalhadas do dia e o valor recebido para descobrir o salário por hora.
As variaveis podem ser substítuidas por:
p - horasTrabalhadas 
t - salarioDiario 
 */

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// 1-
let nome  
let idade  

console.log(typeof nome)
console.log(typeof idade)

// foi escrito "undefine" pelo fato de nao ter atribuição de valor na varaiavel 
nome = prompt("Qual seu nome?")
idade = prompt("Qual sua idade?") 

console.log(typeof nome)
console.log(typeof idade)

console.log("Olá", nome, ", você tem", idade, "anos")

//2- 
let esportes = "SIM" 
let cachorro = "SIM" 
let estudante = "SIM" 
console.log("Você pratica esportes? -", esportes)
console.log("Você tem cachorros? -", cachorro) 
console.log("Você é um estudante? -", estudante)

//3-
let a = 10
let b = 25

let c = a 
a = b
b = c
console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

// DESAFIO 
let xtexto = prompt("Escolha um número x")
let ytexto = prompt("Escolha um número y")

//1-
let xnumero = Number(xtexto)
let ynumero = Number(ytexto)
console.log(xnumero+ynumero)

//2- 
console.log(xnumero*ynumero)

