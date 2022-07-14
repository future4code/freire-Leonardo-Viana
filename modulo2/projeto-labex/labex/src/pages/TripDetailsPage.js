import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'
import { goBack, goToLoginPage } from '../routes/coordinator'
import { useEffect, useState } from 'react'

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
    const pathParams = useParams()

    const [detalhes, setDetalhes] = useState({})

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token == null) {
            console.log("Não está logado")
            goToLoginPage(navigate)
        }
    })

    useEffect(() => {
        getTripDetail(pathParams.id)
    }, [])

    const getTripDetail = (id) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-almeida-freire/trip/${id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then((res) => {
            setDetalhes(res.data.trip)
            console.log(res.data.trip)
        }).catch((er) => {
            console.log(er.repsonse)
        })
    }

    const condicaoPendente = () => {
        if (typeof (detalhes.candidates) == 'object') {
            return detalhes.candidates.map((candidatos) => {
                return <li> {candidatos.name} </li>
            })
        }
    }

    const condicaoAprovados = () => {
        if ((typeof (detalhes.approved) == 'object') && (detalhes.approved.lenght > 0)) {
            return detalhes.approved.map((candidatos) => {
                return <li> {candidatos.name} </li>
            })
        }
    }


    return (

        <div>

            <Header>
                <h1>LabeX</h1>
            </Header>
            <Bloco>
                <Subtitulo>
                    <h1>{detalhes.name}</h1>
                </Subtitulo>
                <Informação>
                    <div>Nome:{detalhes.name}</div>
                    <div>Descrição:{detalhes.description}</div>
                    <div>Planeta:{detalhes.planet}</div>
                    <div>Duração:{detalhes.durationInDays}</div>
                    <div>Data:{detalhes.date}</div>
                </Informação>

                <BlocoBotao>
                    <button onClick={() => goBack(navigate)}>Voltar</button>
                </BlocoBotao>
                <Lista>
                    <div>
                        <h2>Candidatos Pendentes</h2>
                    </div>
                    <div>
                        <ul>
                            {condicaoPendente()}
                        </ul>
                    </div>
                </Lista>
                <Lista>
                    <div>
                        <h2>Candidatos Aprovados</h2>
                    </div>
                    <div>
                        <ul>
                            {condicaoAprovados()}
                        </ul>
                    </div>
                </Lista>
            </Bloco>


        </div>
    )
}

export default TripDetailsPage