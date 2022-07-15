import axios from 'axios'
import { BASE_URL } from '../constants/url'
import { goToAdminHomePage } from '../routes/coordinator'



export const deleteTrip = (id) => {
    axios.delete(`${BASE_URL}/trips/${id}`, {
        headers: {
            auth: localStorage.getItem("token")
        }
    }).then((res) => {
        console.log(res.data)
    }).catch((err) => {
        console.log(err.response)
    })
}

export const getTrips = (setar) => {
    axios.get(`${BASE_URL}/trips`)
        .then((res) => {
            setar(res.data.trips)
        }).catch((er) => {
            console.log(er.response)
        })
}

export const applyToTrip = (id, form) => {
    alert("Aplicação enviada com sucesso!")
    axios.post(`${BASE_URL}/trips/${id}/apply`, form)
        .then((res) => {
            console.log(res.data)            
        }).catch((er) => {
            console.log(er.responsive)
        })
} 

export const createTrip = (body,navigate) => {            
    axios.post (`${BASE_URL}/trips`,body,{
        headers: {
            auth: localStorage.getItem("token"),
            "Content-Type": "application/json" 
        }
    }).then((res) => {
        console.log(res.data)
        alert("Viagem cadastrada com sucesso")
        goToAdminHomePage(navigate)                 
    }).catch((err) => {
        console.log(err.response)
        alert("Erro")
    })
}