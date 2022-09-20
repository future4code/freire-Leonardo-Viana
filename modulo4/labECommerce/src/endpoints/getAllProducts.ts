import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const order = req.query.order? `ORDER BY name ${req.query.order}`: ""
        const search = req.query.search? `"%${req.query.search}%"` : `"%%"`
        const result = await connection.raw(`
    SELECT * FROM labecommerce_products
    WHERE name LIKE ${search} ${order}
    `)   

    res.status(200).send(result[0])   
    
    } catch (error:any) {
        res.status(500).send(error.message)        
    }    
}

