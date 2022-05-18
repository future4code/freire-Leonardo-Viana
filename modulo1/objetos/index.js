// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO 
/* 1-
console.log(filme.elenco[0])
Matheus Nachtergaele

console.log(filme.elenco[filme.elenco.length -1])
Virginia Cavendish 

console.log(filme.transmissoesHoje[2])
canal: "Globo"
horario: "14h"


2-
a)
console.log(cachorro)
nome: "Juca"
idade: 3
raca: "SRD"

console.log(gato)
nome: "Juba"
idade: 3
raca: SRD

console.log(tartaruga)
nome: "Jubo"
idade: 3
raca: SRD

b)
Os três pontos antes tem a função de copiar as informações do objeto criado para dentro de outro objeto.


3-
a)
console.log(minhaFuncao(pessoa, "backender"))
false
console.log(minhaFuncao(pessoa,"altura"))
undefined

b) Os valores imprimidos do console vem dos que foram declarados dentro do objeto e com "altura" não foi, fica como undefined.

*/

//EXERCÍCIOS DE ESCRITA DE CÓDIGO 
//1-
//a)

const pessoa = {
    nome: "Leonardo",
    apelidos: ["Leo", " Japones", "Boca"]
}

function imprimi(objeto) {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos}`)
}

imprimi(pessoa)

const novaPessoa = {
    ...pessoa,
    apelidos: ["Japa"," Mandi", " Mandniha"]
}

imprimi(novaPessoa)


//2-
//b)

const umcidadao = {
    nome: "Leonardo",
    idade: 20,
    profissao: "Estudante"
}

const novoCidadao = {
    nome: "Gaules",
    idade: 38,
    profissao: "Streamer"
}

function dados(cidadao) {
    return [cidadao.nome, cidadao.nome.length, cidadao.idade, cidadao.profissao, cidadao.profissao.length]
}

console.log(dados(umcidadao))
console.log(dados(novoCidadao))


//3-
//a)
let carrinho = []

let frutaum = {
    nome: "Abacaxi",
    disponibilidade: true
}
let frutadois = {
    nome: "Morango",
    disponibilidade: true
}
let frutatres = {
    nome: "Caju",
    disponibilidade: false
}

function funcao(fruta) {
    return carrinho.push(fruta.nome)
}
funcao(frutadois)
funcao(frutatres)
funcao(frutaum)

console.log(carrinho)


// DESAFIOS
//1-
function perguntas() {
    let nome = prompt("Qual seu nome?")
    let idade = prompt("Qual sua idade?")
    let profissao = prompt("Qual a sua profissão?")

    return [nome, idade, profissao]
}

novoNome = perguntas()[0]
novaIdade = perguntas()[1]
novaProfissao = perguntas()[2]

const objeto = {
    nome: novoNome,
    idade: novaIdade,
    profissao: novaProfissao
}

console.log(objeto)
console.log(typeof(objeto))

//2-
function anoDeLancamento(primeirofilme, segundofilme) {
    let filmeum = {
        nome: "Quebrando Regras",
        lancamento: 2008
    }
    let filmedois = {
        nome: "Forrest Gump",
        lancamento: 1994
    }

    return `O primeiro filme foi lançado antes do segundo? ${filmeum.lancamento < filmedois.lancamento}
    O primeiro filme foi lançado no mesmo ano do segundo? ${filmeum.lancamento === filmedois.lancamento}`
    
}

console.log(anoDeLancamento("quebrandoRegras", "forrestGump"))


//3-
function estoque(parametro) {
    let outroparametro = {
        ...parametro,
        disponibilidade: !parametro.disponibilidade

    }
    return outroparametro
    

}

console.log(estoque(frutadois))