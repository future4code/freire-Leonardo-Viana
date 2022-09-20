import { Request, Response } from "express"
import insertProduct from "../data/insertProduct"
import { Product } from "../types/typeProduct"
import { Purchase } from "../types/typePurchase"

export const addProduct = async (req: Request, res: Response) => {
    try {
        const {user_id, product_id, quantity} = req.body

        const purchase: Purchase = {
            user_id: user_id,
            product_id: product_id,
            quantity: quantity
        }

        if((!user_id || undefined) || (!product_id || undefined) || (!quantity || undefined)) {
            throw new Error("Preencha todas as informações necessárias para cadastrar uma compra")
        }

        // await insertProduct(product)
        res.status(200).send("Produto cadastrado com sucesso")
        
    } catch (error: any) {
        res.status(500).send(error.message)        
    }

   }