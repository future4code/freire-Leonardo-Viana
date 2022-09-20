import express from 'express'
import app from './app'
import connection from './connection'


// 1 -
//a) A resposta que temos quando usamos o raw é de acordo com o código dentro da função, no exemplo ele retorna o Ator com a id indicada.

// b)
const actorByName = async (nome: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE nome = "${nome}"
    `)
    return result
}

// c)
const countActorsByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `)
    return result[0][0].count
}


// 3-
// a)
const newSalary = async (
    salary: number,
    id:string
) : Promise<void> => {
    await connection("Actor")
    .update({
        salary: salary
    })
    .where("id", id)
}

// b) 
const deleteActor = async (
    id: string
) : Promise<void> => {
    await connection("Actor")
    .delete()
    .where("id", id)
}

// c)
const averageSalary = async (
    gender: string
) : Promise<void> => {
    const result = await connection("Actor")
    .avg("salary as average")
    .where([gender])

    return result[0].average
}


// 3-
// a)
app.get("/actor/:id", async (req, res) => {
    try {
        const id: string = req.params.id
        const getActorById = async (id: string) : Promise<any> => {
            const result = await connection.raw(`
            SELECT * FROM Actor WHERE id = "${id}"            
            `)
            return result
        }
        const actor = await getActorById(id)

        res.status(200).send(actor)
    } catch (error: any) {
        res.status(400).send(error.message)        
    }
})

// b) 
app.get("/actor?gender=", async (req, res) => {
    try {
        const gender: any = req.query.gender
        const countActorByGender = async (gender: string) : Promise<any> => {
            const result = await connection.raw(`
            SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
            `)
            return result [0][0].count
        }
        const count = await countActorByGender(gender)

        res.status(200).send(count)        
    } catch (error: any) {
        res.status(400).send(error.message)        
    }
})



// 4-
// a) 
app.put("/actor", async (req, res) => {
    try {
        await connection("Actor")
        .update({
            salary: req.body.salary
        })
        .where({ id: req.body.id })

        res.send("Success!")
        
    } catch (error: any) {
        res.status(404).send(error.message)        
    }
})

// b) 
app.delete("/actor/:id", async (req, res) => {
    try {
        await connection("Actor")
        .delete()
        .where({ id: req.params.id })
        
        res.send("Success!")

    } catch (error:any) {
        res.status(404).send(error.message)        
    }
})

