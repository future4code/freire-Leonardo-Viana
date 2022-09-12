import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
        const pagina = req.query.pagina
       const users = await selectAllUsers(pagina)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

 export default async function selectAllUsers(offset:any):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       LIMIT 5 OFFSET ${5*(offset-1)}
    `)
 
    return result[0]
 }