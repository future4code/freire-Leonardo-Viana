import { BaseDatabase } from "./BaseDatabase";

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

class CreateTables extends BaseDatabase {
    public static async createTableUsers() {
        try {
            const table = () => BaseDatabase.connection.raw(`
            CREATE TABLE IF NOT EXISTS users_cookenu (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL
            )
            `)
            
            await table().then(() => console.log("Tabela criada"))
                     

        } catch (error) {
            console.log(printError(error))
        }
    }

    public static async createTableRecipes() {
        try {
            const table = () => BaseDatabase.connection.raw(`
            CREATE TABLE IF NOT EXISTS recipes_cookenu (
                id VARCHAR(255) PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                description VARCHAR(255) NOT NULL,
                createdAt VARCHAR(255) NOT NULL,
                userId VARCHAR(255) NOT NULL,
                userName VARCHAR(255) NOT NULL
            )
            `)
            
            await table().then(() => console.log("Tabela criada"))
                     

        } catch (error) {
            console.log(printError(error))
        }
    }

    public static async closeConnection() {
        BaseDatabase.connection.destroy()
    }
}

CreateTables.createTableRecipes().then(() => console.log("Banco pronto!")).finally(CreateTables.closeConnection)



