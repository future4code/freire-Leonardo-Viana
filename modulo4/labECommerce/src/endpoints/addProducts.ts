import { Request, Response } from "express"
import insertProduct from "../data/insertProduct"
import { Product } from "../types/typeProduct"

export const addProduct = async (req: Request, res: Response) => {
    try {
        const {name, price, image_url} = req.body

        const product: Product = {
            id: Date.now().toString(),
            name: name,
            price: price,
            image_url: image_url
        }

        if((!name || undefined) || (!price || undefined) || (!image_url || undefined)) {
            throw new Error("Preencha todas as informações necessárias para cadastrar um produto")
        }

        await insertProduct(product)
        res.status(200).send("Produto cadastrado com sucesso")
        
    } catch (error: any) {
        res.status(500).send(error.message)        
    }

   }