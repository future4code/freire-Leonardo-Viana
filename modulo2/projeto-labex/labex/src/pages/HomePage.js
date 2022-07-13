import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { goToListTripPage, goToLoginPage, goToAdminHomePage } from '../routes/coordinator'
import Logo from './LabeX.png'

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
text-align: center;
height: 90vh;
margin: 0;
svg{
    height: 300px;
    width: 300px;
    margin: 10vh;
}
`

const BlocoBotao = styled.div`
display: flex;
justify-content: center;
button{
    margin: 0px 50px;
    padding: 0px 0px;
    height: 50px;
    width: 130px;
    border-radius: 5px;
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

function HomePage() {

    const navigate = useNavigate()  

    return (
        <div>
            <Header>
                <h1>LabeX</h1>
            </Header>
            <Bloco>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M484.6 62C502.6 52.8 522.6 48 542.8 48H600.2C627.2 48 645.9 74.95 636.4 100.2C618.2 148.9 582.1 188.9 535.6 212.2L262.8 348.6C258.3 350.8 253.4 352 248.4 352H110.7C101.4 352 92.5 347.9 86.42 340.8L13.34 255.6C6.562 247.7 9.019 235.5 18.33 230.8L50.49 214.8C59.05 210.5 69.06 210.2 77.8 214.1L135.1 239.1L234.6 189.7L87.64 95.2C77.21 88.49 78.05 72.98 89.14 67.43L135 44.48C150.1 36.52 169.5 35.55 186.1 41.8L381 114.9L484.6 62zM0 480C0 462.3 14.33 448 32 448H608C625.7 448 640 462.3 640 480C640 497.7 625.7 512 608 512H32C14.33 512 0 497.7 0 480z"/></svg>
                </div>
                <BlocoBotao>
                    <button onClick={() => goToListTripPage(navigate)}>Ver lista de viagens</button>
                    <button onClick={() => goToLoginPage(navigate)}>Área de administrador</button>
                </BlocoBotao>
            </Bloco>
        </div>
    )
}

export default HomePage