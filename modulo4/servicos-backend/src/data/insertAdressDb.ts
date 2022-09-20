import { Address } from "../types/typeAddress";
import { connection } from "./connection";

export default async function insertAdressDb(address: any) {

    const {logradouro, bairro, cidade, estado, CEP, Número, Complemento} = address
    const id_user:string = Date.now().toString()

    await connection(`aula_servicos_adress`).insert({
        id_user,
        logradouro,
        bairro,
        cidade,
        estado,
        CEP,
        Número,
        Complemento
    })  

}