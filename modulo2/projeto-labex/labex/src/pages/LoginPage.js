import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { goToAdminHomePage, goToHome } from '../routes/coordinator'
import { useState, useEffect } from 'react'

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

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
   

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(token == null) {
            console.log("Não está logado")
        } else {
            goToAdminHomePage(navigate)
        }
    })

    const onChangeEmail = (ev) => {
        setEmail(ev.target.value)
    }

    const onChangeSenha = (ev) => {
        setSenha(ev.target.value)
    }

    const onSubmit = () => {
        console.log(email, senha)
        const body = {
            email: email,
            password: senha
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-almeida-freire/login', body)
        .then((res) => {
            console.log("Ok", res.data)            
            localStorage.setItem("token", res.data.token)
            setEmail("")
            setSenha("")
        }).cath((er) => {
            console.log(er.response)
            alert("E-mail ou senha estão errados.")
        })         
    }

   



    

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
                    <input type='email' placeholder='E-mail' onChange={onChangeEmail} value={email}></input>
                    <input type='password' placeholder='Senha' onChange={onChangeSenha} value={senha}></input>
                </BlocoInput>
                <BlocoBotao>
                    <button onClick={() => goToHome(navigate)}>Voltar</button>
                    <button onClick={onSubmit}>Entrar</button>
                </BlocoBotao>
            </Bloco>
        </div>
    )
}

export default LoginPage 