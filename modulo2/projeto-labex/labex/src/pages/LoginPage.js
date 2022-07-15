import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { goToAdminHomePage, goToHome } from '../routes/coordinator'
import { useState, useEffect } from 'react'
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
margin: 25vh 0px 0px 0px;
h1{
    margin: 0;
}
`

const BlocoInput = styled.div`
margin-top: 30px; 
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

const Formulario = styled.form`
text-align: center;
`

const BlocoBotao = styled.div`
button{
    margin-top: 15px;
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
        if (token == null) {
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

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(email, senha)
        const body = {
            email: email,
            password: senha
        }

        if(email !== 'leonardo@hotmail.com') {
            alert("Usuário não encontrado")
        } else if (email == 'leonardo@hotmail.com' && senha !== '123456') {
            alert("Senha incorreta")
        }
        
        axios.post(`${BASE_URL}/login`, body)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                goToAdminHomePage(navigate)
                setEmail("")
                setSenha("")
            })
            .cath((err) => {                
                alert(err.response.data.message)
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
                <Formulario onSubmit={onSubmit}>
                    <BlocoInput>
                        <input type='email' placeholder='E-mail' onChange={onChangeEmail} value={email} required></input>
                        <input type='password' placeholder='Senha' onChange={onChangeSenha} value={senha} required></input>
                    </BlocoInput>
                    <BlocoBotao>
                        <button type='submit'>Entrar</button>
                    </BlocoBotao>
                </Formulario>
                <BlocoBotao>
                    <button onClick={() => goToHome(navigate)}>Voltar</button>
                </BlocoBotao>
            </Bloco>
        </div>
    )
}

export default LoginPage 