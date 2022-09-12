import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export const getUsersByName = async (req: Request, res: Response): Promise<void> => {
    try {
        const name = `"%${req.query.name}%"`
        const type = `"%${req.params.type}%"`
        const pagina = req.query.pagina
        const users = await selectUsersByName(name, type, pagina? pagina : 1)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}




export default async function selectUsersByName(name: any, type: any, offset: any): Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio WHERE name
       LIKE ${name} AND type LIKE ${type}
       ORDER BY name DESC
       LIMIT 5 OFFSET ${5*(offset-1)}  
    `)

    return result[0]
}