import { connection } from "./connection";

export default async function insertProduct(product: any) {

    const {name, price, image_url} = product
    const product_id:string = Date.now().toString()

    await connection(`labecommerce_products`).insert({
        product_id,
        name,
        price,
        image_url       
    })
}