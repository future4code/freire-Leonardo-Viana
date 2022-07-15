import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { goBack, goToAdminHomePage, goToLoginPage } from '../routes/coordinator'
import { useEffect, useState } from 'react'
import { planetas } from '../constants/planets'
import { BASE_URL } from '../constants/url'
import { getTrips,  createTrip } from '../components/api'


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

const Formulario = styled.form`
text-align: center;
`

const Form = styled.div`
margin: 30px; 
width: 700px;
height: 370px;
border: 1px black solid;
overflow: auto;
display: flex;
flex-direction: column;
align-items: center;
input{
    margin: 15px;
    padding: 10px;
    width: 500px;    
    border-radius: 25px;
    overflow: auto;   
    text-align: start;
    border: 1px black solid ;
}
select{
    margin: 15px;
    padding: 10px;
    width: 525px;    
    border-radius: 25px;  
    border: 1px black solid ;
}
`

const BlocoBotao = styled.div`
button{
    margin: 0px 0px 30px 0px;  
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

function CreateTripPage() {

    const [name,setName] = useState()
    const [planet,setPlanet] = useState()
    const [date,setDate] = useState()
    const [description,setDescription] = useState()
    const [durationInDays,setDurationInDays] = useState()
    const [viagensDisponiveis, setViagensDisponiveis] = useState()

    const navigate = useNavigate()

    const onChangeName = (ev) => {
        setName(ev.target.value)        
    }

    const onChangePlanet = (ev) => {
        setPlanet(ev.target.value)        
    }

    const onChangeDate = (ev) => {
        setDate(ev.target.value)        
    }

    const onChangeDescription = (ev) => {
        setDescription(ev.target.value)        
    }

    const onChangeDurationInDays = (ev) => {
        setDurationInDays(ev.target.value)        
    }


    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token == null) {
            console.log("Não está logado")
            goToLoginPage(navigate)
        }
    })

    useEffect(() => {
      getTrips(setViagensDisponiveis)
    },[])

    const hoje = new Date()
    const stringToday = hoje.getFullYear() + "-" +
    ("0" + (hoje.getMonth() + 1)).substr(-2) + "-"
    + ("0" + hoje.getDate()).substr(-2)    

    const body = {
            name: name,
            planet: planet,
            date: date,
            description: description,
            durationInDays: durationInDays
        }

    const criar = () => {
        createTrip(body, navigate)

    }
        


    return (
        <div>            
            <Header>
                <h1>LabeX</h1>
            </Header>
            <Bloco>
                <Subtitulo>
                    <h1>Criar Viagem</h1>
                </Subtitulo>
                <Formulario onSubmit={criar}>
                    <Form>
                    <input placeholder='Nome' pattern={"^.{5,}$"} title={"O nome da viagem deve ter no mínimo 5 caracteres"} onChange={onChangeName} value={name} required></input>
                    <select placeholder='Escolha um Planeta' onChange={onChangePlanet} value={planet} required>
                        <option value={""}>Escolha um Planeta</option>
                        {planetas.map((planeta) => {
                            return <option value={planeta} key={planeta}>{planeta}</option>
                        })}
                    </select>
                    <input type='date' min={stringToday} placeholder='Data' onChange={onChangeDate} value={date} required></input>
                    <input placeholder='Descrição' pattern={"^.{30,}$"} title={"O nome deve ter no mínimo 30 caracteres"} onChange={onChangeDescription} value={description} required></input>
                    <input type='number' min={50} placeholder='Duração em dias' onChange={onChangeDurationInDays} value={durationInDays} required></input>
                </Form>
                <BlocoBotao>                
                <button type='submit'>Criar viagem</button>
            </BlocoBotao>
                </Formulario>
                <BlocoBotao>
                <button onClick={() => goToAdminHomePage(navigate)}>Voltar</button>              
            </BlocoBotao>                
            </Bloco>
            
        </div>
    )
}

export default CreateTripPage