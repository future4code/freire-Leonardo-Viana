import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Bloco = styled.div`
width: 100%;
background-color: #2D0C5E;
display: flex;
flex-direction: column;
align-items: center;
@media (max-width: 950px) {
    align-self: start;    
}
`

const Slogan = styled.div`
margin-top: 85px;
max-width: 1000px;
margin-left: 16px;
line-height: 56px;
text-align: center;
color: white;
font-size: 48px;
font-weight: bold;
@media (max-width: 950px) {
    text-align: left;   
    margin-right: 63px;
}
`

const Subtitulo = styled.div`
color: white;
margin-top: 38px;
font-size: 14px;
font-weight: bold;
justify-self: left;
`

const Temas = styled.div`
width: 100%;
display: flex;
margin-top: 15px;
margin-left: 16px;
margin-bottom: 80px;
justify-content: center;
flex-wrap: wrap;
@media (max-width: 950px) {
   justify-content: left;
}
`

const Tema = styled.button`
padding: 8px 16px;
margin-right: 12px;
margin-bottom: 12px;
border: 0;
/* background-color: white; */
color: black;
gap: 8px;
border-radius: 4px;
width: max-content;
font-weight: bold;
font-size: 16px;
height: 32px;
:hover{
    cursor: pointer;
    background-color: #D18000;
}

`

export const Filter = () => {

    const select = () => {
        if (document.getElementById('tema').style.backgroundColor = 'white') {
            document.getElementById('tema').style.backgroundColor = '#D18000'
        } else {
            document.getElementById('tema').style.backgroundColor = 'white'
        } 
    }
    


    return (
        <Bloco>
            <Slogan>
                Milhões de filmes, séries e pessoas para descobrir. Explore já.
            </Slogan>
            <Subtitulo>
                FILTRE POR:
            </Subtitulo>
            <Temas>
                <Tema>Ação</Tema>
                <Tema>Aventura</Tema>
                <Tema>Animação</Tema>
                <Tema>Comédia</Tema>
                <Tema>Crime</Tema>
                <Tema>Documentário</Tema>
                <Tema>Drama</Tema>
                <Tema>Família</Tema>
                <Tema>Fantasia</Tema>
                <Tema>História</Tema>
                <Tema>Terror</Tema>
                <Tema>Música</Tema>
                <Tema>Mistério</Tema>
                <Tema>Romance</Tema>
                <Tema>Ficção Científica</Tema>
                <Tema>Cinema TV</Tema>
                <Tema>Thriller</Tema>
                <Tema>Guerra</Tema>
                <Tema>Faroeste</Tema>
            </Temas>

        </Bloco>
    )
}