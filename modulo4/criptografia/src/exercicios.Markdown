# 1-
# a) 
Foi usado 12 no rounds para que não fique lento a navegação e seguro na medida do possível.
Salt é criado de acordo com os rounds

# b)
import bcrypt from 'bcryptjs'

const hash = async (plaintext: string) => {

   const rounds = Number(process.env.BCRYPT_COST)
   const salt = await bcrypt.genSalt(rounds)
   const result = await bcrypt.hash(plaintext, salt)

   return result

# c)
const compareHash = async (plaintext: string, hash: string) => {
        return bcrypt.compare(plaintext, hash)
    }
