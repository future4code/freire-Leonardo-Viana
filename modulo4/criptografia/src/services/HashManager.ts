import bcrypt from 'bcryptjs'

export class HashManager {

    public hash = async (plaintext: string) => {

        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        const result = await bcrypt.hash(plaintext, salt)

        return result
    }

    public compareHash = async (plaintext: string, hash: string) => {
        return bcrypt.compare(plaintext, hash)

    }


}