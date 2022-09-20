import { Request, Response } from "express"
import app from "../app"
import { connection } from "../data/connection"
import { getAllProducts } from "../endpoints/getAllProducts"
import axios from 'axios'
import { Product } from "../types/typeProduct"

export const getProductById = async (product_id: string, quantity: number): Promise<any> => {
    try {
        const result = await connection.raw(`
        SELECT price FROM labecommerce_products WHERE product_id = ${product_id}
        `)
        const allProducts = await result

        return allProducts
       
    } catch (error:any) {
        return undefined        
    }    
}