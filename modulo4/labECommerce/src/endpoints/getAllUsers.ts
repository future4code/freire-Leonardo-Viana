import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const allUsers = await connection.raw(`
    SELECT * FROM labecommerce_users;
    `)   

    res.status(200).send(allUsers[0])   
    
    } catch (error:any) {
        res.status(500).send(error.message)        
    }    
}
