import { IPostDB, Post } from "../models/Post"
import { BaseDatabase } from "./BaseDatabase"
import { posts } from "./migrations/data"

export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"


    public createPost = async (post: Post) => {
        const postDB: IPostDB = {
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUserId()          
        }

        await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .insert(postDB)
    }

    public findById = async (id: string) => {
        const postsDB: IPostDB[] = await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .select()
        .where({id})

        return postsDB[0]
    }   
   

    public deletePost = async (id: string) => {
         const postsDB: IPostDB[] = await BaseDatabase
        .connection.raw(`
        SELECT post_id FROM Labook_Likes
        `)        

        if(JSON.stringify(postsDB[0]).includes(id)) {
            await BaseDatabase.connection.raw(`
        DELETE FROM Labook_Likes WHERE post_id = ${id}
        `)
        }       

        await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .delete()
        .where({id})
    }



}