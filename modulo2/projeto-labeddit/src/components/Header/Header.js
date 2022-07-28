import React from "react";
import styled from "styled-components";
import Logo from "../../assets/logo-header.png"
import X from "../../assets/x.png" 

const Bloco = styled.div`
padding: 0;
width: 100%;
height: 50px;
background-color: #EDEDED;
display: flex;
justify-content: space-between;
align-items: center;
`

const Image = styled.div`
width: 28px;
height: 29px;
margin: 10px 200px;
position: absolute;
`

const SignIn = styled.button`
font-size: 18px;
color: #4088CB;
border: 1px solid #EDEDED;
margin: 0px 30px;
`

const Back = styled.div`
width: 25.5px;
height: 24px;
margin-left: 34px;
`

export const Header = () => {
    return(
        <Bloco>
            <Back><img src={X}/></Back>
            <Image><img src={Logo}/></Image>
            <SignIn>Entrar</SignIn>
            

        </Bloco>
    )
}
