import { connection } from "./connection";

export default async function insertProduct(product: any) {

    const {name, price, image_url} = product
    const id:string = Date.now().toString()

    await connection(`labecommerce_products`).insert({
        id,
        name,
        price,
        image_url       
    })
}