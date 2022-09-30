import { IShowDB, Show } from "../models/Show"
import { BaseDatabase } from "./BaseDatabase"

export class ShowDatabase extends BaseDatabase {
    public static TABLE_SHOWS = "Lama_Shows"
    public static TABLE_TICKETS = "Lama_Tickets"

    public getShows = async (): Promise<IShowDB[]> => {
        const showsDB: IShowDB[] = await BaseDatabase
            .connection(ShowDatabase.TABLE_SHOWS)
            .select()

        return showsDB
    }


    public findByDay = async (starts_at: string): Promise<IShowDB | undefined> => {
        const result: IShowDB[] = await BaseDatabase
            .connection(ShowDatabase.TABLE_SHOWS)
            .select()
            .where({ starts_at })

        return result[0]
    }


    public createShow = async (show: Show) => {
        const showDB: IShowDB = {
            id: show.getId(),            
            band: show.getBand(),
            starts_at: show.getStartsAt()
        }
    }


}