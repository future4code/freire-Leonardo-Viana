/* EXERCÍCIOS DE INTERPRETAÇÃO DE TEXTO 
1-
a) console.log('a. ', array)
a. undefined

b) console.log('b.', array)
b. null

c) console.log('c.', array.length)
c. 11

d) console.log('d.', array[i])
d. 3

e) console.log('e.', array)
e. [3,19,5,6,7,8,9,10,11,12,13]

f) console.log('f.', valor')
f. 9 

2-
console.log(frase.toUpperCase().replaceAll("A","I"), frase.length)
SUBI NUM ONIBUS EM MIRROCOS 27
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO 
//1-
let nomeDoUsuario = prompt("Qual seu nome?")
let emailDoUsuario = prompt("Qual seu email?")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}`)


//2-
let comidas = ["lasanha","pizza","bife","frango","ovo"]

//a)
console.log(comidas)

//b)
console.log(`Essas são minhas comidas preferidas:
${comidas[0]}
${comidas[1]}
${comidas[2]}
${comidas[3]}
${comidas[4]}`)

//c)
let comidaPreferida = prompt("Qual sua comida preferida?")
comidas.splice(1, 0, comidaPreferida)
comidas.splice(2,1)

console.log(comidas)


//3-
//a)
let array = []
let listaDeTarefas = array

//b)
let primeiraTarefa = prompt("Digita uma tarefa que você precisa fazer (índice = 0)")
let segundaTarefa = prompt("Digita outra tarefa que você precisa fazer (índice = 1)")
let terceiraTarefa = prompt("Digita a ultima tarefa que você precisa fazer (índice = 2)")

array.push(primeiraTarefa)
array.push(segundaTarefa)
array.push(terceiraTarefa)

//c)
console.log(array)

//d)
let indice = prompt("Digite o indice da sua tarefa realizada")

//e)
array.splice(indice,1)

//f)
console.log(array)


// DESAFIO
//1-
let frase = prompt("Escreva uma frase")
let frasePorPalavra = frase.split(" ")

console.log(frasePorPalavra)


//2-
let arrayProposto = ["banana","morango", "abacaxi", "laranja", "ameixa"]
console.log(arrayProposto.indexOf("abacaxi"), arrayProposto.length)









