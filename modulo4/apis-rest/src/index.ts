import express from 'express'
import cors from 'cors'
import { users, User, UserType } from './data'
import e from 'express'


const app = express()

app.use(express.json())
app.use(cors())


let usuario: User[] = users


app.get("/users", (req, res) => {
    // método get e entidade "users"
    // type passado através do QueryParams por ser uma pesquisa dentro no array, foram adicionadas condições para fazer a validação da informação passada  
    try {
        const type: any = req.query.type
        const search: any = req.query.search
        if (!usuario) {
            throw new Error("Lista de usuários vazia")
        }
        if (type !== undefined && type !== UserType.ADMIN && type !== UserType.NORMAL) {
            throw new Error("Verifique se os valores passado ao type são válidos")
        }

        if (search !== undefined && type !== undefined) {
            const pesquisa: User[] = usuario.filter((a) => {
                return (a.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
            })
            if (pesquisa.length > 0) {
                res.send(pesquisa.map((a) => {
                    if (a.type == type) {
                        return a
                    }
                }))
            } else {
                res.send("Nenhum usuário encontrado")
            }
        } else if (search !== undefined) {
            const pesquisa: User[] = usuario.filter((a) => {
                return (a.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
            })
            if (pesquisa.length > 0) {
                res.send(pesquisa)
            } else {
                res.send("Nenhum usuário encontrado")
            }
        } else if (type !== undefined) {
            res.send(usuario.map((a) => {
                if (a.type == type) {
                    return a
                }
            }))
        } else {
            res.send(usuario)
        }


    } catch (error: any) {
        switch (error.message) {
            case "Lista de usuários vazia":
                res.send(error.message)
                break

            case "Verifique se os valores passado ao type são válidos":
                res.send(error.message)
                break

            default:
                res.status(500).send("Erro inesperado consulte as dev jr")
                break

        }
    }
})


app.post("/users/add", (req, res) => {
    // o put faz o mesmo efeito porém deve ser ultilizado para atualizar informações e não criar um novo.
    try {
        const name: string = req.body.name
        const email: string = req.body.email
        const type: any = req.body.type
        const age: number = req.body.age

        if (name == undefined || email == undefined || type == undefined || age == undefined) {
            throw new Error("Verifique se todas as informações necessárias estão preenchidas")
        }
        if (typeof (name) !== 'string' || typeof (email) !== 'string' ||  typeof (age) !== 'number' || (type !== UserType.ADMIN && type !== UserType.NORMAL)) {
            throw new Error("Verfique o formato das informações passadas")
        }

        const newUser: User = {
            id: usuario[usuario.length-1].id + 1,
            name: name,
            email: email,
            type: type,
            age: age
        }

        usuario.push(newUser)
        res.send(usuario)

    } catch (error: any) {
        switch (error.message) {
            case "Verifique se todas as informações necessárias estão preenchidas":
                res.send(error.message)
                break

            case "Verfique o formato das informações passadas":
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