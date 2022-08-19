
export type Extrato = {
    valor: number,
    data: string,
    descricao: string
}

export type CreateConta = {
    nome: string,
    CPF: string,
    dataDeNascimento: string,
    saldo: number,
    extrato: Extrato[]  
}



export const bancoDeContas: CreateConta[] = [
    {
        nome:"Leonardo",
        CPF:"111.222.111-22",
        dataDeNascimento:"14/10/2002",
        saldo: 0,
        extrato: [
            {
                valor: 100,
                data: "10/08/2022",
                descricao: "camiseta"
            }
        ]
    },
    {
        nome:"Rafael",
        CPF:"222.222.222-22",
        dataDeNascimento:"05/08/2000",
        saldo: 1000,
        extrato: [
            {
                valor: 500,
                data: "18/05/2022",
                descricao: "tenis"
            },
            {
                valor: 20,
                data: "03/03/2022",
                descricao: "meia"
            }
        ]
    }
] 