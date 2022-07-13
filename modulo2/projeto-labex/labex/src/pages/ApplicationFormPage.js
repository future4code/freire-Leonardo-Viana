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

function ApplicationFormPage() {

    const navigate = useNavigate()


    return (
        <div>
        <Header>
            <h1>LabeX</h1>
        </Header>
        <Bloco>
            <Subtitulo>
                <h1>Inscreva-se para uma viagem</h1>
            </Subtitulo>
            <Form>
            <select placeholder='Escolha uma Viagem'>
                    <option value={""}>Escolha uma Viagem</option>
                   
                </select>
                <input placeholder='Nome' pattern={"^.{5,}$"} title={"O nome da viagem deve ter no mínimo 5 caracteres"}></input>                
                <input type='number' min={18}  placeholder='Idade'></input>
                <input placeholder='Texto de Candidatura' pattern={"^.{30,}$"} title={"O nome deve ter no mínimo 30 caracteres"}></input>
                <input placeholder='Profissão'></input>
                <select placeholder='Escolha um País'>
                    <option value={""}>Escolha um País</option>
                   
                </select>
            </Form>
            <BlocoBotao>
             <button onClick={() => goBack(navigate)}>Voltar</button>
                <button>Enviar</button>
        </BlocoBotao>
        </Bloco>        
    </div>
      
    )
}

export default ApplicationFormPage