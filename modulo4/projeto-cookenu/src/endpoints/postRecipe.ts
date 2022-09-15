import { Request, Response } from "express";
import { RecipesDatabase } from "../data/RecipesDatabase";
import { UserDatabase } from "../data/UserDataBase";
import { Recipe } from "../entities/Recipe";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/idGenerator";

export async function postRecipe(req: Request, res: Response) {
    try {
        const { title, description } = req.body
        const token = req.headers.authorization

        if(!title || !description) {
            res.status(422).send("Insira corretamente as informações")
        }

        const recipeDatabase = new RecipesDatabase()
        const findRecipe = await recipeDatabase.findRecipeByTitle(title)

        if(findRecipe) {
            res.status(409).send("Essa receita ja está cadastrada")
        }

        const idInstance = new IdGenerator()
        const id = idInstance.generate() 
        
        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)      

        const recipe = new Recipe(id, title, description, new Date().toLocaleDateString(), tokenData.id, tokenData.name)
        await recipeDatabase.createRecipe(recipe)

        

        res.status(200).send({message: "Receita criada com sucesso"})
        
    } catch (error: any) {
        res.status(400).send(error.message)        
    }
}