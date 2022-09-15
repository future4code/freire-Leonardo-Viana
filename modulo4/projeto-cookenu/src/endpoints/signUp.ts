import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDataBase";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/idGenerator";

export async function signUp(req: Request, res: Response) {
    try {
        const { name, email, password } = req.body

        if(!name || !email || !password) {
            res.status(422).send("Insira corretamente as informações")
        }

        const userDatabase = new UserDatabase()
        const findUser = await userDatabase.findUserByEmail(email)

        if(findUser) {
            res.status(409).send("Esse email ja está cadastrado")
        }

        const idInstance = new IdGenerator()
        const id = idInstance.generate()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const user = new User(id, name, email, hashPassword)
        await userDatabase.createUser(user)

        const authenticator = new Authenticator()
        const token = authenticator.generate({id, name, email})

        res.status(200).send({message: "Usuário criado com sucesso", access_token: token})
        
    } catch (error: any) {
        res.status(400).send(error.message)        
    }
}