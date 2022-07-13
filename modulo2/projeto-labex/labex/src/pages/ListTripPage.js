import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { goBack, goToApplicationFormPage } from '../routes/coordinator'

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
width: 400px;
height: 250px;
border: 1px black solid;
display: flex;
flex-direction: column;
div{
    margin: 13px;
    font-size: large;
    font-weight: bold;
    color: orange;    
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

    const navigate = useNavigate()

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
                    <Viagem>
                        <div>teste</div>
                        <div>teste</div>
                        <div>teste</div>
                        <div>teste</div>
                        <div>teste</div>
                    </Viagem>
                    <Viagem>
                        <div>teste</div>
                        <div>teste</div>
                        <div>teste</div>
                        <div>teste</div>
                        <div>teste</div>
                    </Viagem>
                    <Viagem>
                        <div>teste</div>
                        <div>teste</div>
                        <div>teste</div>
                        <div>teste</div>
                        <div>teste</div>
                    </Viagem>
                    <Viagem>
                        <div>teste</div>
                        <div>teste</div>
                        <div>teste</div>
                        <div>teste</div>
                        <div>teste</div>
                    </Viagem>
                    <Viagem>
                        <div>teste</div>
                        <div>teste</div>
                        <div>teste</div>
                        <div>teste</div>
                        <div>teste</div>
                    </Viagem>
                </Lista>
                <BlocoBotao>
                    <button onClick={() => goBack(navigate)}>Voltar</button>
                    <button onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</button>
                </BlocoBotao>
            </Bloco>


        </div>
    )
}

export default ListTripPage