let text: string | number





// const leonardo: Pessoa = {
//     name: "leonardo",
//     age: 19
// }



type BirthDate = number | string | undefined

type Usuario = {
    name: string,
    birthDate: BirthDate
}

const user1: Usuario = {
    name: "user1",
    birthDate: "14/10/2002"
}

const user2: Usuario = {
    name: "user2",
    birthDate: undefined
}



type User = {
    name: string,
    age: number
}

type Account = {
    userName: string,
    password: string
}

type UserInfo = User & Account

const user3: UserInfo = {
    name: "Lua",
    age: 27,
    userName: "luaaa",
    password: "123abc"
}



enum LabeTurmas {
    HOPPER = "Hopper",
    HOOKS = "hooks",
    GEBRU = "Gebru",
    GUIMARAES = "Guima",
    JOY = "Joy"
}

const instrutor: { name: string, turma: LabeTurmas } = {
    name: "Peu",
    turma: LabeTurmas.GEBRU
}



// 1-
// a)
// const minhaString: string = 6
// O tipo 'number' não pode ser atribuído ao tipo 'string'.

//b)
let meuNumero: number | string = 8
meuNumero = "oito"

// c) e d)
type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: ArcoIris
}

enum ArcoIris {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}

const pessoa1: Pessoa = {
    nome: "leo",
    idade: 19,
    corFavorita: ArcoIris.AMARELO
}
const pessoa2: Pessoa = {
    nome: "rodolfo",
    idade: 25,
    corFavorita: ArcoIris.AZUL
}
const pessoa3: Pessoa = {
    nome: "julia",
    idade: 20,
    corFavorita: ArcoIris.VERDE
}

const pessoa4: Pessoa = {
    nome: "roberta",
    idade: 30,
    corFavorita: ArcoIris.VIOLETA
}


// 2-
function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: { maior: number, menor: number, media: number } = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    type Amostra = {
        numero: number[],
        obterEstatisticas: object
    }

    const amostraDeIdades: Amostra = {
        numero: numeros,
        obterEstatisticas: estatisticas
    }

    return amostraDeIdades
}



// 3-

type Post = {
    autor: string,
    texto: string
}

const posts: Post[] = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
]

function buscarPostsPorAutor(posts: Post[], autorInformado: string) {
    return posts.filter(
        (post) => {
            return post.autor === autorInformado
        }
    )
}

console.log(buscarPostsPorAutor(posts, "Dobby"))



//  5- 

type Consultas = {
    nome: string,
    idade: number,
    dataDaConsulta: string
}

const consulta: Consultas[] = [
    { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
    { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
]




function organizar(a: any, b: any) {
    if (a.nome < b.nome)
        return -1;
    if (a.nome > b.nome)
        return 1;
    return 0
}

console.log(consulta.sort(organizar))



// 7- 

type Produtos = {
    nome: string,
    preco: number,
    classificacao: "verao" | "inverno" | "banho" | "intimas"
}

type Desconto = {
    precoComDesconto: number
}

const produto: Produtos[] = [
    {
        nome: "biquini",
        preco: 100,
        classificacao: "banho"
    },
    {
        nome: "blusa",
        preco: 100,
        classificacao: "inverno"
    }
]

function oferta(produtos: Produtos[]) {
    return produtos.map((a) => {
        let descont
        if (a.classificacao == "verao") {
            descont = 0.95 * a.preco
        } else if (a.classificacao == "inverno") {
            descont = 0.9 * a.preco
        } else if (a.classificacao == "banho") {
            descont = 0.96 * a.preco
        } else {
            descont = 0.93 * a.preco
        }
        const novoProduto: Produtos & Desconto = {
            ...a,
            precoComDesconto: descont
        }

        return novoProduto
    })
}

console.log(oferta(produto))



// 8-

type Prato = {
    nome: string,
    custo: number,
    valorVenda: number,
    ingredientes: string[]
}

let pratos: Prato[] = [
    {
        nome: "comercial",
        custo: 10,
        valorVenda: 20,
        ingredientes: ["arroz", "feijão", "bife", "salada"]
    },
    {
        nome: "feijoada",
        custo: 15,
        valorVenda: 25,
        ingredientes: ["arroz", "feijão-preto", "costela", "linguiça", "carne seca"]
    }
]

type Venda = {
    nome: string,
    nomeCliente: string
}

let vendas: Venda[] = []

function cadastro(nome: Prato): void {
    pratos.push(nome)
}

cadastro({ nome: "bolacha", custo: 2, valorVenda: 5, ingredientes: ["bolacha"] })
cadastro({ nome: "macarrao", custo: 8, valorVenda: 15, ingredientes: ["macarrao", "molho de tomate", "carne moida"] })



function preco(nome: string) {
    return pratos.map((a) => {
        if (a.nome == nome) {
            return a.valorVenda
        }
    })
}

function vendidos(nome: Venda) {
    vendas.push(nome)
}

vendidos({ nome: "bolacha", nomeCliente: "Leo" })
vendidos({ nome: "macarrao", nomeCliente: "Julia" })

console.log(vendas)


function lucros(vendas: Venda[]) {
    return vendas.map((a) => {
        let lucro: number
        return pratos.map((b) => {
            if (a.nome == b.nome) {
                lucro = b.valorVenda - b.custo
                return lucro
            }
        })
    })
}

console.log(lucros(vendas))






