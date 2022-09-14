import app from './app'
import { login } from './endpoints/login'
import { signUp } from './endpoints/signUp'

app.post("/user/signup", signUp)
app.post("/user/login", login)