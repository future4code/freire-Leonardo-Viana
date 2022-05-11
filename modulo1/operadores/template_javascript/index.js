/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO 

1-
Primeiramente assume valores as variáveis com const onde não poderão ser alteradas.
bool1 - verdadeira 
bool2 - falsa
bool3 - verdadeira ("contrário"/negação do bool2)

Logo após criando a variavel "resultado" com let vamos ter as seguintes repostas das operações: 
a) console.log("a. ", resultado)
a. false

b) console.log("b. ", resultado)
b. false

c) console.log("c. ", resultado)
c. true

d) console.log("d. ", resultado)
d. boolean 


2-
O problema está na parte em que as duas variaveis ficaram como string no final, então quando forem impressas no console não serão somadas como números e sim como um texto, ficando no final "um número ao lado do outro".


3-
Deveria ser feita a cração de mais duas variaveis com a conversão de string para number, ficando assim:
let nprimeiroNumero = Number(primeiroNumero)
let nsegundoNumero = Number(segundoNumero)

const soma = nprimeiroNumero + nsegundoNumero

console.log(soma)
*/

//EXERCÍCIOS DE ESCRITA DE CÓDIGO 

// 1-
let idade = prompt("Qual a sua idade?")
let idadeMamigo = prompt("Qual a idade do seu melhor amigo?")
let resposta = idade>idadeMamigo
let diferenca = idade-idadeMamigo

console.log("Sua idade é maior do que a do seu melhor amigo?", resposta)
console.log("A diferença de idade é ", diferenca)


// 2-
let numerop = prompt("Insira um número par")

console.log(numerop%2)
// Inserindo um número par o resto sempre será 0 e colocando algum ímpar o resto sempre será 1.


// 3- 
let idadeuser = prompt("Qual sua idade?")
let idadedias = idadeuser*365 

console.log("Sua idade em meses é ", idadeuser*12, "meses")
console.log("sua idade em dias é ", idadedias, "dias")
console.log("Sua idade em horas é ", idadedias*24, "horas")


// 4-
let tprinumero = prompt("Digite um número")
let tsegnumero = prompt("Digite outro número")
let prinumero = Number(tprinumero)
let segnumero = Number(tsegnumero)
let maior = prinumero>segnumero
let igual = prinumero===segnumero
let pridivisivel = (prinumero%segnumero===0)
let segdivisivel = (segnumero%prinumero===0) 

console.log("O primeiro numero é maior que o segundo? ", maior)
console.log("O primeiro numero é igual ao segundo? ", igual)
console.log("O primeiro numero é divisível pelo segundo? ", pridivisivel)
console.log("O segundo numero é divísivel pelo priemiro? ", segdivisivel) 


//DESAFIO
// 1- a)
let grausFahrenheit = 77
let kelvin = (grausFahrenheit - 32)*(5/9) + 273.15
console.log(kelvin, "K")

//b)
let grausCelsius = 80
grausFahrenheit = grausCelsius*(9/5) + 32
console.log(grausFahrenheit, "F°")

//c)
grausCelsius = 30
grausFahrenheit = grausCelsius*(9/5) + 32
kelvin = (grausFahrenheit - 32)*(5/9) + 273.15

console.log(grausFahrenheit, "F°")
console.log(kelvin, "K")

//d)
grausCelsius = prompt("Insira quantos C°")
grausFahrenheit = grausCelsius*(9/5) + 32
kelvin = (grausFahrenheit - 32)*(5/9) + 273.15

console.log(grausFahrenheit, "F°")
console.log(kelvin, "K")


// 2- a)
let quilowattHora = 0.05

console.log("A residencia que consome 280 quilowatt-hora deverá pagar", quilowattHora*280, "R$")

//b)
let desconto = 0.85

console.log("A residencia que consome 280 quilowatt-hora deverá pagar", quilowattHora*280*desconto, "R$")


// 3- a)
let lb = 20
let lbxkg = lb*0.45359237

console.log("20lb equivalem a", lbxkg, "kg")

// b)
let oz = 10.5
let ozxkg = oz/35.274

console.log("10.5oz equivalem a", ozxkg, "kg")

// c)
let mi = 100
let mixm = mi/0.00062137

console.log("100mi equivalem a", mixm, "m")

// d)
let ft = 50
let ftxm = ft/3.2808

console.log("50ft equivalem a", ftxm, "m")

// e)
let gal = 103.56
let galxl = gal/0.26417

console.log("103.56gal equivalem a", galxl, "L")

// f)
let xic = 450
let xicxl = xic*0.24

console.log("450xic equivalem a", xicxl, "L")


// g)
xic = prompt("Digite quantas xícaras deseja convertem para litros")
xicxl = xic*0.24

console.log(xic,"10xic equivalem a", xicxl, "L")





