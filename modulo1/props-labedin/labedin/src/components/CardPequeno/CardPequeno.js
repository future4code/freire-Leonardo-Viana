import React from 'react';
import './CardPequeno.css';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
    flex-direction: column;    
    padding: 20px 10px;
    height: 200px;
`

const Card = styled.div`
display: flex;
    flex-direction: row;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    border: 1px solid black;
    `

function CardPequeno(props) {
    return (
        <Container>
            <Card>
                <img src={props.imagem}/>
                <div><b>Email: </b></div>
                <div>" {props.email} "</div>
            </Card>
            <Card>
                <img src={props.outraImagem}/>
                <div><b>Endereço:</b></div>
                <div> {props.endereco} </div>
            </Card>

        </Container>
    )
}

export default CardPequeno;
