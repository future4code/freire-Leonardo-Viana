import { BaseDatabase } from "../../src/database/BaseDatabase"
import { IShowDB, Show } from "../../src/models/Show"

export class ShowDatabaseMock extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    public findByDay = async (starts_at: string): Promise<IShowDB | undefined> => {
      switch (starts_at) {
        case "08/12/2022":
            return {
                id: "cqr3cq321e2",
                band: "Grupo Labenu",
                starts_at: new Date("08/12/2022") 
            }

            default: 
            return undefined
      }
    }


    public createShow = async (show: Show) => {}

}