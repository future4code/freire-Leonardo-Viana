import React from 'react';
import './CardGrande.css';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const Foto = styled.img`
width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const Subtitulo = styled.h4`
 margin-bottom: 15px;
`

const DivisaoContainer = styled.div`
display: flex;
    flex-direction: column;
    justify-items: flex-start;
    `


function CardGrande(props) {
    return (
        <Container>
            <Foto src={props.imagem} />
            <DivisaoContainer>
                <Subtitulo>{props.nome}</Subtitulo>
                <p>{props.descricao}</p>
            </DivisaoContainer>
        </Container>
    )
}

export default CardGrande;