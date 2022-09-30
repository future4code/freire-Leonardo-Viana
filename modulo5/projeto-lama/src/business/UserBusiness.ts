import { UserDatabase } from "../database/UserDatabase"
import { ILoginInputDTO, ISignupInputDTO, User, USER_ROLES } from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public signup = async (input: ISignupInputDTO) => {
        const name = input.name
        const email = input.email
        const password = input.password

        if ((!name && typeof(name) == 'string') || (!email && typeof(email) == 'string') || (!password && typeof(password) == 'string')) {
            throw new Error("Um ou mais parâmetros faltando")
        }

        if (name.length < 3) {
            throw new Error("O nome deve ter no mínimo 3 caracteres")
        }

        if (password.length < 6) {
            throw new Error("A senha deve ter no mínimo 6 caracteres")
        }

        if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new Error("Parâmetro 'email' inválido")
        }

        const userDB = await this.userDatabase.findByEmail(email)

        if (userDB) {
            throw new Error("Email já cadastrado")
        }


        const id = this.idGenerator.generate()
        const hashedPassword = await this.hashManager.hash(password)

        const user = new User(
            id,
            name,
            email,
            hashedPassword,
            USER_ROLES.NORMAL
        )

        await this.userDatabase.createUser(user)

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const token = this.authenticator.generateToken(payload)


        return {message: "Cadastro realizado com sucesso", token}   
    }


    public login = async (input: ILoginInputDTO) => {
        const email = input.email
        const password = input.password

        if ((!email && typeof(email) == 'string') || (!password && typeof(password) == 'string')) {
            throw new Error("Um ou mais parâmetros faltando")
        }

        if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new Error("Parâmetro 'email' inválido")
        }

        if (password.length < 6) {
            throw new Error("A senha deve ter no mínimo 6 caracteres")
        }

        const userDB = await this.userDatabase.findByEmail(email)

        if(!userDB) {
            throw new Error("Email não cadastrado")
        }

        const user = new User(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.role
        )

        const isPasswordCorrect = await this.hashManager.compare(password, user.getPassword())

        if(!isPasswordCorrect) {
            throw new Error("Senha incorreta")
        }

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        return {message: "Login realizado com sucesso", token}

    }


}