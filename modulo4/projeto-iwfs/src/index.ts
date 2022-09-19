import express, { application } from 'express'
import cors from 'cors'
import { bancoDeContas, CreateConta, Extrato } from './data'

const app = express()

app.use(express.json())
app.use(cors())

let contas: CreateConta[] = bancoDeContas



app.post("/bank/users/create-account", (req, res) => {
    try {
        const { nome, CPF, dataDeNascimento } = req.body

        if (nome == undefined || CPF == undefined || dataDeNascimento == undefined) {
            throw new Error("Verifique se todas as informações estão preenchidas")
        }
        const anoNascimento = Number(dataDeNascimento.split("/")[2])
        if (2022 - anoNascimento < 18) {
            throw new Error("Idade mínima de 18 anos para criar conta")
        }

        const cpfValido: any = contas.map((a): void | boolean => {
            let condition: boolean = false
            if (a.CPF == CPF) {
                condition = true
                return condition
            }
        })

        if (cpfValido.includes(true)) {
            throw new Error("Esse CPF ja está associado em outra conta")
        }


        const newAccount: CreateConta = {
            nome: nome,
            CPF: CPF,
            dataDeNascimento: dataDeNascimento,
            saldo: 0,
            extrato: []
        }

        contas.push(newAccount)

        res.send(contas)

    } catch (error: any) {
        switch (error.message) {
            case "Verifique se todas as informações estão preenchidas":
                res.send(error.message)
                break

            case "Idade mínima de 18 anos para criar conta":
                res.send(error.message)
                break

            case "Esse CPF ja está associado em outra conta":
                res.send(error.message)
                break

            default:
                res.status(500).send("Erro inesperado consulte as dev jr")
                break
        }
    }
})


app.get("/bank/users", (req, res) => {
    try {
        if (contas.length < 1) {
            throw new Error("Não existe contas cadastradas no banco")
        }

        res.send(contas)

    } catch (error: any) {
        switch (error.message) {
            case "Não existe contas cadastradas no banco":
                res.send(error.message)
                break

            default:
                res.status(500).send("Erro inesperado consulte as dev jr")
                break
        }

    }
})



app.get("/bank/users/saldo", (req, res) => {
    try {
        const CPF: any = req.query.CPF
        let saldo: number = 0
        let condition: boolean = false

        const cpfValido = contas.map((a) => {
            if (a.CPF == CPF) {
                condition = true
                return condition
            }
        })

        if (!cpfValido.includes(true)) {
            throw new Error("CPF inválido")
        }
        if (CPF == undefined) {
            throw new Error("Preencha o CPF para continuar")
        }

        res.send(contas.map((a, i) => {
            if (CPF == a.CPF) {
                saldo = contas[i].saldo
                return saldo
            }
        }))
    } catch (error: any) {
        switch (error.message) {
            case "CPF inválido":
                res.send(error.message)
                break

            case "Preencha o CPF para continuar":
                res.send(error.message)
                break

            default:
                res.status(500).send("Erro inesperado consulte as dev jr")
                break

        }
    }
})


app.put("/bank/users/saldo/edit", (req, res) => {
    try {
        const { nome, CPF } = req.query
        const valor: number = req.body.valor
        let validacao = false

        if (nome == undefined || CPF == undefined || valor == undefined) {
            throw new Error("As informações necessárias não foram preeenchidas")
        }

        const nomeCPF = contas.map((a) => {
            if (a.CPF == CPF && a.nome == nome) {
                validacao = true
                return validacao
            }
        })

        if (!nomeCPF.includes(true)) {
            throw new Error("Verifique se o nome e o CPF são válidos")
        }

        res.send(
            contas.map((a) => {
                if (a.CPF == CPF && a.nome == nome) {
                    let deposito: any = {
                        valor: valor,
                        data: new Date().toLocaleDateString(),
                        descricao: "Depósito de dinheiro"
                    }
                    a.saldo = a.saldo + valor
                    a.extrato = [...a.extrato, deposito]
                    return a
                }
            })
        )

    } catch (error: any) {
        switch (error.message) {
            case "As informações necessárias não foram preeenchidas":
                res.send(error.message)
                break

            case "Verifique se o nome e o CPF são válidos":
                res.send(error.message)
                break

            default:
                res.status(500).send("Erro inesperado consulte as dev jr")
                break
        }

    }
})


app.post("/bank/users/pay", (req, res) => {
    try {
        const { dataVencimento, descricao, valor } = req.body
        const CPF = req.query.CPF
        let condition: boolean = false

        const cpfValido = contas.map((a) => {
            if (a.CPF == CPF) {
                condition = true
                return condition
            }
        })
        if (descricao == undefined || valor == undefined || CPF == undefined) {
            throw new Error("Verifique se todas as informações estão preenchidas")
        }

        if (!cpfValido.includes(true)) {
            throw new Error("CPF inválido")
        }

        if (dataVencimento < new Date().toLocaleDateString()) {
            throw new Error("Não é possivel pagar conta com o prazo de vencimento ultrapassado")
        }
        contas.map((a, i) => {
            if (a.CPF == CPF) {
                if (a.saldo < valor) {
                    throw new Error("Saldo insuficiente")
                }
            }
        })

        res.send(contas.map((a) => {
            let conta = {
                valor: valor,
                data: dataVencimento ? dataVencimento : new Date().toLocaleDateString(),
                descricao: descricao
            }
            if (a.CPF == CPF) {
                a.extrato = [...a.extrato, conta]
                a.saldo = a.saldo - valor
                return a
            }
        }))

    } catch (error: any) {
        switch (error.message) {
            case "Verifique se todas as informações estão preenchidas":
                res.send(error.message)
                break

            case "Não é possivel pagar conta com o prazo de vencimento ultrapassado":
                res.send(error.message)
                break

            case "Saldo insuficiente":
                res.send(error.message)
                break

            case "CPF inválido":
                res.send(error.message)
                break

            default:
                res.status(500).send("Erro inesperado consulte as dev jr")
                break

        }
    }
})


app.post("/bank/users/transfer", (req, res) => {
    try {
        const { nome, CPF, nomeDest, CPFdest, valor } = req.body

        if (nome == undefined || CPF == undefined || nomeDest == undefined || CPFdest == undefined || valor == undefined) {
            throw new Error("Verifique se todas as informações estão preenchidas")
        }

        const transEnviada: Extrato = {
            valor: valor,
            data: new Date().toLocaleDateString(),
            descricao: "TED enviada"
        }

        const transRecebida: Extrato = {
            valor: valor,
            data: new Date().toLocaleDateString(),
            descricao: "TED recebida"
        }

        const remetente = contas.map((a) => {
            if (a.CPF == CPF && a.nome == nome) {
                a.extrato = [...a.extrato, transEnviada]
                a.saldo = a.saldo - valor
                return a
            }
        })

        const destinatario = contas.map((a) => {
            if (a.CPF == CPFdest && a.nome == nomeDest) {
                a.extrato = [...a.extrato, transRecebida]
                a.saldo = a.saldo + valor
                return a
            }
        })

        res.send({remetente, destinatario})
        

        




    } catch (error: any) {
        switch (error.message) {
            case "Verifique se todas as informações estão preenchidas":
                res.send(error.message)
                break

            default:
                res.status(500).send("Erro inesperado consulte as dev jr")
                break

        }

    }
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})