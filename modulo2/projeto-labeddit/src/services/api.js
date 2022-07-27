import { BASE_URL } from "../constants/urls";
import axios from "axios"
import { goToFeedPage } from "../routes/coordinator";


export const Login = (body,navigate) => {
    axios.post(`${BASE_URL}users/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        goToFeedPage(navigate)        
    }).catch((err) => {
        console.log(err.response)
        alert("Email ou senha incorreta")
    })
}

