import { connection } from "./connection";

export default async function insertUser(user: any) {

    const {id, name, email, password} = user    

    await connection(`labecommerce_users`).insert({
        id,
        name,
        email,
        password       
    })
}