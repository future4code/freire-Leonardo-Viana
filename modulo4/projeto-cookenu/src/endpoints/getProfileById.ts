import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";

export async function getProfileById(req: Request, res: Response) {
    try {
        const token = req.headers.authorization
        const id = req.params.id

        if(!token) {
            res.status(422).send("Esse endpoint exige uma autorização a ser passada nos headers")
        }
        if(!id) {
            res.status(422).send("Preencha a id do usuário desejado")
        }

        const userDatabase = new UserDatabase()
        const findUser = await userDatabase.findUserById(id)


        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        res.status(200).send({
            id: findUser.getId(),
            name: findUser.getName(),
            email: findUser.getEmail()
        })


    } catch (error) {
        res.status(400).send(error.message)
    }

}