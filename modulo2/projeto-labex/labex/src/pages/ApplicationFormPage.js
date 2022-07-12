import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../routes/coordinator'

const BlocoBotao = styled.div`
`

function ApplicationFormPage() {

    const navigate = useNavigate()

    // const goBack = () => {
    //     navigate(-1)
    // }

    


    return (
        <div>
            <p>ApplicationFormPage</p>
            <BlocoBotao>
                <button onClick={() => goBack(navigate)}>Voltar</button>
                <button>Enviar</button>
            </BlocoBotao>
        </div>
    )
}

export default ApplicationFormPage