import { Request, Response } from "express"
import insertAdressDb from "../data/insertAdressDb"
import { getFullAddress } from "../services/getFullAddress"


export const insertAdress = async (req: Request, res: Response) => {
    try {        
   const cep = req.params.cep
   const address = await getFullAddress(cep)

   const newAddress = await{
    ...address,
    CEP: cep,
    Número: req.query.numero,
    Complemento: req.query.complemento ? req.query.complemento : ""
   }

   if(!address || undefined) {
    throw new Error("Cep inválido")
   }

   await insertAdressDb(newAddress)
   res.status(200).send("Endereço criado com sucesso")

    } catch (error:any) {
        res.status(500).send(error.message)
        
    }


   }


