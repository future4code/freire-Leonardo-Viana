import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/img_logo.png"
import { goToMenuPage } from "../../routes/coordinator";

const Bloco = styled.div`
width: 100%;
height: 56px;
background-color: #5C16C5;
display: flex;

`

const Titulo = styled.div`
margin: 16px 6vw;
@media (max-width: 650px) {
   margin: auto;
}
`

const Menu = styled.button`
background-color: #5C16C5;
border: 0;
:hover {
    cursor: pointer;
}
`

const Content = styled.img`
width: 184.74px;
height: 24.03px;
@media (max-width: 650px) {
    width: 140px;
    height: 18.21px;
}
`

export const Header = () => {
    const navigate = useNavigate()



    return (
        <Bloco>
            <Titulo>
                <Menu onClick={() => goToMenuPage(navigate)}>
                    <Content src={Logo}/>
                </Menu>                
            </Titulo>
        </Bloco>
    )


}