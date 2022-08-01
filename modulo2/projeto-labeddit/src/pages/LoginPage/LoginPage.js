import React, {useState, useEffect} from "react";
import Logo from "../../assets/logo.png"
import styled from "styled-components"
import { goToFeedPage, goToLoginPage, goToSignUpPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom"
import "@fontsource/ibm-plex-sans"
import { Bloco, Titulo, Subtitulo, Form, Linha, Botao } from "./styled";
import { Login } from "../../services/api";
import "./styled.css"



const LoginPage = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [isLoading, setIsLoading] = useState(false)
 
    useEffect(() => {        
        if (localStorage.getItem("token") !== null) {
            goToFeedPage(navigate)
        } 
    })
    
    const Logar = (ev) => {   
        ev.preventDefault()    
        let body = {
            email: email,
            password: senha
        }
        Login(body,navigate, setIsLoading)
        setEmail("")
        setSenha("")

    }

    const onChangeEmail = (ev) => {
        setEmail(ev.target.value)
    }

    const onChangeSenha = (ev) => {
        setSenha(ev.target.value)
    }

    const LoadingSpinner = () => {
        return <div className="spinner-container-login">
        <div className="loading-spinner">
        </div>
      </div>
    }
 
    

    return (
        <div>
            <Bloco>
                <Titulo><img src={Logo} /></Titulo>
                <Subtitulo>O projeto de rede social da Labenu</Subtitulo>
                <Form onSubmit={Logar}>
                    <input placeholder="Email" onChange={onChangeEmail} value={email} required></input>
                    <input type="password" placeholder="Senha" onChange={onChangeSenha} value={senha} required></input>
                    <button>{isLoading ? LoadingSpinner() : <>Continuar</>  }</button>
                </Form>
                <Linha></Linha>
                <Botao onClick={() => goToSignUpPage(navigate)}>Crie uma conta!</Botao>
            </Bloco>

        </div>
    )
}

export default LoginPage