import app from './app'
import { getProfile } from './endpoints/getProfile'
import { getProfileById } from './endpoints/getProfileById'
import { getRecipeById } from './endpoints/getRecipeById'
import { login } from './endpoints/login'
import { postRecipe } from './endpoints/postRecipe'
import { signUp } from './endpoints/signUp'

app.post("/user/signup", signUp)
app.post("/user/login", login)
app.get("/user/profile", getProfile)
app.get("/user/:id", getProfileById)
app.post("/recipe", postRecipe)
app.get("/recipe/:id", getRecipeById)