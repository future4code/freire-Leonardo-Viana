import React, {useState, useEffect} from "react";
import { Header } from "../../components/Header/Header";
import Logo from "../../assets/logo.png"
import styled from "styled-components"
import { goToFeedPage, goToLoginPage, goToSignUpPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom"
import "@fontsource/ibm-plex-sans"
import { Bloco, Titulo, Subtitulo, Form, Linha, Botao } from "./styled";
import { Login } from "../../services/api";



const LoginPage = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    // useEffect(() => {
    //     const token = localStorage.getItem("token")
    //     if (token == null) {
    //         console.log("Não está logado")
    //     } else {
    //         goToFeedPage(navigate)
    //     }
    // })
    
    const Logar = (ev) => {   
        ev.preventDefault()    
        let body = {
            email: email,
            password: senha
        }
        Login(body,navigate)
        setEmail("")
        setSenha("")
    }

    const onChangeEmail = (ev) => {
        setEmail(ev.target.value)
    }

    const onChangeSenha = (ev) => {
        setSenha(ev.target.value)
    }

    

    return (
        <div>
            <Bloco>
                <Titulo><img src={Logo} /></Titulo>
                <Subtitulo>O projeto de rede social da Labenu</Subtitulo>
                <Form onSubmit={Logar}>
                    <input placeholder="Email" onChange={onChangeEmail} value={email} required></input>
                    <input type="password" placeholder="Senha" onChange={onChangeSenha} value={senha} required></input>
                    <button>Continuar</button>
                </Form>
                <Linha></Linha>
                <Botao onClick={() => goToSignUpPage(navigate)}>Crie uma conta!</Botao>
            </Bloco>

        </div>
    )
}

export default LoginPage