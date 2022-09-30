import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { ICreateShowInputDTO } from "../models/Show";

export class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ) {}


    public createShow = async (req: Request, res: Response) => {
        try {
            const input: ICreateShowInputDTO = {
                band: req.body.band,
                starts_at: req.body.starts_at,
                token: req.body.token
            }

            const response = await this.showBusiness.createShow(input)

            res.status(201).send(response)
        } catch (error: any) {
            res.status(400).send({message: error.message})            
        }
    }

}