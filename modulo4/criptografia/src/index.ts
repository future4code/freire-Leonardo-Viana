import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import { v4 } from "uuid"
import { Autheticator } from "./services/Authenticator"
import { AuthenticationData } from "./types"
import login from "./endpoints/login"
import { HashManager } from "./services/HashManager"

app.post('/user/signup', createUser)
app.put('/user/edit', editUser)
app.post('/user/login', login)


const testandoHash = async () => {

    const password = "labenu"

    const instanceHash = new HashManager()
    const hash = await instanceHash.hash(password)
    console.log("hash", hash)

    const isCompareHash: boolean = await instanceHash.compareHash(password, hash)

    if (!isCompareHash) {
        console.log("Credenciais iválidas")
    } else {
        console.log("Logado com sucesso")
    }
}

testandoHash()