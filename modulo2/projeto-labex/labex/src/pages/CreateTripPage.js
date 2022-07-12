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
height: 400px;
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
                    <input placeholder='Nome'></input>
                    <input placeholder='Escolha um Planeta'></input>
                    <input type='date' min='{{getDate()}/{getMonth()}/{getFullTear()}}' placeholder=''></input>
                    <input placeholder='Descrição'></input>
                    <input type='number' placeholder='Duração em dias'></input>
                </Form>
                <BlocoBotao>
                <button onClick={() => goBack(navigate)}>Voltar</button>
                <button>Criar viagem</button>
            </BlocoBotao>
            </Bloco>
            
        </div>
    )
}

export default CreateTripPage