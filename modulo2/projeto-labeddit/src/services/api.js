import { BASE_URL } from "../constants/urls";
import axios from "axios"
import { goToFeedPage } from "../routes/coordinator";


export const Login = (body, navigate) => {
    axios.post(`${BASE_URL}users/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            goToFeedPage(navigate)
        }).catch((err) => {
            console.log(err.response)
            alert("Email ou senha incorreta")
        })
}

export const SignUp = (body, navigate) => {
    axios.post(`${BASE_URL}users/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            goToFeedPage(navigate)
        }).catch((err) => {
            console.log(err.response)
        })
}

export const GetPosts = (estado) => {
    axios.get(`${BASE_URL}posts`, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    }).then((res) => {
        estado(res.data)
    }).catch((err) => {
        console.log(err.response)
    })
}

export const CreatePost = (body) => {
    axios.post(`${BASE_URL}posts`, body, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    }).then((res) => {
        console.log(res.data)
        window.Location.reload()
    }).catch((err) => {
        console.log(err.response)
    })
}

export const CreatePostVote = (id, body) => {
    axios.post(`${BASE_URL}posts/${id}/votes`, body, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    }).then((res) => {
        console.log(res.data)
    }).catch((err) => {
        console.log(err.response)
    })
}

export const GetPostComments = (id, estado) => {
    axios.get(`${BASE_URL}posts/${id}/comments`, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    }).then((res) => {       
        estado(res.data)
    }).catch((err) => {
        console.log(err.response)
    })
}

