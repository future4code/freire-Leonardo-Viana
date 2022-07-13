import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { goToHome } from '../routes/coordinator'

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
margin: 25vh 0px 0px 0px;
h1{
    margin: 0;
}
`

const BlocoInput = styled.div`
margin: 30px; 
width: 700px;
height: 100px;
display: flex;
flex-direction: column;
align-items: center;
input{
    margin: 10px;
    width: 350px;
    height: 25px;
}
`

const BlocoBotao = styled.div`
button{
    margin: 0px 40px;  
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

function LoginPage() {

    const navigate = useNavigate()

    // const goBack = () => {
    //     navigate("/")
    // }

    return (
        <div>
            <Header>
                <h1>LabeX</h1>
            </Header>
            <Bloco>
                <Subtitulo>
                    <h1>Login</h1>
                </Subtitulo>
                <BlocoInput>
                    <input placeholder='E-mail'></input>
                    <input placeholder='Senha'></input>
                </BlocoInput>
                <BlocoBotao>
                    <button onClick={() => goToHome(navigate)}>Voltar</button>
                    <button>Entrar</button>
                </BlocoBotao>
            </Bloco>
        </div>
    )
}

export default LoginPage 