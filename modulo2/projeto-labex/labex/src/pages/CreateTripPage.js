import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../routes/coordinator'

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

function CreateTripPage() {

    const navigate = useNavigate()

    const hoje = new Date()
    const stringToday = hoje.getFullYear() + "-" +
    ("0" + (hoje.getMonth() + 1)).substr(-2) + "-"
    + ("0" + hoje.getDate()).substr(-2)

    const planetas = ["Mercúrio","Vênus","Terra","Marte","Jupiter","Saturno","Urano","Netuno","Plutão"]

    return (
        <div>
            <Header>
                <h1>LabeX</h1>
            </Header>
            <Bloco>
                <Subtitulo>
                    <h1>Criar Viagem</h1>
                </Subtitulo>
                <Form>
                    <input placeholder='Nome' pattern={"^.{5,}$"} title={"O nome da viagem deve ter no mínimo 5 caracteres"}></input>
                    <select placeholder='Escolha um Planeta'>
                        <option value={""}>Escolha um Planeta</option>
                        {planetas.map((planeta) => {
                            return <option value={planeta} key={planeta}>{planeta}</option>
                        })}
                    </select>
                    <input type='date' min={stringToday} placeholder='Data'></input>
                    <input placeholder='Descrição' pattern={"^.{30,}$"} title={"O nome deve ter no mínimo 30 caracteres"}></input>
                    <input type='number' min={50} placeholder='Duração em dias'></input>
                </Form>
                <BlocoBotao>
                <button onClick={() => goBack(navigate)}>Voltar</button>
                <button type='submit'>Criar viagem</button>
            </BlocoBotao>
            </Bloco>
            
        </div>
    )
}

export default CreateTripPage