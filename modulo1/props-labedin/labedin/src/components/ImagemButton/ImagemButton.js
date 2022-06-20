import React from 'react';
import './ImagemButton.css'
import styled from 'styled-components';

const BotaoImagem = styled.div`
display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
    `

const TamanhoImagem = styled.img`
width: 30px;
    margin-right: 10px;
    `

function ImagemButton(props) {
    return (
        <BotaoImagem>
            <TamanhoImagem src={ props.imagem }/>
            <p>{ props.texto }</p>
        </BotaoImagem>

    )
}

export default ImagemButton;