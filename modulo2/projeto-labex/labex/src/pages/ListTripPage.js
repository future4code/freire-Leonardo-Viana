import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { goBack, goToApplicationFormPage } from '../routes/coordinator'

const BlocoBotao = styled.div`
`

function ListTripPage() {

    const navigate = useNavigate()

    // const goBack = () => {
    //     navigate(-1)
    // }

    // const goToApplicationFormPage = () => {
    //     navigate("/applicationform")
    // }


    return (
        <div>
           <p>ListTripPage</p>
           <BlocoBotao>
            <button onClick={() => goBack(navigate)}>Voltar</button>
            <button onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</button>
            </BlocoBotao> 
            </div>
    )
}

export default ListTripPage