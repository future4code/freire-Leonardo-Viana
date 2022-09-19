import { BASE_URL } from "../constants/urls";
import axios from "axios"
import { goToFeedPage } from "../routes/coordinator";


export const Login = (body, navigate, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}users/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            goToFeedPage(navigate)
            setIsLoading(false)
        }).catch((err) => {           
            alert("Email ou senha incorreta")
            setIsLoading(false)
        })
}

export const SignUp = (body, navigate, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}users/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            goToFeedPage(navigate)
            setIsLoading(false)
        }).catch((err) => {            
            setIsLoading(false)
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

export const CreatePost = (body, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}posts`, body, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    }).then((res) => {       
        window.location.reload()
        setIsLoading(false)
    }).catch((err) => {       
        setIsLoading(false)
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


export const CreateCommentVote = (id, body) => {
    axios.post(`${BASE_URL}comments/${id}/votes`, body, {
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

export const CreateComment = (body, id, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}posts/${id}/comments`, body, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    }).then((res) => {       
        window.location.reload()
        setIsLoading(false)                      
    }).catch((err) => {       
        setIsLoading(false)
    })
}

