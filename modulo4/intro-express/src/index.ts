import express from 'express'
import cors from 'cors'
import { users } from './users'

const app = express()
app.use(express.json())
app.use(cors())


const name = users.map(user => {
    return user.name
})





app.get("/users", (req, res) => {
    if(req.headers.tipo == "id") {
        res.send("id")
    } else if (req.headers.tipo == "name") {
        res.send("name")
    } else if (req.headers.tipo == "phone") {
        res.send("phone")
    } else if (req.headers.tipo == "email") {
        res.send("email")
    } else if (req.headers.tipo == "website") {
        res.send("website")
    } else {
        res.send(users)
    }
})


app.post("/users", (req, res) => {


})





app.get("/", (req, res) => {
   res.send("Teste")
})






app.listen(3003, () => {
    console.log("Server rodando na porta 3003")
})


