import { BaseDatabase } from "./BaseDatabase";
import { Recipe } from "../entities/Recipe";

export class RecipesDatabase extends BaseDatabase{
    public async createRecipe(recipe:Recipe) {
        try {
            await BaseDatabase.connection('recipes_cookenu').insert({
                id: recipe.getId(),
                title: recipe.getTitle(),
                description: recipe.getDescription(),
                createdAt: recipe.getcreatedAt(),
                userId: recipe.getUserId(),
                userName: recipe.getUserName()
            })
            
        } catch (error) {
            throw new Error(error.sqlMessage || error.message )
        }
    }



    public async findRecipeByTitle(title:string): Promise<Recipe> {
        try {
            const recipe = await BaseDatabase.connection('recipes_cookenu')
            .select('*')
            .where({title})
            return recipe[0] && Recipe.toRecipeModel(recipe[0])
            
        } catch (error) {
            throw new Error(error.sqlMessage || error.message )
            
        }

    }


    public async findRecipeById(id:string): Promise<Recipe> {
        try {
            const recipe = await BaseDatabase.connection('recipes_cookenu')
            .select('*')
            .where({id})
            return recipe[0] && Recipe.toRecipeModel(recipe[0])
            
        } catch (error) {
            throw new Error(error.sqlMessage || error.message )
            
        }

    }
}