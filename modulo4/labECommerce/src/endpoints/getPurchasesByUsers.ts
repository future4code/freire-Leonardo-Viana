import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getPurchasesByUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.user_id
        const result = await connection.raw(`
    SELECT * FROM labecommerce_purchases WHERE user_id = ${id};
    `)   

    res.status(200).send(result[0])   
    
    } catch (error:any) {
        res.status(500).send(error.message)        
    }    
}
