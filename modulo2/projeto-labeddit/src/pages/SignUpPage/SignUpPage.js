import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignUp } from "../../services/api";
import { Bloco, Titulo, Form, Input, Checkbox, Botao, Header, Image, SignIn, Tela } from "./styled";
import Logo from "../../assets/logo-header.png"
import { goToLoginPage } from "../../routes/coordinator";
import "./styled.css"

const SignUpPage = () => {

    const navigate = useNavigate()

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [isLoading, setIsLoading] = useState(false)


    const onChangeNome = (ev) => {
        setNome(ev.target.value)
    }

    const onChangeEmail = (ev) => {
        setEmail(ev.target.value)
    }

    const onChangeSenha = (ev) => {
        setSenha(ev.target.value)
    }


    const Cadastro = (ev) => {
        ev.preventDefault()
        let body = {
            username: nome,
            email: email,
            password: senha
        }
        SignUp(body, navigate, setIsLoading)
        setNome('')
        setEmail('')
        setSenha('')
    }

    const LoadingSpinner = () => {
        return <div className="spinner-container-signup">
        <div className="loading-spinner">
        </div>
      </div>
    }




    return (
        <Tela>
            <Header>
                <Image><img src={Logo}/></Image>
                <SignIn onClick={() => goToLoginPage(navigate)}>Entrar</SignIn>
            </Header>
            <Bloco>
                <Titulo>{"Olá, boas vindas ao LabEddit ;)"}</Titulo>
                <Form onSubmit={Cadastro}>
                    <Input placeholder="Nome de usuário" onChange={onChangeNome} value={nome} required></Input>
                    <Input placeholder="Email" type="email" onChange={onChangeEmail} value={email} required></Input>
                    <Input placeholder="Senha" type="password" onChange={onChangeSenha} value={senha} required></Input>
                    <p>Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade</p>
                    <div>
                        <Checkbox type="checkbox" id="termos" name="termos" required />
                        <label>Eu concordo em receber emails sobre coisas legais no Labeddit</label>
                    </div>
                    <Botao>{isLoading ? <>{LoadingSpinner()}</> : <>Cadastrar</>  }</Botao>
                </Form>
            </Bloco>

        </Tela>
    )
}

export default SignUpPage