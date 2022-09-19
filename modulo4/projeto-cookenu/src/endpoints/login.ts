import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";


export async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body

        if(!email || !password) {
            res.status(422).send("Insira corretamente as informações")
        }

        const userDatabase = new UserDatabase()
        const findUser = await userDatabase.findUserByEmail(email)

        if(!findUser) {
            res.status(409).send("Esse email não está cadastrado")
        }       

        const hashManager = new HashManager()
        const passwordIsCorrect = await hashManager.compare(password, findUser.getPassword())

        const authenticator = new Authenticator()
        const token = authenticator.generate({id: findUser.getId(), name: findUser.getName(), email: findUser.getEmail()})
        
        if(!passwordIsCorrect) {
            res.status(401).send("Email ou senha incorretos")
        } else {
            res.status(200).send({message: "Usuário logado com sucesso", access_token: token})
        } 

        

        
        
    } catch (error: any) {
        res.status(400).send(error.message)        
    }
}