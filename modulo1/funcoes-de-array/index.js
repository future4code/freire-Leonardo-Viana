/* EXECÍCIOS DE INTERPRETAÇÃO DE CÓDIGO 
1-
a) Vai ser escrito o array inteiro em cada índice do próprio array.


2-
a) ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]


3-
a) ["Mandi", "Laura"]
*/


//1-
const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

//a)
const nomePets = (a) => {
    return a.nome
}

const nomeDoguinhos = pets.map(nomePets)
console.log(nomeDoguinhos)

//b)
const petSalsicha = pets.filter((a, i) => {
    if (pets[i].raca == "Salsicha") {
        return a
    }
})
console.log(petSalsicha)

//c)
const petPoodle = pets.filter((a, i) => {
    if (pets[i].raca == "Poodle") {
        return a
    }
})

const descontoPoodle = (a) => {
    return (`Você ganhou um cupom de desconto de 10% para tosar o ${a.nome}`)
}

const mensagemPetPoodle = petPoodle.map((descontoPoodle))
console.log(mensagemPetPoodle)


//2-
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a)
const nomes = (a) => {
    return a.nome
}

const somenteNome = produtos.map(nomes)
console.log(somenteNome)

//b)
const cincoDesconto = (a) => {
    a.preco = a.preco * 0.95
    return a
}

const descontado = produtos.map(cincoDesconto)
console.log(descontado)

//c)
const somenteBebidas = produtos.filter((a) => {
    if (a.categoria == "Bebidas") {
        return a
    }
})
console.log(somenteBebidas)

//d)
const ype = produtos.filter((a) => {
    if (a.nome.includes("Ypê")) {
        return a
    }
})
console.log(ype)

//e)
const vendas = (a) => {
    return `Compre ${a.nome} por ${a.preco}`
}

const frasePronta = ype.map(vendas)
console.log(frasePronta)


// DESAFIOS 
//1-
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

//a)
const nomesPokemons = (a) => {
    return a.nome
}

const pokemon = pokemons.map(nomesPokemons)
console.log(pokemon.sort())

//b)
const tipoPokemons = (a) => {
    return a.tipo
}

const somenteTipo = pokemons.map(tipoPokemons)

const repeticao = [... new Set(somenteTipo)]
console.log(repeticao)   