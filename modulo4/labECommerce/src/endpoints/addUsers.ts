import { Request, Response } from "express"
import insertUser from "../data/insertUser"
import { User } from "../types/typeUser"

export const addUser = async (req: Request, res: Response) => {
    try {
        const {name, email, password} = req.body

        const user: User = {
            name: name,
            email: email,
            password: password
        }

        if((!name || undefined) || (!email || undefined) || (!password || undefined)) {
            throw new Error("Preencha todas as informações necessárias para criar um usuário")
        }

        await insertUser(user)
        res.status(200).send("Usuário criado com sucesso")
        
    } catch (error: any) {
        res.status(500).send(error.message)        
    }

   }