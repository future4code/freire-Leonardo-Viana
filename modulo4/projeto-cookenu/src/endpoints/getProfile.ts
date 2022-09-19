import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";

export async function getProfile(req: Request, res: Response) {
    try {
        const token = req.headers.authorization

        if(!token) {
            res.status(422).send("Esse endpoint exige uma autorização a ser passada nos headers")
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        res.status(200).send({
            id: tokenData.id,
            name: tokenData.name,
            email: tokenData.email
        })


    } catch (error) {
        res.status(400).send(error.message)
    }

}