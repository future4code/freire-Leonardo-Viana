import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { goBack, goToAdminHomePage, goToCreateTripPage, goToHome, goToLoginPage, goToTripDetailsPage } from '../routes/coordinator'

const Header = styled.div`
background-color: black;
color: orange;
min-height: 10vh;
display: flex;
align-items: center;
h1{
    margin: 0px 20px;
    font-size: xxx-large ;
}
`

const Bloco = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 0;
`

const Subtitulo = styled.div`
color: orange;
margin: 10vh 0px 20px 0px;
h1{
    margin: 0;
}
`

const BlocoBotao = styled.div`
display: flex;
justify-content: center;
button{
    margin: 0px 15px;   
    height: 30px;
    width: 120px;
    border-radius: 15px;
    background-color: orange;
    border: 1px black solid;
    font-size: large;
    :hover{
        cursor: pointer;
        background-color: rgba(255, 112, 0, 1)
    }
    :active{
        border: 1px white solid;
    }
}
`

const BlocoViagens = styled.div`
margin: 30px; 
width: 700px;
height: 450px;
border: 1px black solid;
overflow: auto;
display: flex;
flex-direction: column;
align-items: center;
`

const Viagens = styled.button`
background-color: orange;
border: 1px black solid;
display: grid;
grid-template-columns: 1fr 1fr;
margin: 20px 0px;
width: 560px;
min-height: 90px;
align-items: center;
:hover{
    cursor: pointer;   
}
span{
    margin: 0px 15px;
    font-size: large;
}
button{
    border: 1px orange solid;
    background-color: orange;
    border-radius: 40px;
    z-index: auto;
    :hover{
        background-color: rgba(255, 112, 0, 1);        
        cursor: pointer;
    }
    :active{
        border: 1px white solid;
    }
}
svg{
    height: 30px;
    margin: 10px;
}
`

function AdminHomePage() {

    const navigate = useNavigate()
    const [lista, setLista] = useState("")
    const [variavel, setVariavel] = useState(true)   

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token == null) {
            console.log("Não está logado")
            goToLoginPage(navigate)
        }
        getTrips()
    })

    useEffect(() => {
        setVariavel(true)
    },[lista.length])

    const Logout = () => {
        localStorage.removeItem("token")
        goToLoginPage(navigate)
    }

    const getTrips = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-almeida-freire/trips')
            .then((res) => {

                setLista(res.data.trips)
            }).catch((er) => {
                console.log(er.response)
            })
    }

    const deleteTrip = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-almeida-freire/trips/${id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then((res) => {
            console.log(res.data)
            Location.reload()

        }).catch((er) => {
            console.log(er.response)
        })
    }   

    const apagar = (name, id) => {        
        if (window.confirm(`Tem certeza que deseja deletar a viagem ${name}?`)) {
            deleteTrip(id)
        }         
    }

    const viagens = () => {
        if (typeof (lista) == 'object') {
            return lista.map((trip, id) => {
               
                return <Viagens onClick={() => goToTripDetailsPage(navigate,trip.id)}>
                    <div>
                        <span key={id}>{trip.name}</span>
                    </div>
                    <div>
                        <button onClick={() => apagar(trip.name, trip.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z" /></svg>
                        </button>
                    </div>
                </Viagens>

            })
        } else {
            return <div></div>
        }
    }


    return (
        <div>
            <Header>
                <h1>LabeX</h1>
            </Header>
            <Bloco>
                <Subtitulo>
                    <h1>Gerenciamento de Viagens</h1>
                </Subtitulo>
                <BlocoBotao>
                    <button onClick={() => goToHome(navigate)}>Voltar</button>
                    <button onClick={() => goToCreateTripPage(navigate)}>Criar viagem</button>
                    <button onClick={Logout}>Logout</button>
                </BlocoBotao>
                <BlocoViagens>
                    {viagens()}
                </BlocoViagens>
            </Bloco>


        </div>
    )
}

export default AdminHomePage