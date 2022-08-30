import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export const getUsersByName = async(req: Request,res: Response): Promise<void> =>{
    try {
        const search = req.params.type
       const users = await selectUsersByName(search)
 
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

 export default async function selectUsersByName(search:any):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio WHERE type LIKE "%${search}%"
    `)
 
    return result[0]
 }