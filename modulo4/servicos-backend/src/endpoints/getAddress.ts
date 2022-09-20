import axios from "axios"
import { Request, Response } from "express"


export const getAddress = async (req: Request, res: Response) => {
    try {
        const cep = req.params.cep

        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
       
        res.send({
            logradouro: result.data.logradouro,
            bairro: result.data.bairro,
            cidade: result.data.localidade,
            estado: result.data.uf
        })

    } catch (error: any) {
        res.status(500).send(error.message)        
    }   
}