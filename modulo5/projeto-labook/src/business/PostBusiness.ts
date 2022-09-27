import { BaseDatabase } from "../database/BaseDatabase"
import { PostDatabase } from "../database/PostDatabase"
import { ICreatePostDTO, IDeletePostDTO, IGetAllPostsDTO, Post } from "../models/Post"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}


    public createPost = async (input: ICreatePostDTO) => {
        const content = input.content
        const token = input.token as string

        if(content.length < 1) {
            throw new Error("O conteúdo deve ter pelo menos 1 caractere")
        }

        const id = this.idGenerator.generate()
        const tokenData = this.authenticator.getTokenPayload(token)

       const post = new Post (
        id,
        content,
        tokenData.id,
        0
       )

       await this.postDatabase.createPost(post)

       return "Post criado com sucesso"
    }


    public getAllPosts = async (input: IGetAllPostsDTO) => {
        const token = input.token

        const tokenData = this.authenticator.getTokenPayload(token)
    }


    public deletePost = async (input: IDeletePostDTO) => {
        const token = input.token
        const id = input.id

        const tokenData = this.authenticator.getTokenPayload(token)

        // const postDB = await this.postDatabase.findById(id)

        // if (!postDB) {
        //     throw new Error("Post não encontrado")
        // }

        await this.postDatabase.deletePost(id)

        return "Post deletado com sucesso"
    }




}