import express from 'express'
import cors from 'cors'
import { produtos, Produto } from './data'

const app = express()
app.use(express.json())
app.use(cors())

app.get("/test", (req, res) => {
    res.send("API funcionando")
})


let product: Produto[] = produtos


app.post("/product/add", (req, res) => {
    try {
        const { name, price } = req.body

        if (!name || !price) {
            throw new Error("Name ou price não informado")
        }
        if (typeof (name) !== 'string' || typeof (price) !== 'number') {
            throw new Error("Verifique o formato das informações passadas")
        }
        if (price <= 0) {
            throw new Error("Preço deve ser maior que 0")
        }

        const newId = product.length + 1
        const newProduct: Produto = {
            id: newId.toString(),
            name: name,
            price: price
        }

        product.push(newProduct)
        res.send(product)


    } catch (error: any) {
        switch (error.message) {
            case "Name ou price não informado":
                res.status(404).send(error.message)
                break

            case "Verifique o formato das informações passadas":
                res.status(422).send(error.message)
                break

            case "Preço deve ser maior que 0":
                res.status(422).send(error.message)

            default:
                res.status(500).send("Erro inesperado consulte as dev jr")
                break
        }

    }
})


app.get("/product/all", (req, res) => {
    try {
        if (!product) {
            throw new Error("Array vazio")
        }

        const search: string = req.body.search
        if (search !== undefined) {
            const pesquisa: object[] = product.filter((a) => {
                return (a.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
            })
            if (pesquisa.length > 0) {
                res.send(pesquisa)
            } else {
                res.send("Nenhum produto encontrado")
            }
        } else {
            res.send(product)
        }
    } catch (error: any) {
        res.send(error.message)
    }
})


app.put("/product/edit/:id", (req, res) => {
    try {
        const price = req.body.price
        const id = req.params.id
        

        if (Number(id) > product.length || Number(id) <= 0) {
            throw new Error("Verifique o id passado")
        }
        if (!price && price !== 0) {
            throw new Error("Price não recebido")
        }
        if (typeof (price) !== 'number') {
            throw new Error("Price deve ser do tipo number")
        }
        if (price <= 0) {
            throw new Error("Price deve ser maior que 0")
        }


        res.send(product.map((a) => {
            if (id == a.id) {
                return {
                    ...a,
                    price: price
                }
            } else {
                return a
            }
        }))

    } catch (error: any) {
        switch (error.message) {
            case "Verifique o id passado":
                res.status(404).send(error.message)
                break

            case "Price deve ser do tipo number":
                res.status(422).send(error.message)
                break

            case "Price deve ser maior que 0":
                res.status(422).send(error.message)
                break

            case "Price não recebido":
                res.status(404).send(error.message)
                break

            default:
                res.status(500).send("Erro inesperado consulte as dev jr")
                break
        }
    }
})


app.delete("/product/del/:id", (req, res) => {
    try {
        const id = req.params.id


        let confirm: boolean = false
        product.map((a, i, t) => {
            if (t[i].id == id) {
                confirm = true
            }
        })

        if (confirm == false) {
            throw new Error("Verifique o id passado")
        }

        res.send(product.map((a, i, t) => {
            if (a.id == id) {
                t.splice(i, 1)
                return t
            }
        }))

    } catch (error: any) {
        switch (error.message) {
            case "Verifique o id passado":
                res.status(422).send(error.message)

            default:
                res.status(500).send("Erro inesperado consulte as dev jr")
                break
        }

    }
})


app.listen(3003, () => {
    console.log("rodando 3003")
})