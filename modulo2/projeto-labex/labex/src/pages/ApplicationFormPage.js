import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { goBack, goToListTripPage } from '../routes/coordinator'
import { useState, useEffect } from 'react'
import { paises } from '../constants/countries'
import { getTrips, applyToTrip } from '../components/api'
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

const Formulario = styled.form`
text-align: center;
`

const Form = styled.div`
margin: 30px; 
width: 700px;
height: 300px;
border: 1px black solid;
overflow: auto;
display: flex;
flex-direction: column;
align-items: center;
input{
    margin: 10px;
    padding: 6px;
    width: 500px;    
    border-radius: 25px;
    overflow: auto;   
    text-align: start;
    border: 1px black solid ;
}
select{
    margin: 10px;
    padding: 5px;
    width: 510px;    
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

function ApplicationFormPage() {
    const navigate = useNavigate()
    const [form, setForm] = useState({ name: "", age: "", applicationText: "", profession: "", country: "" })
    const [viagens, setViagens] = useState("")
    const [viagemId, setViagemId] = useState("")

    useEffect(() => {
        getTrips(setViagemId)
    }, [])

    
    useEffect(() => {
        console.log(form)
        console.log(viagens)
        console.log(viagemId)
    })

    const onChange = (ev) => {
        setForm({ ...form, [ev.target.name]: ev.target.value })
    }

    const onChangeViagens = (ev) => {
        setViagens(ev.target.value)
    }        

    const opcoes = () => {
        if (typeof (viagemId) == 'object') {
            return viagemId.map((a) => {
                return <option key={a.id} value={a.id}>{a.name}</option>
            })
        }
    }

    const enviar = (ev) => {
        ev.preventDefault()
        applyToTrip(viagens,form)
        setForm({ name: "", age: "", applicationText: "", profession: "", country: "" })
    }


    return (
        <div>
            <Header>
                <h1>LabeX</h1>
            </Header>
            <Bloco>
                <Subtitulo>
                    <h1>Inscreva-se para uma viagem</h1>
                </Subtitulo>
                <Formulario onSubmit={enviar}>
                    <Form>
                        <select placeholder='Escolha uma Viagem' onChange={onChangeViagens} value={viagens} >
                            <option value={""}>Escolha uma Viagem</option>
                            {opcoes()}
                        </select>
                        <input name='name' value={form.name} placeholder='Nome' pattern={"^.{5,}$"} title={"O nome da viagem deve ter no mínimo 5 caracteres"} onChange={onChange} required></input>
                        <input name='age' value={form.age} type='number' min={18} placeholder='Idade' onChange={onChange} required></input>
                        <input name='applicationText' value={form.applicationText} placeholder='Texto de Candidatura' pattern={"^.{30,}$"} title={"O nome deve ter no mínimo 30 caracteres"} onChange={onChange} required></input>
                        <input name='profession' value={form.profession} placeholder='Profissão' pattern={"^.{10,}$"} title={"O nome deve ter no mínimo 10 caracteres"} onChange={onChange} required></input>
                        <select name='country' value={form.country} placeholder='Escolha um País' onChange={onChange} required>
                            <option value={""}>Escolha um País</option>
                            {paises.map((pais, id) => {
                                return <option value={pais} key={id}>{pais}</option>
                            })}
                        </select>
                    </Form>
                    <BlocoBotao>
                        <button type='submit'>Enviar</button>
                    </BlocoBotao>
                </Formulario>
                <BlocoBotao>
                    <button onClick={() => goToListTripPage(navigate)}>Voltar</button>
                </BlocoBotao>

            </Bloco>
        </div>

    )
}

export default ApplicationFormPage