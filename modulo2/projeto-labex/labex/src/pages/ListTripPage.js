import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { goBack, goToApplicationFormPage, goToHome } from '../routes/coordinator'
import { BASE_URL } from '../constants/url'

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

const Lista = styled.div`
width: 90%;
max-height: 70vh;
display: flex;
flex-wrap: wrap;
overflow: auto;
justify-content: center;

`

const Viagem = styled.div`
margin: 30px; 
width: 550px;
min-height: 250px;
border: 1px black solid;
display: flex;
flex-direction: column;
div{
    display: flex;
    flex-wrap: wrap;
    margin: 13px;
    max-width: 300px;
    font-size: large;
    font-weight: bold;
    color: black;    
}
`

const BlocoBotao = styled.div`
button{
    margin: 0px 50px;  
    height: 30px;
    min-width: 80px;
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

function ListTripPage() {

    const [viagem, setViagem] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        getTrips()        
    })

    const getTrips = () => {
        axios.get(`${BASE_URL}/trips`)
            .then((res) => {
                console.log(res.data)
                setViagem(res.data)
            }).catch((er) => {
                console.log(er.response)
            })
    }

    const lista = () => {
         if(typeof(viagem.trips) == 'object' && viagem.trips.length > 0) {
        return (viagem.trips.map((a, id) => {
            return <Viagem key={id}>
                <div>Nome: {a.name}</div>
                <div>Descrição: {a.description}</div>
                <div>Planeta: {a.planet}</div>
                <div>Duração: {a.durationInDays}</div>
                <div>Data: {a.date}</div>
            </Viagem>
        }))
    }
}

    return (
        <div>            
            <Header>
                <h1>LabeX</h1>
            </Header>
            <Bloco>
                <Subtitulo>
                    <h1>Lista de Viagens</h1>
                </Subtitulo>
                <Lista>
                    {lista()}
                </Lista>
                <BlocoBotao>
                    <button onClick={() => goToHome(navigate)}>Voltar</button>
                    <button onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</button>
                </BlocoBotao>
            </Bloco>


        </div>
    )
}

export default ListTripPage