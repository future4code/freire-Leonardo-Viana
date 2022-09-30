import { ShowBusiness } from "../src/business/ShowBusiness"
import { ICreateShowInputDTO } from "../src/models/Show"
import { IdGenerator } from "../src/services/IdGenerator"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { ShowDatabaseMock } from "./mocks/ShowDatabaseMock"

describe ("Testando a ShowBusiness", () => {
    const showBusiness = new ShowBusiness(
        new ShowDatabaseMock(),
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("Cadastro de show",async () => {
        const input: ICreateShowInputDTO = {
            band: "Sorriso Maroto",
            starts_at: "14/12/2022",
            token: "token-mock-admin"
        }

        const response = await showBusiness.createShow(input)
        expect(response.message).toBe("Show criado com sucesso")        
    })
})