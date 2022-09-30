import { ShowDatabase } from "../database/ShowDatabase"
import { AuthenticationError } from "../errors/AuthenticationError"
import { ParamsError } from "../errors/ParamsError"
import { IGetShowsInputDTO, Show } from "../models/Show"
import { User } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class ShowBusiness {
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) { }


    public createShow = async (input: any) => {
        const { band, starts_at, token } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (payload?.role !== "ADMIN") {
            throw new Error("Usuário sem permissão para criar um show")
        }

        if (new Date(starts_at) < new Date("05/12/2022")) {
            throw new ParamsError("Data anterior ao evento previsto")
        }

        const showDB = await this.showDatabase.findByDay(starts_at)

        if (showDB) {
            throw new Error("Data não disponível")
        }

        const id = this.idGenerator.generate()
        const show = new Show(
            id,
            band,
            new Date(starts_at)
        )

        await this.showDatabase.createShow(show)

        return ({message: "Show criado com sucesso"})
    }

    public getShows = async (input: IGetShowsInputDTO) => {
        const { token } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new AuthenticationError()
        }

        const showsDB = await this.showDatabase.getShows()

        const shows = showsDB.map(showDB => {
            return new Show(
                showDB.id,
                showDB.band,
                showDB.starts_at
            )
        })
    }

    for (let show of shows) {
        const showDay = show.get        
    }

}