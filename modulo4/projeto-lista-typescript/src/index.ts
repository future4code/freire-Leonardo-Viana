// 1-

function nome(nome: string): string {
    return nome
}

function dataNascimento(data: string): string[] {
    return data.split("/")
}

function apresentacao(): string {
    return `Olá me chamo ${nome("Leonardo")}, nasci no dia ${dataNascimento("14/10/2002")[0]} do mês de ${dataNascimento("14/10/2002")[1]} do ano de ${dataNascimento("14/10/2002")[2]} `
}

console.log(apresentacao())


// 2-
function tipo(parametro: any): void {
    console.log(typeof (parametro))
}

tipo("alou")
tipo(5)
tipo([1, 2])



// 3-
enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

type Filme = {
    nome: string,
    anoLancamento: number,
    genero: GENERO
}

type Pontuacao = {
    pontos: number
}

function informacao(nome: string, anoLancamento: number, genero: GENERO, pontos?: number): Filme | Pontuacao {
    return {
        nome: nome,
        anoLancamento: anoLancamento,
        genero: genero,
        pontos: pontos

    }
}

console.log(informacao("Duna", 2021, GENERO.ACAO, 74))



// 4-
enum SETORES {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}

type Pessoas = {
    nome: string,
    salário: number,
    setor: SETORES,
    presencial: boolean,
}

const pessoas: Pessoas[] = [
    { nome: "Marcos", salário: 2500, setor: SETORES.MARKETING, presencial: true },
    { nome: "Maria", salário: 1500, setor: SETORES.VENDAS, presencial: false },
    { nome: "Salete", salário: 2200, setor: SETORES.FINANCEIRO, presencial: true },
    { nome: "João", salário: 2800, setor: SETORES.MARKETING, presencial: false },
    { nome: "Josué", salário: 5500, setor: SETORES.FINANCEIRO, presencial: true },
    { nome: "Natalia", salário: 4700, setor: SETORES.VENDAS, presencial: true },
    { nome: "Paola", salário: 3500, setor: SETORES.MARKETING, presencial: true }
]

function filtro(pessoa: Pessoas[]): any {
    return pessoa.map((a) => {
        if (a.setor == SETORES.MARKETING && a.presencial == true) {
            return a
        }
    })



}

console.log(filtro(pessoas))



// 5-
type User = {
    name: string,
    email: string,
    role: string
}

const users: User[] =  [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
]

function emails (users: User[]){
    return users.map((a) => {
        if(a.role == "admin") {
            return a.email
        }
    }) 
}

console.log(emails(users))



// 6- 
type Cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const clientes: Cliente[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function saldoNegativo (clientes: Cliente[]) {
    return clientes.map((a) => {
        let divida = 0 
        for (let i = 0; i < a.debitos.length; i++) {
            divida = divida + a.debitos[i]
        }
        if(a.saldoTotal-divida < 0) {
            return {
                ...a,
                saldoTotal: a.saldoTotal-divida,
                debitos: []
            }
        }
    })
}

console.log(saldoNegativo(clientes))



// 7-
const ajustaPreco = (preco :number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}

type Produto = {
    nome: string,
    quantidade: number,
    valorUnitario: number
}

const estoque: Produto[] = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

function conversao(estoque: Produto[]) {
    return estoque.map((a) => {
        return {
            ...a,
            valorUnitario: ajustaPreco(a.valorUnitario)
        }
    })
} 

console.log(conversao(estoque))



// 8-
function renovacao (dataNascimento: string, dataEmissao: string): boolean {
    let nascimento: string[] = dataNascimento.split("/")
    let emissao: string[] = dataEmissao.split("/")
    let idade = 2022 - Number(nascimento[2])

    if(idade <= 20 && 2022 - Number(emissao[2]) < 5) {
        return false
    } else if (idade > 20 && idade <= 50 && 2022 - Number(emissao[2]) < 10) {
        return false
    } else if (idade > 50 && 2022 - Number(emissao[2]) < 15) {
        return false
    } else {
        return true 
    }    
}
console.log(renovacao("14/10/1900", "14/10/2010"))



// 9- 
function anagrama(palavra:string):number {
    let fatorial = palavra.length
    let quantidade = fatorial
    for (let i = 1; i < fatorial; i++) {
        quantidade = quantidade * i
    }
    if (fatorial == 0 || fatorial == 1 ) {
        return 1
    } else {
        return quantidade
    }
}
console.log(anagrama("mesa"))



// 10-



// 11-



