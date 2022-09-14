import { BaseDatabase } from "./BaseDatabase";
import { User } from "../entities/User";

export class UserDatabase extends BaseDatabase{
    public async createUser(user:User) {
        try {
            await BaseDatabase.connection('users_cookenu').insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword()
            })
            
        } catch (error) {
            throw new Error(error.sqlMessage || error.message )
        }
    }



    public async findUserByEmail(email:string): Promise<User> {
        try {
            const user = await BaseDatabase.connection('users_cookenu')
            .select('*')
            .where({email})
            return user[0] && User.toUserModel(user[0])
            
        } catch (error) {
            throw new Error(error.sqlMessage || error.message )
            
        }

    }
}