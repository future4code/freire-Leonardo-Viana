import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'
import { goBack, goToLoginPage } from '../routes/coordinator'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../constants/url'

const Header = styled.div`
background-color: black;
color: orange;
min-height: 10vh;
display: flex;
align-items: center;
h1{
    margin: 0px 20px;
    font-size: xxx-large;
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
margin: 3vh 0px 0px 0px;
h1{
    margin: 0;
}
`

const Informação = styled.div`
margin: 30px; 
width: 600px;
height: 250px;
border: 1px black solid;
display: flex;
flex-direction: column;
div{
    margin: 13px;
    font-size: large;
    font-weight: bold
}
`

const BlocoBotao = styled.div`
button{    
    margin: 0px 50px;  
    height: 30px;
    width: 100px;
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

const Lista = styled.div`
margin: 30px; 
width: 600px;
height: 150px;
border: 1px black solid;
display: flex;
flex-direction: column;
align-items: center;
overflow: auto;
div{
    margin: 0;
    font-size: large;
    h2{
        margin-top: 10px;
    }
    ul{        
        margin: 0;
        li{
            width: 400px;
        }        
    }
}
`

const Botao = styled.button`
margin: 0px 50px 20px 50px;
min-height: 25px;
min-width: 90px;
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
`

function TripDetailsPage() {

    const navigate = useNavigate()
    const pathParams = useParams()

    const [detalhes, setDetalhes] = useState({})
    const [approve, setApprove] = useState(undefined)

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token == null) {
            console.log("Não está logado")
            goToLoginPage(navigate)
        }
        condicaoPendente()
        condicaoAprovados()
    })

    useEffect(() => {
        getTripDetail(pathParams.id)
    }, [])

    const getTripDetail = (id) => {
        axios.get(`${BASE_URL}/trip/${id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then((res) => {
            setDetalhes(res.data.trip)
            console.log(res.data.trip)
        }).catch((er) => {
            console.log(er.repsonse)
        })
    }

    const decideCandidate = (condicao, candidatoId) => {
        const body = {
            approve: condicao
        }
        axios.put(`${BASE_URL}/trips/${pathParams.id}/candidates/${candidatoId}/decide`, body, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then((res) => {
            console.log(res.data)
            window.location.reload()
        }).catch((err) => {
            alert(err.response)
        })

    }

    const condicaoPendente = () => {
        if (typeof (detalhes.candidates) == 'object') {
            return detalhes.candidates.map((candidatos, id) => {
                return <li key={id}>
                    <p><b>{candidatos.name}</b></p>
                    <p>{candidatos.profession}</p>
                    <p>{candidatos.age} anos</p>
                    <p>País: {candidatos.country}</p>
                    <p>{candidatos.applicationText}</p>
                    <Botao onClick={() => decideCandidate(true, candidatos.id)}>Aprovar</Botao>
                    <Botao onClick={() => decideCandidate(false, candidatos.id)}>Reprovar</Botao>
                </li>

            })
        }
    }

    const condicaoAprovados = () => {
        if (typeof (detalhes.approved) == 'object') {
            return detalhes.approved.map((candidatos, id) => {
                return <li key={id}> {candidatos.name} </li>
            })
        }
    }


    return (

        <div>
            <Header>
                <h1>LabeX</h1>
            </Header>
            <Bloco>
                <Subtitulo>
                    <h1>{detalhes.name}</h1>
                </Subtitulo>
                <Informação>
                    <div>Nome:{detalhes.name}</div>
                    <div>Descrição:{detalhes.description}</div>
                    <div>Planeta:{detalhes.planet}</div>
                    <div>Duração:{detalhes.durationInDays}</div>
                    <div>Data:{detalhes.date}</div>
                </Informação>

                <BlocoBotao>
                    <button onClick={() => goBack(navigate)}>Voltar</button>
                </BlocoBotao>
                <Lista>
                    <div>
                        <h2>Candidatos Pendentes</h2>
                    </div>
                    <div>
                        <ul>
                            {condicaoPendente()}
                        </ul>
                    </div>
                </Lista>
                <Lista>
                    <div>
                        <h2>Candidatos Aprovados</h2>
                    </div>
                    <div>
                        <ul>
                            {condicaoAprovados()}
                        </ul>
                    </div>
                </Lista>
            </Bloco>
        </div>
    )
}

export default TripDetailsPage