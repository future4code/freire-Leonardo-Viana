import React, {useEffect, useState} from "react";
import { Header } from "../../components/Header/Header";
import { Filter } from "../../components/Filter/Filter";
import styled from "styled-components";
import axios from "axios";
import Imagem from "../../assets/oi_alberto.png"

const Filmes = styled.div`
display: flex;
margin: 29px 80px 29px 112px;
flex-wrap: wrap;
@media (max-width: 950px) {
   margin: 29px 0px 29px 16px;
}

`

const Filme = styled.button`
display: flex;
flex-direction: column;
margin-right: 32px;
background-color: white;
border: 0;
:hover {
    cursor: pointer;
}
@media (max-width: 950px) {
   margin-right: 16px;
}

`

const Capa = styled.img`
width: 176px;
height: 264px;
@media (max-width: 950px) {
   width: 156px;
   height: 232px;
}
`

const Titulo = styled.div`
margin-top: 8px;
font-weight: bold;
font-size: 16px;
height: 24px;
`

const Data = styled.div`
height: 24px;
font-size: 14px;
color:#646464;
font-weight: bold;

`

export const MenuPage = () => {

   

    return (
        <div>
            <Header />
            <Filter />
            <Filmes>
                <Filme>
                    <Capa src={Imagem}/>
                    <Titulo>Oi, Alberto</Titulo>
                    <Data>12 NOV 2021</Data>
                </Filme>
                <Filme>
                    <Capa src={Imagem}/>
                    <Titulo>Oi, Alberto</Titulo>
                    <Data>12 NOV 2021</Data>
                </Filme>
                <Filme>
                    <Capa src={Imagem}/>
                    <Titulo>Oi, Alberto</Titulo>
                    <Data>12 NOV 2021</Data>
                </Filme>
                <Filme>
                    <Capa src={Imagem}/>
                    <Titulo>Oi, Alberto</Titulo>
                    <Data>12 NOV 2021</Data>
                </Filme>
                <Filme>
                    <Capa src={Imagem}/>
                    <Titulo>Oi, Alberto</Titulo>
                    <Data>12 NOV 2021</Data>
                </Filme>
                <Filme>
                    <Capa src={Imagem}/>
                    <Titulo>Oi, Alberto</Titulo>
                    <Data>12 NOV 2021</Data>
                </Filme>

            </Filmes>

        </div>

    )
}