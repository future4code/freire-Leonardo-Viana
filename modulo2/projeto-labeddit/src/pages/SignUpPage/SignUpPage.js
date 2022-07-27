import React from "react";
import { Header } from "../../components/Header/Header";
import { Bloco, Titulo, Form, Input, Checkbox, Botao } from "./styled";



const SignUpPage = () => {
    return(
        <div>
            <Header/>
            <Bloco>
                <Titulo>{"Olá, boas vindas ao LabEddit ;)"}</Titulo>
                <Form>
                    <Input placeholder="Nome de usuário"></Input>
                    <Input placeholder="E-mail"></Input>
                    <Input placeholder="Senha"></Input>
                    <p>Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade</p>
                    <div>
                        <Checkbox type="checkbox" id="termos" name="termos"/>
                        <label for="termos">Eu concordo em receber emails sobre coisas legais no Labeddit</label>
                    </div>
                    <Botao>Cadastrar</Botao>               
                </Form>
            </Bloco>  
            
        </div>
    )
}

export default SignUpPage