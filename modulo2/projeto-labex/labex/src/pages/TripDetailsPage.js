import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Header = styled.div`
background-color: black;
color: orange;
min-height: 10vh;
display: flex;
align-items: center;
h1{
    margin: 0px 20px;
    font-size: xxx-large;
}
`
const Bloco = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 0;
`

const Subtitulo = styled.div`
color: orange;
margin: 3vh 0px 0px 0px;
h1{
    margin: 0;
}
`

const Informação = styled.div`
margin: 30px; 
width: 600px;
height: 250px;
border: 1px black solid;
display: flex;
flex-direction: column;
div{
    margin: 13px;
    font-size: large;
    font-weight: bold
}
`

const BlocoBotao = styled.div`
button{
    margin: 0px 50px;  
    height: 30px;
    width: 100px;
    border-radius: 15px;
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

const Lista = styled.div`
margin: 30px; 
width: 600px;
height: 150px;
border: 1px black solid;
display: flex;
flex-direction: column;
align-items: center;
overflow: auto;
div{
    margin: 0;
    font-size: large;
    h2{
        margin-top: 10px;
    }
    ul{
        margin: 0;

    }

}
`

function TripDetailsPage() {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <Header>
                <h1>LabeX</h1>
            </Header>
            <Bloco>
                <Subtitulo>
                    <h1>Titulo da viagem selecionada</h1>
                </Subtitulo>
                <Informação>
                    <div>Nome:</div>
                    <div>Descrição:</div>
                    <div>Planeta:</div>
                    <div>Duração:</div>
                    <div>Data:</div>
                </Informação>
                
                <BlocoBotao>
                    <button onClick={goBack}>Voltar</button>
                </BlocoBotao>
                <Lista>
                    <div>
                        <h2>Candidatos Pendentes</h2>
                    </div>
                    <div>
                        <ul>
                            <li>avrevwevwervwevwv</li>
                            <li>bvwfvwfvvvwdvdwfvdfw</li>
                            <li>bvtrebrbberbrbrbrebr</li>
                            <li>bvtrebrbberbrbrbrebr</li>
                            <li>bvtrebrbberbrbrbrebr</li>
                            <li>bvtrebrbberbrbrbrebr</li>
                            <li>bvtrebrbberbrbrbrebr</li>
                            <li>bvtrebrbberbrbrbrebr</li>
                        </ul>
                    </div>                    
                </Lista>
                <Lista>
                    <div>
                        <h2>Candidatos Aprovados</h2>
                    </div>
                    <div>
                        <ul>
                            <li>avrevwevwervwevwv</li>
                            <li>bvwfvwfvvvwdvdwfvdfw</li>
                            <li>bvtrebrbberbrbrbrebr</li>
                            <li>bvtrebrbberbrbrbrebr</li>
                            <li>bvtrebrbberbrbrbrebr</li>
                            <li>bvtrebrbberbrbrbrebr</li>
                            <li>bvtrebrbberbrbrbrebr</li>
                            <li>bvtrebrbberbrbrbrebr</li>
                        </ul>
                    </div>                    
                </Lista>
            </Bloco>


        </div>
    )
}

export default TripDetailsPage