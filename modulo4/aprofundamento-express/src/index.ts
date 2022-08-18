import express from 'express'
import cors from 'cors'
import { afazeres } from './afazeres'

type Afazer = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const afazer: Afazer[] = afazeres


const app = express()
app.use(express.json())
app.use(cors())

app.get("/ping", (req, res) => {
    res.send("pong")    
})

app.get("/completed", (req, res) => {
    res.send(afazer.map((a) => {
        if (a.completed == true) {
            return a
        }
    }))
})

app.post("/add/:userId", (req, res) => {
    const userId: number = Number(req.params.userId)
    const id: number = Number(req.headers.id)
    const title: string = req.body.title
    const completed: boolean = req.body.completed

    const newAfazer: Afazer = {
        userId: userId,
        id: id,
        title: title,
        completed: completed
    }

    afazer.push(newAfazer)
    
    if(typeof(userId) == 'number' && typeof(id) == 'number' && typeof(title) == 'string' && typeof(completed) == 'boolean') {
        res.send(afazer)
    } else {
        res.send("Erro")
    } 

})


app.put("/edit/:userId", (req, res) => {
    const userId: number = Number(req.params.userId)
    const id: number = Number(req.headers.id)
    const completed: boolean = req.body.completed

    afazer.map((a) => {
        if (userId == a.userId && id == a.id) {
            return res.send({
                ...a,
                completed: completed
            })
        }
    })
})


app.delete("/del/:userId", (req, res) => {
    const userId: number = Number(req.params.userId)
    const id: number = Number(req.headers.id)

    afazer.map((a, i, t) => {
        if( userId == a.userId && id == a.id ) {
            t.splice(i, 1)
            return res.send(t)
        }
        
    })
})


app.get("/afazeres/:userId", (req, res) => {
    const userId: number = Number(req.params.userId)
    

   res.send(afazer.map((a) => {
        if (userId == a.userId) {
            return a
        }
    })) 
})


app.listen(3003, () => {
    console.log("Server rodando na porta 3003")
    

})