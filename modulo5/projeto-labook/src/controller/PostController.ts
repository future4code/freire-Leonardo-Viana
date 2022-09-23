import { PostBusiness } from "../business/PostBusiness";
import { ICreatePostDTO, IDeletePostDTO } from "../models/Post";
import { Request, Response } from "express";

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) {}

    public createPost = async (req: Request, res: Response) => {
        try {
            const input: ICreatePostDTO = {
                content: req.body.content,
                token: req.body.token                
            }

            const response = await this.postBusiness.createPost(input)

            res.status(201).send(response)
        } catch (error: any) {
            res.status(400).send({message: error.message})            
        }
     
    }

    public deletePost = async (req: Request, res: Response) => {
        try {
            const input: IDeletePostDTO = {
                token: req.body.token,
                id: req.body.id
            }

            const response = await this.postBusiness.deletePost(input)

            res.status(200).send(response)
        } catch (error: any) {
            res.status(400).send({message: error.message})
        }
    }

}