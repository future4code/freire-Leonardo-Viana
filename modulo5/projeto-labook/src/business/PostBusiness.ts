import { PostDatabase } from "../database/PostDatabase"
import { ICreatePostDTO, Post } from "../models/Post"
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

}