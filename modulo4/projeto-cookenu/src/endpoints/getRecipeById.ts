import { Request, Response } from "express";
import { RecipesDatabase } from "../data/RecipesDatabase";
import { UserDatabase } from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";

export async function getRecipeById(req: Request, res: Response) {
    try {
        const token = req.headers.authorization
        const id = req.params.id

        if(!token) {
            res.status(422).send("Esse endpoint exige uma autorização a ser passada nos headers")
        }
        if(!id) {
            res.status(422).send("Preencha a id da receita desejada")
        }

        const recipeDatabase = new RecipesDatabase()
        const findRecipe = await recipeDatabase.findRecipeById(id)


        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        res.status(200).send({
            id: findRecipe.getId(),
            title: findRecipe.getTitle(),
            description: findRecipe.getDescription(),
            createdAt: findRecipe.getcreatedAt()
        })


    } catch (error) {
        res.status(400).send(error.message)
    }

}