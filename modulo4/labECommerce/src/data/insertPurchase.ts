import { connection } from "./connection";

export default async function insertProduct(purchase: any) {

    const {user_id, product_id, quantity} = purchase
    const id:string = Date.now().toString()

    await connection(`labecommerce_purchases`).insert({
        id,
        user_id,
        product_id,
        quantity,
        // total_price       
    })
}